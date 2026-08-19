import { insertChapterContent } from './lib/insertChapterCore.js';
import { lessons, pretestQuestions, posttestQuestions } from './chapter1Content.js';

insertChapterContent({ chapterNumber: 1, lessons, pretestQuestions, posttestQuestions }).catch((err) => {
  console.error('\n❌ FALLÓ LA INSERCIÓN:', err);
  process.exit(1);
});
