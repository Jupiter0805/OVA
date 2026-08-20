# OVA Periodontitis UNICOC — Project Context

Landing page + learning platform (OVA = Objeto Virtual de Aprendizaje) teaching the
AAP/EFP 2018 periodontitis classification (Stage/Grade) to UNICOC dental students.
Client: Universidad Cooperativa de Colombia.

Last updated: 2026-08-19 (Chapter 4 content added — all 4 chapters complete).

## Stack

- React 18 + TypeScript + Vite (`tsc -b && vite build`)
- TailwindCSS 3.3 (utility classes) + a handful of plain CSS files for things
  Tailwind can't reach (see "Lesson content HTML" below)
- Framer Motion for animation
- React Router v6 (client-side routing, `BrowserRouter`)
- Supabase: Postgres + Auth + PostgREST, used directly from the browser with the
  anon key (no custom backend/API layer at all)

## Repo & deployment

- Local path: `C:\Users\Juan Ignacio\Documents\ova-landing-unicoc` (sibling of the
  unrelated `marketscope` project — do not confuse the two)
- GitHub: `https://github.com/Jupiter0805/OVA.git`
- Branches kept in sync on every push: `main`, `develop`, `feature/landing`,
  `feature/components` (all fast-forwarded together — no real branch divergence)
- Vercel: auto-deploys from `main` via its GitHub integration → `ova.vercel.app`
  - `vercel.json` has a catch-all rewrite to `index.html` (required — without it,
    direct loads/refreshes of `/login`, `/dashboard`, `/chapter/:id` etc. 404,
    since those routes only exist client-side via React Router)
  - Vercel's own env vars must include `VITE_SUPABASE_URL` and
    `VITE_SUPABASE_ANON_KEY` (set there manually once; not read from the repo)
