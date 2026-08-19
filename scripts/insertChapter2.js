import { insertChapterContent } from './lib/insertChapterCore.js';
import { lessons, pretestQuestions, posttestQuestions } from './chapter2Content.js';

insertChapterContent({ chapterNumber: 2, lessons, pretestQuestions, posttestQuestions }).catch((err) => {
  console.error('\n❌ FALLÓ LA INSERCIÓN:', err);
  process.exit(1);
});
