import { insertChapterContent } from './lib/insertChapterCore.js';
import { lessons, pretestQuestions, posttestQuestions } from './chapter4Content.js';

insertChapterContent({ chapterNumber: 4, lessons, pretestQuestions, posttestQuestions }).catch((err) => {
  console.error('\n❌ FALLÓ LA INSERCIÓN:', err);
  process.exit(1);
});
