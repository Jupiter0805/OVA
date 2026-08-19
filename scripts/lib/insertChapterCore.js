// Shared logic for regenerating one chapter's lessons/pretest/posttest in
// Supabase. Used by scripts/insertChapterN.js wrappers — each wrapper just
// supplies chapterNumber + its own content module. Uses the service_role
// key, so it must only ever run via `node scripts/insertChapterN.js`.

import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function insertChapterContent({ chapterNumber, lessons, pretestQuestions, posttestQuestions }) {
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    console.error('❌ Falta VITE_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en .env.local');
    process.exit(1);
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  console.log(`🔎 Buscando Capítulo ${chapterNumber}...`);
  const { data: chapter, error: chapterError } = await supabase
    .from('chapters')
    .select('id, title')
    .eq('chapter_number', chapterNumber)
    .single();

  if (chapterError || !chapter) {
    console.error(`❌ No se encontró el Capítulo ${chapterNumber}:`, chapterError?.message);
    process.exit(1);
  }
  console.log(`   Capítulo ${chapterNumber} = "${chapter.title}" (${chapter.id})\n`);

  const chapterId = chapter.id;

  // --- Clean slate: remove the previous lessons/tests/questions for this chapter ---
  console.log(`🧹 Limpiando contenido anterior del Capítulo ${chapterNumber}...`);

  const { data: oldTests } = await supabase.from('tests').select('id, test_type').eq('chapter_id', chapterId);
  const oldTestIds = (oldTests || []).map((t) => t.id);

  if (oldTestIds.length > 0) {
    const { error: attemptsDelError } = await supabase.from('test_attempts').delete().in('test_id', oldTestIds);
    if (attemptsDelError) throw attemptsDelError;

    const { error: questionsDelError } = await supabase.from('questions').delete().in('test_id', oldTestIds);
    if (questionsDelError) throw questionsDelError;

    const { error: testsDelError } = await supabase.from('tests').delete().in('id', oldTestIds);
    if (testsDelError) throw testsDelError;
  }

  const { error: lessonsDelError } = await supabase.from('lessons').delete().eq('chapter_id', chapterId);
  if (lessonsDelError) throw lessonsDelError;

  console.log(`   Borrados: ${oldTestIds.length} test(s) previos, sus preguntas e intentos, y las lecciones anteriores.\n`);

  // --- Insert lessons ---
  console.log(`📚 Insertando ${lessons.length} lecciones...`);
  const { error: lessonsError } = await supabase
    .from('lessons')
    .insert(lessons.map((l) => ({ ...l, chapter_id: chapterId })))
    .select();
  if (lessonsError) throw lessonsError;

  // --- Insert pretest ---
  console.log('📝 Insertando pretest...');
  const { data: pretest, error: pretestError } = await supabase
    .from('tests')
    .insert({
      chapter_id: chapterId,
      test_type: 'pretest',
      title: `Pretest - Capítulo ${chapterNumber}`,
      description: 'Reflexiona sobre estos conceptos antes de las lecciones. No es calificable.',
      passing_score_percentage: null,
    })
    .select()
    .single();
  if (pretestError) throw pretestError;

  const { data: insertedPretestQ, error: pretestQError } = await supabase
    .from('questions')
    .insert(pretestQuestions.map((q) => ({ ...q, test_id: pretest.id })))
    .select();
  if (pretestQError) throw pretestQError;

  // --- Insert posttest ---
  console.log('✅ Insertando posttest...');
  const { data: posttest, error: posttestError } = await supabase
    .from('tests')
    .insert({
      chapter_id: chapterId,
      test_type: 'posttest',
      title: `Posttest - Capítulo ${chapterNumber}`,
      description: 'Demuestra tu comprensión de los conceptos. Necesitas ≥70% para completar el capítulo.',
      passing_score_percentage: 70,
    })
    .select()
    .single();
  if (posttestError) throw posttestError;

  const { data: insertedPosttestQ, error: posttestQError } = await supabase
    .from('questions')
    .insert(posttestQuestions.map((q) => ({ ...q, test_id: posttest.id })))
    .select();
  if (posttestQError) throw posttestQError;

  // --- Reset stale progress: content changed, so any existing
  //     lessons_completed count for this chapter is now meaningless. ---
  const { data: staleProgress } = await supabase
    .from('user_progress')
    .select('id, user_id')
    .eq('chapter_id', chapterId);

  if (staleProgress && staleProgress.length > 0) {
    console.log(`\n⚠️  Reseteando progreso previo de ${staleProgress.length} usuario(s) en este capítulo (el contenido de las lecciones cambió, el conteo anterior ya no es válido)...`);
    const { error: resetError } = await supabase.from('user_progress').delete().eq('chapter_id', chapterId);
    if (resetError) throw resetError;
  }

  // --- Validate ---
  const { data: finalLessons } = await supabase.from('lessons').select('id, lesson_number, title').eq('chapter_id', chapterId).order('lesson_number');
  const { data: finalPretestQ } = await supabase.from('questions').select('id').eq('test_id', pretest.id);
  const { data: finalPosttestQ } = await supabase.from('questions').select('id').eq('test_id', posttest.id);

  const lessonsOk = finalLessons?.length === lessons.length;
  const pretestOk = finalPretestQ?.length === pretestQuestions.length;
  const posttestOk = finalPosttestQ?.length === posttestQuestions.length;

  console.log('\n' + (lessonsOk && pretestOk && posttestOk ? `✅ CAPÍTULO ${chapterNumber} INSERTADO EXITOSAMENTE` : `⚠️  CAPÍTULO ${chapterNumber} INSERTADO CON DISCREPANCIAS`));
  console.log('━'.repeat(50));
  console.log(`📚 Lecciones: ${finalLessons?.length || 0}/${lessons.length} insertadas`);
  (finalLessons || []).forEach((l, idx) => {
    const prefix = idx === (finalLessons.length - 1) ? '└─' : '├─';
    console.log(`${prefix} L${l.lesson_number}: ${l.title}`);
  });
  console.log(`\n📝 Pre-test: 1/1 test + ${finalPretestQ?.length || 0}/${pretestQuestions.length} preguntas`);
  console.log(`✅ Post-test: 1/1 test + ${finalPosttestQ?.length || 0}/${posttestQuestions.length} preguntas`);
  console.log('\n🔗 URL: /chapter/' + chapterId);
  console.log(`   Flujo: Pre-test → ${lessons.length} lecciones → Post-test\n`);

  if (!(lessonsOk && pretestOk && posttestOk)) {
    process.exit(1);
  }
}
