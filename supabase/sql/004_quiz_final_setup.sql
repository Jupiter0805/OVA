-- Quiz Final: "Diagnostica el Caso" — 5 real clinical cases (Daniel, Marta,
-- Carmen, Clara, Yoselin), admin/master-only diagnostic practice tool.
-- Reuses public.is_admin() from 001_admin_panel_setup.sql for RLS instead
-- of the non-existent `user_roles` table referenced in the source spec —
-- this project's actual role field is profiles.user_type.
--
-- Field names translated to match this course's established terminology:
-- nic_maximo -> cal_maximo, sondaje_maximo -> pps_maximo,
-- stage_correcto -> estadio_correcto, grade_correcto -> grado_correcto
-- (Estadio/Grado, not Stage/Grade, per the terminology pass applied to
-- every chapter earlier in this project).

create table if not exists public.quiz_pacientes (
  id uuid primary key default gen_random_uuid(),
  nombre varchar(50) not null,
  edad int not null,
  sexo varchar(10),
  ocupacion varchar(100),
  razon_consulta text,

  -- Antecedentes
  antecedentes_sistemicos text,
  medicamentos text,
  habitos text,
  antecedentes_quirurgicos text,
  alergias text,

  -- Hallazgos clínicos
  hallazgos_principales text,

  -- Datos clínicos clave
  cal_maximo decimal(3,1),
  bop_porcentaje int,
  pps_maximo int,
  rbl_estimado varchar(50),
  movilidad varchar(150),
  dientes_presentes int,
  dientes_ausentes int,
  otros_hallazgos jsonb,

  -- URLs de imágenes (pendientes hasta que el usuario las provea)
  periodontograma_url varchar(500),
  radiografia_panoramica_url varchar(500),
  radiografia_sextante_1_vestibular varchar(500),
  radiografia_sextante_1_palatino varchar(500),
  radiografia_sextante_2_vestibular varchar(500),

  -- Diagnóstico correcto (clave de respuesta)
  estadio_correcto int not null,
  extension_correcta varchar(20) not null,
  grado_correcto varchar(1) not null,
  notas_diagnostico text,

  caso_numero int not null unique,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.quiz_intentos (
  id uuid primary key default gen_random_uuid(),
  usuario_id uuid not null references auth.users(id) on delete cascade,
  paciente_id uuid not null references public.quiz_pacientes(id) on delete cascade,
  estadio_seleccionado int not null,
  extension_seleccionada varchar(20) not null,
  grado_seleccionado varchar(1) not null,
  es_correcta boolean not null,
  attempted_at timestamptz default now()
);

alter table public.quiz_pacientes enable row level security;
alter table public.quiz_intentos enable row level security;

-- quiz_pacientes: admin/master only, read-only from the client (seeding is
-- done via a service-role script, matching scripts/insertChapterN.js).
drop policy if exists "Admins can view quiz pacientes" on public.quiz_pacientes;
create policy "Admins can view quiz pacientes"
  on public.quiz_pacientes for select
  using (public.is_admin());

-- quiz_intentos: admins can log their own attempts and view their own
-- history; can also view everyone else's (useful if masters want to audit
-- who's practiced the quiz, mirroring the existing admin visibility into
-- test_attempts).
drop policy if exists "Admins can insert own quiz attempts" on public.quiz_intentos;
create policy "Admins can insert own quiz attempts"
  on public.quiz_intentos for insert
  with check (auth.uid() = usuario_id and public.is_admin());

drop policy if exists "Admins can view quiz attempts" on public.quiz_intentos;
create policy "Admins can view quiz attempts"
  on public.quiz_intentos for select
  using (public.is_admin());