- Local dev server: `npm run dev` → `http://localhost:3000` (port set in
  `vite.config.ts`, not Vite's 5173 default)
- Git identity for commits: global config (`Jupiter0805` /
  `juanmorenocordido0805@gmail.com`), not a per-repo override

## Directory structure (non-obvious parts)

```
src/
  components/          shared UI (Header, Hero, Features, ChapterCard, ...)
  components/lessons/  LessonsFlow (paginates a chapter's lessons)
  components/tests/    QuestionCard, PreTestComponent, PostTestComponent
  context/AuthContext  session + profile (role) state, see below
  pages/               one component per route
  services/            all Supabase reads/writes live here, grouped by table
  styles/              globals.css (design tokens, .container width), 
                        lessonContent.css (styles raw lesson HTML — see below)
scripts/               ⚠️ NOT under src/ on purpose — see "Service role key" below
supabase/sql/          hand-run migrations (see below), numbered, meant to be
                        pasted into the Supabase SQL Editor
```

## Service role key — where it can and can't live

The Supabase **service_role key bypasses RLS entirely**. It must never end up in
anything Vite bundles for the browser. Rules that have been followed throughout:

- `.env.local` (gitignored) holds `SUPABASE_SERVICE_ROLE_KEY` — deliberately
  **not** prefixed `VITE_`, so Vite's `import.meta.env` never exposes it
  client-side. Only `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` are meant to
  reach the browser.
- Any script that needs the service key (content seeding, admin backfills) lives
  in `scripts/` at the repo root, **never under `src/`** — `src/` is inside
  Vite's module graph, so anything there risks being pulled into the browser
  bundle if some file ever imports it by accident.
- Those scripts are plain Node **ESM** (`export const ...` / `import`), not
  CommonJS — the project's `package.json` has `"type": "module"`, so a `.js`
  file using `module.exports = {...}` silently returns `{}` when required
  instead of throwing. Cost real debugging time once already; don't reintroduce
  `module.exports` here.
- The service_role key is never given to the running app. It's only ever used
  interactively (via `node scripts/...`) or pasted directly into curl commands
  during a session — it lives in `.env.local` and in this operator's own
  memory/notes, not in any file that ships.

## Supabase project

- URL: `https://jaghsnjjklrorojbtkpr.supabase.co`
- Tables: `profiles`, `chapters`, `lessons`, `tests`, `questions`,
  `test_attempts`, `user_progress`, `case_studies` (not used yet)
- All content tables (`chapters`, `lessons`, `tests`, `questions`) are
  anon-key-**readable** (public SELECT) but **RLS-blocks anon/authenticated
  writes** — content can only be seeded with the service_role key.
- `user_progress` / `test_attempts`: authenticated users can read/write their
  **own** rows (verified end-to-end with a real non-service-role session,
  including that a non-admin's attempt to touch another user's rows is
  correctly blocked).

### Roles (`profiles.user_type`)

Three values: `student` (default), `admin`, `master`. Set up in
`supabase/sql/001_admin_panel_setup.sql` + `002_fix_role_escalation_trigger.sql`
(both already run against the live project — re-running is safe, they're
idempotent). What they did:

- Added an `auth.users` → `profiles` insert trigger (profiles used to never get
  populated automatically; without it the admin panel can only see whoever
  happens to already have a row)
- `is_admin()` security-definer helper + additive RLS policies letting
  admin/master SELECT all profiles/progress/attempts and DELETE any
  progress/attempts row (used by the "Reiniciar Progreso" admin action)
- A trigger that reverts any attempt by a non-admin to change their own
  `user_type` via a direct API call (privilege-escalation guard) — **note**:
  this trigger only intervenes when there's an authenticated session
  (`auth.uid()` not null); it deliberately does not block service_role/Studio
  edits, which is what `002_...sql` fixed after the first version broke that.

Only `juanmoreno@unicoc.edu.co` is `master` today. No other `admin` accounts
exist.

**In-app role management + user deletion** (added 2026-08-19, `supabase/sql/003_admin_manage_users.sql`
— ⚠️ this file has **not** been run against the live project yet, unlike
001/002; it needs to be pasted into the Supabase SQL Editor once before any
of this works — until then, `updateUserRole`/`deleteUser` calls from
`AdminPage` will fail):
- `AdminPage` now has "Cambiar Rol" (student/admin/master dropdown, with a
  confirm step) and "Eliminar Usuario" (hard delete: `test_attempts` →
  `user_progress` → `profiles` → `auth.users`, in that order) per user row.
- Both admin and master can do both actions on any **other** user. Neither
  can act on their **own** row from this panel (self-lockout/self-deletion
  guard, UI-level via `canManage()` in `AdminPage.tsx`).
- Only master can change or delete the master row — enforced at the DB
  level via `protect_master_account()` triggers on `profiles` (BEFORE
  UPDATE and BEFORE DELETE) and inside the `admin_delete_user` RPC, not
  just hidden in the UI, so it holds even against a direct API call.
- `admin_delete_user(target_user_id uuid)` is a `security definer` RPC
  because deleting the `auth.users` row needs privilege the anon/authenticated
  key never has — this is the standard Supabase pattern for real user
  deletion without exposing the service_role key to the browser.
- Note: as specified, admin can promote another user all the way to
  `master` (the same power master has) — the only asymmetry between the
  two roles is that admin can't touch the master row itself. Flagged to the
  user; not narrowed further without their say-so.
- Promoting someone to `master` via a route other than this UI (Supabase
  Studio table editor, or a service_role REST call) still works as before.

The Admin nav link only renders where `Header.tsx` (landing) or the
Dashboard's own top bar explicitly check `isAdmin` from `AuthContext` — most
authenticated pages have their own separate header bars that don't share
`Header.tsx`, so a new page needs its own admin-link wiring if it should have
one (this bit DashboardPage once already: the link existed in code but only in
`Header.tsx`, which is never rendered post-login).

### Content status (as of this doc)

| Chapter | DB row | Lessons | Pretest | Posttest |
|---|---|---|---|---|
| 1 — El cambio que transformó la periodoncia | ✅ | **8/8**, postgrado-level academic depth + 3 real figures | 4 Q (UNICOC-approved) | 5 Q (UNICOC-approved, ≥70% to pass) |
| 2 — Estadios | ✅ | **8/8**, postgrado-level academic depth | 5 Q (UNICOC-approved) | 5 Q (UNICOC-approved, ≥70% to pass) |
| 3 — Grados | ✅ | **8/8**, full Estadio×Grado prognostic matrix (12 combos) | 5 Q (UNICOC-approved) | 5 Q (UNICOC-approved, ≥70% to pass) |
| 4 — Zonas Grises y clarificaciones de uso clínico | ✅ | **8/8**, 4 fully worked 24-month cases + 4 brief cases + synthesis + decision tool | 5 Q (UNICOC-approved) | 5 Q (UNICOC-approved, ≥70% to pass) |

Chapter titles (`chapters.title`, the DB row, distinct from each chapter's
internal lesson-title style) were renamed 2026-08-20 per explicit user
request — Ch2 "Diagnosticando en 3 pasos"→"Estadios", Ch3 "Clasificando:
Estadio y Grado"→"Grados", Ch4 "Casos reales..."→"Zonas Grises y
clarificaciones de uso clínico". Ch1's title was left unchanged. This was
a plain `chapters` table UPDATE via service_role (like
`estimated_time_minutes` bumps), not a content-seeding script — no
`scripts/insertChapterN.js` touches `chapters.title`, so re-running those
scripts won't revert this. Note the DB titles no longer describe each
chapter's actual content as literally (e.g. Ch2's title is now "Estadios"
even though its lessons are about diagnostic technique, not staging) —
that's intentional per the user, not a mismatch to "fix".

