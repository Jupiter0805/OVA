// Seeds the 5 Quiz Final clinical cases into Supabase. Run once (or
// re-run to reset/update the cases) via `npm run insert:quizfinal`.
// Requires supabase/sql/004_quiz_final_setup.sql to have been applied
// already (creates quiz_pacientes / quiz_intentos + RLS).

import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { pacientes } from './quizFinalContent.js';

dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function main() {
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    console.error('❌ Falta VITE_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en .env.local');
    process.exit(1);
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  console.log(`📝 Insertando/actualizando ${pacientes.length} casos del Quiz Final...`);

  // Upsert by caso_numero so re-running this after editing quizFinalContent.js
  // updates existing rows instead of duplicating them.
  const { data, error } = await supabase
    .from('quiz_pacientes')
    .upsert(pacientes, { onConflict: 'caso_numero' })
    .select('id, caso_numero, nombre');

  if (error) {
    console.error('❌ Error insertando casos:', error.message);
    process.exit(1);
  }

  console.log(`✅ ${data.length} casos guardados:`);
  data
    .sort((a, b) => a.caso_numero - b.caso_numero)
    .forEach((p) => console.log(`   ├─ Caso ${p.caso_numero}: ${p.nombre}`));

  const pending = pacientes.filter((p) => !p.periodontograma_url).length;
  if (pending > 0) {
    console.log(
      `\n⚠️  ${pending} de ${pacientes.length} casos todavía no tienen URLs de imágenes (periodontograma/radiografías) — la UI muestra un placeholder hasta que se actualicen en Supabase.`,
    );
  }
}

main().catch((err) => {
  console.error('\n❌ FALLÓ LA INSERCIÓN:', err);
  process.exit(1);
});
