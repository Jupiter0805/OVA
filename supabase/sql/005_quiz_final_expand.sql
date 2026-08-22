-- Quiz Final expansion: richer per-case clinical detail (per-sextant
-- findings, gingival phenotype/recession, occlusal trauma, furcation,
-- descriptive radiographic findings, comorbidity values, case difficulty).
-- Additive only — no columns from 004 are removed or renamed.

alter table public.quiz_pacientes
  add column if not exists valores_comorbilidades jsonb,
  add column if not exists dientes_ausentes_lista varchar(150),
  add column if not exists datos_sextantes jsonb,
  add column if not exists fenotipo_gingival varchar(100),
  add column if not exists recesion_gingival jsonb,
  add column if not exists trauma_oclusal_primario varchar(255),
  add column if not exists trauma_oclusal_secundario varchar(255),
  add column if not exists furcacion_presente boolean,
  add column if not exists furcacion_detalle varchar(255),
  add column if not exists hallazgos_radiograficos text,
  add column if not exists patron_perdida_osea varchar(150),
  add column if not exists ligamento_periodontal_estado varchar(150),
  add column if not exists dificultad_caso varchar(20);