All 4 chapters' pretest/posttest question **counts are now 5/5, not the
original 4/8** — the user stated these exact questions are pre-approved by
the UNICOC committee and must be used verbatim for every chapter (Ch1:
2026-08-19, Ch2/Ch3/Ch4: 2026-08-20), overriding the earlier decision to keep
each chapter's original, more-integrated question set. Ch2's posttest
questions are phrased as 5 clinical-case vignettes (each ending in "¿Cuál es
el estadio más apropiado?"); Ch3's and Ch4's are standard concept/case
questions. That's per each committee doc, not an inconsistency to "fix". Do
not revert any chapter's question count/format without checking with the
user first.

**All 4 chapters are now content-complete.** No further chapter-content work is
pending unless the user requests revisions or a 5th chapter.

### Chapter 2 Lesson 2 fixes (2026-08-20) — CAL formula was clinically wrong

The user caught a real error in the CAL calc-box: the old version only stated
the recession case (`CAL = PPS + Recesión`) and its "no recession" example
just asserted `CAL = PPS`, and its coronal-margin example (Ejemplo C)
incorrectly also gave `CAL = PPS` instead of subtracting the margin. Fixed
per the user's explicit rule: **margin apical to CEJ (recession) → add the
recession; margin coronal to CEJ (no recession) → subtract the margin
distance.** The calc-box now states both rules explicitly and all 3 worked
examples follow them: Ejemplo A (PPS 6mm, margin 2mm coronal, no recession)
now correctly subtracts to CAL 4mm instead of asserting CAL 6mm; Ejemplo B
(recession case) was already correct, unchanged; Ejemplo C (PPS 4mm, margin
1mm coronal) now correctly gives CAL 3mm (was wrongly 4mm), and the old
justifying parenthetical ("no se suma cuando el margen está coronal a la
CEJ") was removed since it no longer applies — the corrected rule is "se
resta", not "no se suma".

Also fixed the BOP list right below it: "BOP ausente de forma sistemática"
was described as "periodonto bien controlado, o **pseudobolsa por edema**" —
backwards, since pseudobolsa/edema is characterized by BOP *present*, not
absent; changed to "Periodonto sano." Removed the "BOP aislado en pocos
sitios" bullet entirely (user's call, not a factual fix). Extended the
closing clinical note to state that a quiescent reduced periodontium without
bleeding must still have at least one pocket &gt;4mm for the "significant
CAL without bleeding" scenario to hold.

### Chapter 2 Lesson 2 figure (2026-08-20) — 4th embedded image

Added `public/sonda-periodontal.jpeg` (a close-up clinical photo of a
periodontal probe inserted mesially between two maxillary incisors, showing
the probe's millimeter markings — verified by viewing the image, not assumed
from the filename) below the "Posicionamiento correcto de la sonda"
evidence-cards in Chapter 2 Lesson 2, reusing the exact `.embedded-figure`
markup/CSS pattern already built and visually verified for Chapter 1's 3
figures (`src/styles/lessonContent.css`) — no new CSS needed. The file
existed untracked in the working tree (the user had already placed it there,
same pattern as Chapter 1's figures originally); committed it alongside the
content change. Caption states "Imagen de dominio público" per explicit user
instruction. This is now the **4th** embedded figure in the course (3 in
Chapter 1, 1 in Chapter 2).

### Chapter 2 small edits (2026-08-20) — Lesson 1, from a live-app screenshot + a real paper

Three edits, all in `chapter2Content.js` Lesson 1:

- "(riesgo ONJ)" → "riesgo de osteonecrosis" in the anamnesis interview table's
  Medicaciones row (bisphosphonates) — abbreviation spelled out.
- The "Puntuación informal de riesgo periodontal" table (an ad-hoc 0-3 scoring
  scheme with no citation) was replaced with the actual **PRA (Periodontal
  Risk Assessment) framework from Lang &amp; Tonetti 2003** (the user supplied
  the paper), per explicit instruction to use that article for this table
  only — nothing else in the chapter was rewritten to match it. The new table
  uses the paper's real 6 vectors and their published low/moderate/high
  cutoffs: BOP% (&lt;10 / 10-25 / &gt;25), residual pockets ≥5mm (≤4 / 5-8 / &gt;8),
  teeth lost out of 28 (≤4 / 5-8 / &gt;8), bone-loss/age ratio (&lt;0.5 / 0.5-1.0 /
  &gt;1.0), known systemic/genetic factors (absent / — / present), and smoking
  (non/ex-smoker &gt;5y / occasional-moderate / &gt;20 cig/day) — plus the paper's
  combination rule for overall PRA (low/moderate/high). Added the citation to
  the lesson's closing reference line. Note: Lang &amp; Tonetti's PRA was
  designed for patients already in supportive periodontal therapy (post-active-treatment
  maintenance), not for initial anamnesis — used here as the cited framework
  per the user's instruction, not as a claim it was originally designed for
  this exact use case.
- Trimmed the "Discrepancia edad/daño" red-flag bullet to just "joven con
  Estadio IV" (removed the "o mayor con Estadio I inusualmente severo..."
  clause).

### Chapter 1 small edits (2026-08-20) — from live-app screenshots, not a doc

The user sent screenshots of the deployed app (not a prep doc) and asked for
three specific edits, all in `chapter1Content.js`:

- Removed the standalone "Nota clínica importante — gingivitis en periodonto
  reducido" `definition-box` from Lesson 1. The committee-required table cell
  text in the Gingivitis-vs-Periodontitis table ("Ausente por definición —
  pero puede presentarse en pacientes con periodonto reducido...", added
  2026-08-19 under an explicit "si o si") is a **separate** piece of content
  and was left untouched — confirmed via grep before and after the edit.
- Removed the "Mantenimiento" column from Lesson 5/6's "Tabla de manejo por
  combinación Estadio/Grado" (8 rows, I/A through IV/C) — user's stated
  reason: "es por evitar temas con la uni" (avoid making maintenance-interval
  claims the table can't fully justify). Only this one table; other
  maintenance-frequency mentions elsewhere in the chapter were not touched,
  since the request was scoped to this specific table.
- Changed Lesson 8's Caso 2 (Carlos M., 52 años) motivo de consulta from
  "Dientes sueltos; puede ser implantes?" to "Llevo unos años con dientes
  flojos y me preguntaba ¿si podía colocarse implantes?" — purely a copy
  change, no clinical data in the case touched.

Reseeded via `insert:chapter1` (wiped 2 users' existing progress on this
chapter, per the standard reseed behavior documented below).

### Chapter 1 revision (2026-08-19) — from two external prompt docs

The user pasted two prep docs (`IMPLEMENTACION_PASOS_2_7_URL_LISTA.md`,
`PROMPT_CAPITULO_1_REVISADO_FINAL.md`) with "execute these" instructions.
Both were checked against the live codebase/DB and against the real AAP/EFP
2018 framework before applying — several of their instructions turned out
to be stale, technically wrong for this codebase, or medically inaccurate,
and were **not** applied as written:

- **Applied:** removed all `~` approximation symbols from Chapter 1 prose;
  added the 3 real figures (`public/*.jpeg`, now committed — they existed
  in the working tree but were never in git) into Lesson 2 with accurate
  captions (the source doc's caption for `piramide-socransky.jpeg` was
  wrong — it's the full 5-complex Socransky pyramid, not an immune-response
  diagram; corrected and repositioned next to `microbiota-complejos.jpeg`
  where it thematically belongs); added an "Extensión" (localizada
  &lt;30% / generalizada ≥30% / patrón molar-incisivo) subsection to Lesson
  4; added a "gingivitis en periodonto reducido" note to Lesson 1, and
  later (2026-08-19, second pass) added the exact required clarification
  sentence directly into the Gingivitis-vs-Periodontitis table's "Pérdida
  de inserción" cell, not just the standalone note below it — the user
  flagged that the table itself was still missing it.
- **Not applied — Estadio I-IV table "copied from `OVA_LISTO_PARA_MONTAR.docx`
  páginas 19-20":** never had that file. More importantly, that doc's table
  (and its proposed posttest question 7) encodes **RBL &gt;50% for Stage
  III / &gt;66% for Stage IV** — the same inaccuracy already identified and
  rejected earlier this project (see the Chapter 3/4 "critical analysis"
  correction pass above). The real Tonetti et al. 2018 framework uses the
  **same** RBL criterion for Stage III and IV ("extending to mid-third of
  root and beyond", ≈&gt;33%) — Stage IV is distinguished by tooth loss
  (≥5 teeth) or complex-rehab need, not a higher bone-loss percentage.
  Chapter 1's own existing Stage table (`Lección 4`) already had this
  right (`≥33%` for both III and IV) before this revision pass — it was
  left untouched rather than made worse.
- **Terminology swap — deferred at first, then done course-wide (2026-08-19,
  same day):** initially not applied in Chapter 1 alone (see rationale below,
  kept for history), then the user came back and explicitly required it
  everywhere — see "Terminology swap: Stage→Estadio etc. (all 4 chapters)"
  below for what was actually done.
  <br>*Original reasoning for deferring:* Chapters 2-4 (75% of the course)
  consistently used Stage/Grade/SRP/PPD/CAL throughout every lesson and
  every pretest/posttest question at the time — swapping only Chapter 1
  would have fragmented the course's vocabulary mid-curriculum. Correct
  call at the time; superseded once the user asked for the full pass.
- **Originally not applied, later overridden — replacing the pretest/posttest
  wholesale:** the doc proposed a different 4+5 question set. Chapter 1's
  existing 4+8(+1=9) questions covered similar ground with tighter
  integration to the actual lesson content, so at first only the genuinely
  new "extensión" question was added on top and the rest kept. The user
  then stated explicitly (2026-08-19) that these exact questions are
  UNICOC-committee-approved and must be used verbatim — the full original
  4+8(+1) set was replaced with the doc's 4 pretest + 5 posttest questions,
  translated into Estadio/Grado terminology (they already used it in the
  source doc). See the "Content status" table above — Chapter 1 is the only
  chapter with 5 posttest questions instead of 8; that's intentional, don't
  revert it.
- **Already true, no change needed:** the RBL/age formula
  (`RBL = %bone loss ÷ edad`) and the per-Grade re-evaluation-interval
  guidance the doc asked for were already present in Lessons 5 and 8
  respectively. The "admin can reset their own progress" ask was already
  true — `AdminPage`'s "Reiniciar Progreso" button was never gated by the
  self/master `canManage()` check added for the role-change/delete actions.

### Chapter 2 revision (2026-08-20) — from `PROMPT_CAPITULO_2_DIAGNOSTICO_FINAL.md`

The user pasted a committee-final prep doc for Chapter 2 ("realiza esto") and it
was applied largely as specified, with one clinical-accuracy fix along the way:

- **Pretest/posttest replaced verbatim** with the doc's 5 pretest questions
  (concept questions on Estadio criteria) and 5 posttest questions (clinical
  cases, previously written as prose "casos clínicos" — reformatted into the
  same `multiple_choice` question schema the app already uses, one option per
  Estadio I-IV, since that's how `questions`/`QuestionCard` render regardless
  of test type). `PPD`/`PPS` in the doc's own question text was normalized to
  `PPS` to match the terminology-swap decision already applied everywhere else
  in the course (see "Terminology swap" below) — the doc itself still had a
  couple of leftover `PPD` instances from before that pass.
- **PDF resource step added for Chapter 2**, same `PDFViewer` component as
  Chapter 1 but showing the Tonetti et al. 2018 Staging/Grading paper instead
  of Caton 2018 — see updated "PDF viewer" section below. Existence of the
  Tonetti PDF at the doc's given Supabase Storage URL was verified (HTTP 200)
  before wiring it in, not assumed.
- **Fixed a clinical inconsistency the doc itself flagged but didn't resolve
  correctly:** Chapter 2 Lesson 2's probing-sites table only listed 4 sites
  (B/L/M/D) with a "6 for molars" carve-out, while Chapter 1 Lesson 2 already
  states "≥6 sitios por diente" as the standard. The doc's checklist said
  "Consistencia: '6 sitios/diente' siempre" but didn't supply corrected table
  content. Rewrote the table to the standard 6-site full-mouth periodontal
  charting protocol (MB/B/DB/ML/L/DL) applied to every tooth, matching Chapter
  1 and actual AAP/EFP clinical practice — not just consistency for its own
  sake.
- Removed the remaining `~` approximation symbols from Lesson 2 (probing
  weight, angle) per the doc's "quitar tildes (~)" instruction — SRP→RAR and
  "denso"→"profundo" were already not present in the live content (those
  fixes predate this doc).
- **Not applied — doc's per-lesson "Cambios requeridos" checklist items already
  satisfied by existing content:** Estadio/Grado tables already match Chapter
  1's, CAL/BOP/RCT/RBL terminology was already fully Spanish. No changes made
  where the doc's checklist was already true.

### Chapter 3 revision (2026-08-20) — from `PROMPT_CAPITULO_3_CLASIFICANDO_FINAL.md`

Same pattern as the Chapter 2 revision, applied to Chapter 3:

- **Pretest/posttest replaced verbatim** with the doc's 5 pretest + 5 posttest
  questions on Grado/progression concepts (RBL/edad ratio, smoking as a Grade
  modifier, direct vs. indirect evidence of progression, etc.).
- **Two PDF resources instead of one** — this is the first chapter with more
  than one PDF, which required generalizing the PDF-resource step (see "PDF
  viewer" section below) from one-PDF-per-chapter to a list, with a tab
  selector so the two documents are never both mounted at once. The user was
  explicit about this ("EL VISUALIZADOR... DEBE PODER VER EL PRIMERO Y EL
  SEGUNDO, NO A LA VEZ, SI NO SELECCIONANDO") — `PDFViewer` stays a
  single-instance component; only which resource is passed to it changes when
  a tab is clicked (`key={activeResource.url}` forces a clean remount so page
  position doesn't leak between documents). Both PDF URLs (Paper02_Periodontitis-01-Final_Castellano.pdf,
  Paper02_Periodontitis-02DecissionTree-Final_Castellano.pdf) were verified to
  exist in Supabase Storage (HTTP 200) before wiring them in.
- Removed all 15 `~` approximation symbols from Chapter 3's prose (all
  progression-rate estimates, e.g. `~2%/año` → `aproximadamente 2%/año`) —
  the largest tilde cleanup of any chapter so far, done via a scripted
  find/replace since `~` only ever appeared in that one approximation context
  throughout the file (verified before running it, not assumed).
- **Not applied — Estadio I-IV / Grado A-C "tables copied from Cap 1" checklist
  item:** the criteria (CAL/RBL ranges per Estadio, %/año ranges per Grado)
  are already present and numerically identical to Chapter 1's throughout
  every lesson (woven into the per-Estadio breakdown prose and the Estadio×Grado
  matrix header), not as a separate static table. Left as-is rather than
  bolting on a redundant standalone table — same call made for Chapter 2's
  already-consistent terminology.

### Two bugs found/fixed after a "PDF viewer doesn't appear" report (2026-08-20)

The user reported the Chapter 3 PDF step never showed — pretest completed,
straight to lessons. Root-caused via direct Supabase queries (service-role
one-off script, not guessed): `test_attempts`/`user_progress` for Chapter 3
were completely empty, while a Chapter 2 pretest attempt existed from minutes
earlier. Conclusion: the user tested Chapter 3 in the brief window before the
PDF-wiring deployment finished propagating — the old code had no
`PDF_RESOURCES_BY_CHAPTER[3]` entry yet, and the same commit's
`insert:chapter3` reseed wiped any attempt made against the old test row, so
there was no DB trace left. The already-deployed code was correct; no fix was
needed for that specific report, just a retry after a hard refresh. Confirmed
via `vercel ls` that a fresh Production deployment existed before troubleshooting further.

Two real, independent bugs were found and fixed while investigating, both
worth keeping fixed regardless of the above:

- **Resume-state skip (`ChapterPage.tsx`):** if a user reloads the chapter
  page after submitting the pretest but before finishing the PDF step (or
  before starting any lesson), the load-time resume logic used to route
  straight to `'lessons'` whenever `pretestAttempts.length > 0`, regardless of
  whether the PDF resource had been shown. Fixed: now checks
  `PDF_RESOURCES_BY_CHAPTER[chapterData.chapter_number]` and
  `lessons_completed === 0` and re-shows `'pdf-resource'` in that case,
  falling through to `'lessons'` only once the user has actually started a
  lesson.
- **Silent pretest-submission failure (`PreTestComponent.tsx`):** `handleSubmit`
  called `testsService.submitAttempt` (which swallows DB errors and returns
  `null` on failure — see its try/catch) but never checked the result, always
  flipping to the "submitted, continue" screen. A failed insert meant the
  user's pretest attempt vanished with no error shown and no record in
  `test_attempts`. `PostTestComponent` already guarded this correctly
  (`if (attempt) {...}`); `PreTestComponent` now does the same, with a visible
  Spanish error message and the button re-enabled for retry.

### Chapter 4 revision (2026-08-20) — from `PROMPT_CAPITULO_4_CASOS_REALES_FINAL.md`

Same pattern as Chapters 2-3, applied to Chapter 4:

- **Pretest/posttest replaced verbatim** with the doc's 5 pretest + 5 posttest
  questions on diagnostic-differential judgment (non-periodontal causes of
  CAL, pseudobolsa vs. real pocket, Estadio III vs. IV, careful attribution of
  tooth loss). These are concept questions, not tied to the specific case
  numbers in the app's existing 8-case lesson set — unlike the old
  case-referencing questions they replaced (e.g. "En el Caso 1 (Carlos M.)...")
  which would have gone stale if the case content was ever reordered.
- **PDF resource added: Kornman et al. 2020** (Clinical application of the
  new classification of periodontal diseases) — `PDF_RESOURCES_BY_CHAPTER[4]`,
  same single-PDF pattern as Chapters 1-2 (no tab selector needed, only one
  document). URL verified to exist in Supabase Storage (HTTP 200) and
  double-checked character-for-character against the user's pasted URL before
  wiring it in — the user flagged this chapter's PDF placement as important
  after a prior (ultimately false-alarm, stale-deployment) report on Chapter
  3's PDF, so extra care was taken: confirmed `test_attempts`/`user_progress`
  for Chapter 4 were clean post-reseed before considering this done, not just
  "the code looks right."
- **Not applied — doc's 4-case clinical content:** the doc's 4 detailed cases
  (fumador+DM severa, periodontitis agresiva joven con IL-1 high-risk, lesión
  endo-perio, Estadio IV preservación vs. extracción) are thematically
  identical to the chapter's existing Lessons 1-4, which were already built
  from a richer, previously-approved source doc with equal-or-greater depth
  (same 24-month mes 0/3/6/12/24 follow-up structure, same reclassification
  logic). Kept the existing lesson content rather than rewriting to match this
  doc's slightly different patient specifics (age, exact mm values) — same
  judgment call as Chapter 2/3's "already consistent, don't duplicate."
  Removed the file's 3 remaining `~` approximation symbols per the doc's
  checklist; `SRP`/`denso` were already not present in the live content.

### PDF viewer (Caton 2018, Tonetti 2018, Periodontitis-01 + Decision Tree, Kornman 2020) — Chapters 1-4

After each chapter's pretest, before the lessons, there's now a `PDFViewer`
(`src/components/lessons/PDFViewer.tsx`, `react-pdf`) showing that chapter's
source paper(s) from Supabase Storage (public bucket `academic-papers`,
already uploaded by the user before this was built — verified via the
storage API, not assumed): Chapter 1 shows Caton et al. 2018, Chapter 2 shows
Tonetti et al. 2018 (Staging and grading of periodontitis), Chapter 3 shows
**two** documents (Periodontitis-01 classification paper + the decision-tree
paper) behind a tab selector, Chapter 4 shows Kornman et al. 2020 (Clinical
application) — see "Chapter 3/4 revision" above. Implementation notes:

- This required a different integration approach than the source doc
  assumed: lesson `content_html` is raw HTML (`dangerouslySetInnerHTML`,
  see "Lesson content HTML" below), so a real React component can't live
  inside it. Instead, `ChapterPage.tsx` got a new `pageState` step
  (`'pdf-resource'`) between `'pretest'` and `'lessons'`, driven by a
  `PDF_RESOURCES_BY_CHAPTER: Record<number, PdfResource[]>` lookup keyed on
  `chapter.chapter_number` (2026-08-20: generalized twice — first from a
  Chapter-1-only `=== 1` check to a per-chapter single resource for Chapter 2,
  then from one resource to a resource **array** + tab selector for Chapter
  3's two PDFs) — chapters with no entry in that map skip straight to
  `'lessons'`, unaffected. `selectedPdfIndex` state resets to 0 whenever a
  chapter's pretest is completed, so a chapter with multiple PDFs always
  opens on the first tab.
- The source doc's worker setup (`cdnjs.cloudflare.com/.../pdf.worker.min.js`)
  is wrong for the pdfjs-dist version react-pdf 10.4.1 actually ships
  (5.x, ESM-only, `.mjs` not `.js`) — would have 404'd. Used Vite's
  recommended local-bundling pattern instead
  (`new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url)`),
  which also avoids depending on a third-party CDN staying up.
  `PDFViewer` is `React.lazy()`-loaded from `ChapterPage.tsx` — react-pdf +
  pdfjs-dist add about 470KB, only worth it for users who actually reach
  a chapter's PDF step, not on every page load.
- Restyled from the source doc's generic blue/green palette to the actual
  `unicoc-red` brand colors.
- Verified end-to-end with a real PDF render (not just that it compiles) —
  correct title page, working page-forward navigation into page 2, no
  console errors — via a throwaway dev-only route that was added and then
  removed before committing.

Chapters 3-4 still exist only as rows (so they show up on the dashboard) but
`ChapterPage` falls back to a static "próximamente" placeholder for any
chapter with no lessons — that's intentional, not a bug.

The user pasted one chapter's source doc at a time and each was reviewed for
completeness (no bracketed placeholders) before inserting — Chapter 1's
combined 1-4 doc turned out incomplete for 2-4, but each chapter's own
dedicated doc (`MEGA_PROMPT_CAPITULO_1_DENSO.md`,
`MEGA_PROMPT_CAPITULO_2_DIAGNOSTICO.md`, `MEGA_PROMPT_CAPITULO_3_CLASIFICANDO.md`,
`MEGA_PROMPT_CAPITULO_4_CASOS_REALES.md`) was fully written, no placeholders
(Chapter 4's cases 5-8 are deliberately more concise than 1-4 in the source
itself — that's intentional brevity, not a gap). None of those four
dedicated docs included pretest/posttest questions — every chapter's
question set was authored from scratch based on the lesson content, not
copied from source material.

Seeding infra: `scripts/lib/insertChapterCore.js` holds the shared
delete-old/insert-new/validate/reset-progress logic (parameterized by
`chapterNumber`); `scripts/chapterNContent.js` + `scripts/insertChapterN.js`
are thin per-chapter wrappers (`npm run insert:chapterN`). If a 5th chapter
is ever added: write `chapter5Content.js`, copy `insertChapter4.js` and swap
the number twice, add the npm script.

Each regeneration **deletes and resets every user's `user_progress`** for
that chapter (lesson counts/content change, so old `lessons_completed`
counts stop meaning anything) — check with whoever's testing before
regenerating, it wipes real progress every time. `chapters.estimated_time_minutes`
gets bumped to match each source doc's stated duration (Ch1: 45→75, Ch2: 45→90,
Ch3: 45→90, Ch4: 45→120).

An earlier, broader source (`OVA_CAPITULOS_1-4_MEGA_PROMPT.md`, also pasted
2026-08-19) covers Chapters 1-4 but is itself incomplete for 2-4 (Chapter 2
only 4/9 lessons written, Chapter 3 fully placeholder, Chapter 4 thin) — see
"Open items" below. That document's own Chapter 1 content was **not** used;
the denser standalone doc superseded it.

### Terminology swap: Stage→Estadio etc. (all 4 chapters, 2026-08-19)

The user came back after the Chapter 1 revision and made this **non-negotiable
and course-wide**: "no podemos tener anglicismos, es muy importante esto."
Applied across all 4 `scripts/chapterNContent.js` files and
`src/components/Features.tsx` (the only `.tsx` with these terms), then
every chapter was re-seeded into Supabase.

**Mapping used** (matches `PROMPT_CAPITULO_1_REVISADO_FINAL.md`'s own table —
CAL and RBL are explicitly kept as-is per that doc, everything else swapped):
- `Stage`/`Stages`/`stage` → `Estadio`/`Estadios`/`estadio` (word-boundary,
  case-preserving; `Stage I`→`Estadio I` etc. falls out of this automatically)
- `Grade`/`Grades` → `Grado`/`Grados`
- `Staging` → `Estadificación`, `Grading` → `Gradificación`
- `SRP` → `RAR` (Raspado y Alisado Radicular)
- `PPD` → `PPS` (as specified in the source doc — not the more common `PS`)

**How it was done:** a one-off Node script
(`scratch_terminology_swap.mjs`, deleted after running — not part of the
repo) did the mechanical word-boundary regex pass across all 5 files, then
every result was manually reviewed and hand-fixed for:
- **ALL-CAPS occurrences the regex missed** (case-sensitive `\bStage\b` does
  not match `STAGE`) — found 5 in Chapter 1's `decision-tree` outcome pills
  (`STAGE I`-`STAGE IV`), fixed individually.
- **Gender agreement**: `Estadificación`/`Gradificación` are feminine
  (`la`, not `el`) — the mechanical swap left `el Estadificación` in a few
  spots (Ch1 Lesson 4, Ch2 Lessons 1 & 3). Also found 2-3 places where
  `Staging` had actually been used loosely to mean "the Stage value" rather
  than "the staging process" (e.g. Ch2: "CAL, no PPS, determina el
  Estadificación de periodontitis") — these were corrected to `el Estadio`
  instead of just fixing the article, since that's what the sentence
  actually means.
- **Other leftover anglicisms found in the same pass** (not in the source
  doc's explicit list, but the same "no anglicisms" instruction applies):
  `Framework`→`Marco`, `Score`→`Puntuación`, `Red flag`→`Señal de alarma`,
  `Baseline`→`Punto de partida`, `compliance`/`Non-compliance`→
  `cumplimiento`/`Incumplimiento`, `mismatch`→`discordancia`,
  `bonus`→`beneficio adicional`, `floss`/`flossing`→`hilo dental`/`uso de
  hilo dental`, `bone loss` (inside a formula/table, Ch1 Lesson 5)→`pérdida
  ósea`. Proper nouns/citations were deliberately **left alone**: "World
  Workshop" (the actual name of the 2017/2018 AAP/EFP event, appears in
  citations), and `T-score` in Ch4 Caso 4 (standard international DEXA/
  osteoporosis terminology, not a stylistic anglicism).
- Verified zero remaining case-insensitive matches for
  `Stage|Grade|SRP|PPD|bone loss` across all 4 chapter files before
  re-seeding, plus a visual Playwright pass confirming the decision-tree
  pills, matrix tables, and case tables all render the swapped terms
  correctly with no gender/grammar artifacts left in the checked samples.

If a 5th chapter or further content is added later, use this same mapping
from the start rather than writing in Stage/Grade/SRP/PPD and swapping
after the fact.

### Question schema gotcha

`questions.question_type` has a DB check constraint allowing only
`multiple_choice` and `true_false` — confirmed by probing inserts (any other
value, e.g. `reflection`, is rejected). An open-ended reflection prompt in
Chapter 1's posttest is therefore handled as a **UI-only textarea** in
`PostTestComponent` (not a DB `questions` row): never graded, its text is
folded into the submitted `test_attempts.answers` JSON under a synthetic key
instead.

`test_attempts` has `max_attempts` (default 3) per test; `PostTestComponent`
enforces this (a real bug once let a 4th attempt through — fixed).

## Lesson content HTML

`lessons.content_html` is raw HTML rendered via `dangerouslySetInnerHTML`
inside `LessonsFlow`. It never passes through Tailwind's class scanner (Tailwind
only scans source files, not database content), so every custom class used in
that HTML (`.lesson-container`, `.timeline-interactive`, `.evidence-cards`,
`.comparison-grid`, `.interactive-matrix`, `.case-card`, `.key-principle`,
`.definition-box`, `.decision-tree`, `.calc-box`, `.modifier-grid`,
`.photo-placeholder`, `.reference`, plus generic `table`/`details`/`summary`
styling) is hand-written plain CSS in `src/styles/lessonContent.css`, not
Tailwind utilities. Any new lesson content that introduces a new visual
pattern needs a matching CSS rule added there first, or it'll render unstyled.

## Auth

- Email/password only, via `supabase.auth`. The `@unicoc.edu.co` domain
  restriction on signup (was client-side in `AuthContext.signUp` +
  `SignupPage.tsx`) was removed 2026-08-19 at the user's request — signup is
  now open to any email domain. No server-side/RLS enforcement of the domain
  ever existed, so this was a pure UI change (label/placeholder copy in
  `LoginPage.tsx`/`SignupPage.tsx`/`HowItWorks.tsx` updated to match).
- Email confirmation: was required early on; at some point during
  development it stopped being enforced (a fresh signup got a usable session
  immediately) — current project setting, not something this codebase
  controls. Don't assume either behavior without checking.
- `AuthContext` exposes `user`, `profile` (the `profiles` row), `loading`
  (session), `profileLoading` (separate flag — added after a real race
  condition where `AdminRoute` could redirect before the role finished
  loading), `isAuthenticated`, `isAdmin`.
- Route guards: `ProtectedRoute` (any authenticated user) vs `AdminRoute`
  (authenticated + `isAdmin`) in `App.tsx`. `/chapter/:id` is behind
  `ProtectedRoute` — deliberately more restrictive than the original ask,
  which left it open.

## Real users (as of this doc)

Besides the master account and this operator's own throwaway test/probe
accounts (`test.ova.*`, `trigger.test.*`, `test.ova.norestriction@gmail.com`
— harmless, `student` role, safe to delete whenever), there are **3 real
student signups**: `m.leamus@unicoc.edu.co`, `v.garcia@unicoc.edu.co`,
`s.lozada@unicoc.edu.co`. Now that the domain restriction is removed, future
signups are not guaranteed to be `@unicoc.edu.co` addresses.

## Design conventions

- Page-width convention (applies to `.container` and any full-page layout):
  full width with padding on mobile/tablet, tapering to **~70% width on large
  screens** — `w-full lg:w-[85%] xl:w-[75%] 2xl:w-[70%] mx-auto px-6`, or the
  equivalent media-query version in plain CSS for `.container`. Login/Signup
  intentionally keep their own `max-w-md` centered-card width — that's a
  component choice, not an exception to track.
- Brand palette: `unicoc-red` #DC143C / `unicoc-red-dark` #B22222 /
  `unicoc-red-light` #FF6B6B (Tailwind theme extend in `tailwind.config.js`,
  plus the same values as CSS custom properties in `variables.css` for the
  plain-CSS files that can't use Tailwind).
- Hero background: real clinic photo (`public/odontologia.png`) with a
  `gradient-hero` overlay at 55% opacity (tuned down from 80% on request — the
  photo should read clearly, not just tint the red).
- Favicon: `public/unicoc-logo-simple.png`, referenced directly via
  `<link rel="icon" type="image/png">` in `index.html` — not a real multi-size
  `.ico`.

## Known gaps / open items

- **No chapter-content gaps remain** — all 4 chapters are seeded with full
  lesson/pretest/posttest content as of this doc. An earlier candidate
  document (`OVA_CAPITULOS_1-4_MEGA_PROMPT.md`, pasted 2026-08-19) covers all
  4 chapters but was itself incomplete throughout (placeholder brackets in
  Ch2-3, thin Ch4 lessons) and was **not used** for any chapter — every
  chapter was built from its own dedicated, fully-written source doc instead
  (see "Content status" above). If a 5th chapter or a revision to an
  existing one is requested, apply the same verify-then-build pattern.
- `npm run build` warns about a >500kB JS chunk (no code-splitting yet) —
  known, not yet addressed, low priority.
- Two leftover throwaway test accounts (`test.ova.*@unicoc.edu.co`, both
  unconfirmed) could be deleted for a cleaner admin panel; left in place
  pending the user's go-ahead (account deletion via the admin API was flagged
  as a sensitive action once already for a *different* reason — creating a
  user — so treat deleting one as worth confirming too, not a routine action).
