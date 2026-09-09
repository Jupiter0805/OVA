-- Quiz Final: flexible image galleries. The 6 new cases (added 2026-09-09)
-- broke the fixed 5-column image model — several have a periodontogram
-- split into superior/inferior halves as separate files, a variable-count
-- radiograph series (up to 6 images), and clinical photographs, which none
-- of periodontograma_url / radiografia_panoramica_url /
-- radiografia_sextante_1_vestibular / _palatino / radiografia_sextante_2_
-- vestibular were built to represent.
--
-- Additive only — old columns from 004/005 are kept (now unused going
-- forward) so nothing that already reads them breaks. Each new column is
-- a jsonb array of {label, url} objects, ordered as they should display.

alter table public.quiz_pacientes
  add column if not exists periodontograma_urls jsonb,
  add column if not exists radiografia_urls jsonb,
  add column if not exists fotos_clinicas_urls jsonb;
