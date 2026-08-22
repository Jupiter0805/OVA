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
| 3 — Grados | ✅ | **8/8**, rebuilt 2026-08-21 around Grado-determination framework (direct/indirect/modifier evidence, RBL/edad, Estadio×Grado application) | 5 Q (UNICOC-approved) | 5 Q (UNICOC-approved, ≥70% to pass) |
| 4 — Zonas Grises y clarificaciones de uso clínico | ✅ | **8/8**, rebuilt 2026-08-21 around the 5 "gray zones" (CAL attribution, periodonto reducido, pseudobolsas, tooth-loss attribution, Estadio III/IV boundary) — now actually matches the DB title | 5 Q (UNICOC-approved) | 5 Q (UNICOC-approved, ≥70% to pass) |

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

### Quiz Final: "Diagnostica el Caso" (2026-08-22) — live

The user pasted a full spec doc (`QUIZ_FINAL_LIMPIO.md`) for an admin/master-only
diagnostic practice quiz (5 real clinical cases: Daniel, Marta, Carmen, Clara,
Yoselin) and asked to implement it. Built following this project's actual
conventions rather than the doc's as given — several things in the source
spec didn't match this codebase:

- **The doc's access-check used a `user_roles` table that doesn't exist in
  this project** — this project's real role field is `profiles.user_type`
  (student/admin/master), already gated everywhere via `AdminRoute` in
  `App.tsx` and the `is_admin()` Postgres function from
  `001_admin_panel_setup.sql`. Reused both instead of duplicating a custom
  auth check inside the component — the route is wrapped in the existing
  `<AdminRoute>`, and RLS enforces the same restriction at the DB level (the
  doc's schema had **no RLS at all**, which would have made `quiz_pacientes`
  and `quiz_intentos` openly readable/writable to any authenticated user
  including students, contradicting "Bloqueado estudiantes" from the doc's
  own spec).
- **Renamed fields to match this course's established terminology** (the
  same anglicism/consistency pass applied to all 4 chapters earlier):
  `nic_maximo`→`cal_maximo`, `sondaje_maximo`→`pps_maximo`,
  `stage_correcto`/`stage_seleccionado`→`estadio_correcto`/`estadio_seleccionado`,
  `grade_correcto`/`grade_seleccionado`→`grado_correcto`/`grado_seleccionado`.
  `extension_correcta`/`extension_seleccionada` were already Spanish, kept.
- **Restyled entirely** — the doc shipped its own plain-CSS file with an
  off-brand blue (`#0066cc`) palette; rebuilt with Tailwind + `framer-motion`
  matching `unicoc-red` and the existing card/button conventions used
  throughout the app (same call made for the PDFViewer component earlier).
- **Routed through the existing service-layer pattern** (`quizService.ts`,
  mirroring `testsService.ts`/`adminService.ts`) instead of calling
  `supabase` directly from the component, and used `@/lib/supabase` →
  `../../services/supabase` (the doc's import path doesn't exist in this
  project's structure).
- Image URLs (periodontograma + 3 radiografías per case) are genuinely
  pending, per the doc's own note — left `null` in `quizFinalContent.js`;
  the UI renders a dashed-border placeholder for any null URL. Update
  directly in Supabase (or re-run the seed script after editing the content
  file) once the images exist.
  - **One image had already been dropped into the working tree** while this
    was being built: `public/Marta/radiografia.png` (untracked, appeared
    mid-task). It's a full panoramic radiograph, not a sextant-specific
    periapical/bitewing view like the doc's 3 `radiografia_sextante_*`
    fields assume — added a 5th image field, `radiografia_panoramica_url`,
    rather than force-fitting it into a misleadingly-named "sextante 1
    vestibular" slot. Renamed/moved the file to
    `public/quiz-marta-radiografia-panoramica.png` to match this project's
    flat-filename convention for `public/` assets (no subfolders elsewhere),
    and wired it into Caso 2 (Marta) only — the other 4 cases have this
    field `null` until their own images arrive.
- Added a "Quiz Final" button next to "Admin" on `DashboardPage.tsx`
  (admin/master-only, same `isAdmin` gate) since the doc didn't specify an
  entry point beyond the bare `/quiz-final` route.

**Files added:** `supabase/sql/004_quiz_final_setup.sql` (schema + RLS,
**not yet applied**), `scripts/quizFinalContent.js` (the 5 cases),
`scripts/insertQuizFinal.js` (seed script, `npm run insert:quizfinal`,
upserts by `caso_numero` so re-running after edits updates rather than
duplicates), `src/services/quizService.ts`,
`src/components/quiz/QuizFinalInteractivo.tsx`, `src/pages/QuizFinalPage.tsx`.

**Migration applied 2026-08-22** — the user ran `004_quiz_final_setup.sql`
in Supabase Studio, then `npm run insert:quizfinal` seeded the 5 cases
(confirmed via a service-role query: correct estadio/extensión/grado per
case, Marta's panoramic URL present, others null as expected). Also
verified RLS is actually enforced, not just assumed: an anon-key client
(no auth) queried `quiz_pacientes` and got 0 rows back — `is_admin()` is
correctly blocking unauthenticated/non-admin reads at the DB level.
Feature is live end-to-end at `/quiz-final` for admin/master accounts.
Still pending: real periodontograma + sextant radiograph images for all
5 cases (only Marta has one image, the panoramic).

### Glossary panel — available on every chapter (2026-08-21)

`src/components/glossary/GlossaryPanel.tsx` + `glossaryData.ts` — a
persistent collapsible glossary (9 terms: CAL, BOP, PPD, RBL, CEJ, HbA1c,
AAP/EFP, OVA, COL gingival), mounted once inside `ChapterPage.tsx` so it's
present regardless of which chapter or pageState (`pretest`/`pdf-resource`/
`lessons`/`posttest`/`completed`) the student is on — a `fixed`-position
component doesn't care where in the JSX tree it's rendered.

- **Collapsed by default, always**: a slim docked tab on the right edge
  (vertically centered, `fixed`, brand-red) is the only thing rendered when
  closed — it never overlaps content. There's no persisted "last open state"
  across reloads by design, since the user's requirement was "siempre debe
  aparecer colapsado."
- **Expand/collapse on demand**: clicking the tab slides a `w-full
  sm:w-[380px]` panel in from the right (`framer-motion`, `x: '100%' → 0`),
  with a click-to-close backdrop and an explicit ✕ button. On mobile it
  takes the full width (there's no room to dock a 380px panel beside
  content on a phone) — verified both breakpoints visually, see below.
  Includes a live search/filter input (not requested explicitly, but the
  9-term list will only grow, and it was near-zero extra cost).
- Static data, no DB table — the glossary content doesn't change per-chapter
  or per-user, so a plain TS array in `glossaryData.ts` was simpler than
  adding a `glossary_terms` table + service + RLS for content that's
  effectively fixed reference material.
- **Verified visually**, not just via build success: added a temporary
  `/__glossary-preview` route in `App.tsx`, ran the dev server, and used the
  project's established Playwright-via-cached-npx-package pattern to
  screenshot collapsed/expanded states at both desktop (1280px) and mobile
  (390px) widths, and confirmed the search filter narrows results correctly
  — then reverted the temporary route before committing (confirmed via
  `git diff` that `App.tsx` has no leftover diff).

### Admin panel: per-chapter pretest/posttest visibility (2026-08-21)

The user wants admins to monitor student progress with pretest/posttest
results per chapter, not just the existing aggregate "N completados / N en
progreso" count.

- `adminService.getUserChapterDetails(userId)` (new) — for one user, joins
  `chapters` (all 4, always) against that user's `user_progress` and
  `test_attempts` rows (both already readable by admins via existing RLS
  policies from `001_admin_panel_setup.sql` — no new migration needed) and
  returns, per chapter: completion %, status, the **latest** pretest
  attempt's percentage (pretest has no passing score — it's explicitly a
  non-graded reflection exercise, so "latest" rather than "best" is the
  meaningful number here), and the **best** posttest attempt's percentage +
  whether any attempt passed + attempt count (posttest has a real passing
  threshold and a `max_attempts` cap, so best-attempt-so-far and pass/fail
  are what matters).
- `AdminPage.tsx` — added a "▼ Ver pretest/posttest por capítulo" toggle
  under each user's progress summary. Expands an inline detail row (fetched
  lazily on first click, then cached in state — not eagerly loaded for every
  user up front, to avoid N+1-style over-fetching on page load for a table
  that could grow). Shows a per-chapter table: avance %, pretest score, and
  posttest score/pass-fail with attempt counts.
- Needed `Fragment` (not `<>...</>`) for the per-user map because each user
  now renders two sibling `<tr>`s (the main row + the conditional detail
  row) and fragments need a `key` when returned from `.map()`.

### Chapter 3 post-rebuild cleanup: bad case removed, Extensión added to all diagnoses (2026-08-21)

After the full rebuild (see below), the user flagged one specific case as
wrong and asked for a formatting change applied chapter-wide:

- **Removed** Lesson 4's "Caso — modificador aislado, sin suficiente peso
  para cambiar la clasificación" (Mujer 52a, HbA1c 8.2%, concluded Grado B).
  It was a real self-contradiction: Lesson 2's own stated rule is "basta con
  que un criterio alcance el umbral de C para desplazar el Grado hacia
  arriba" — but this case had a modifier explicitly at the Grado C threshold
  (HbA1c ≥7%) and still concluded Grado B "on balance." Deleted per the
  user's instruction rather than rewritten, since the lesson's other case
  already carries the "modifiers override the ratio" teaching point cleanly.
  **The identical defect existed in Lesson 7's "Estadio III, Grado B" case**
  (same patient profile, reused across lessons) — not explicitly flagged by
  the user, but fixed proactively rather than left as a known duplicate of
  the same error: HbA1c lowered to 6.8% (&lt;7%, genuinely Grado B) so ratio
  and modifier now agree instead of being rationalized around.
- **Extensión (Localizada/Generalizada) added to every diagnosis statement**
  in Lessons 6, 7, and 8, in the format `Estadio, Extensión, Grado` (between
  Estadio and Grado, per the user's explicit ordering) — previously the
  chapter stated Estadio and Grado but never the third required descriptor.
  Assigned per each case's own stated findings (e.g. "CAL 2mm en #16, #26,
  #36" → Localizada; "CAL 3-4mm generalizado" → Generalizada, since the
  case already said so) rather than inserted mechanically. The Estadio I
  Grado A case in Lesson 6 also had a second tooth (#13) added to its
  findings per the user's request, making it a clean 2-tooth Localizada
  example. Lesson 8's reclassification cases now show the extensión
  changing alongside Estadio/Grado where the case narrative supports it
  (Caso A: Localizada → Generalizada, tracking the case's progression from
  one tooth-region to widespread).

### Chapter 3 Grado-determination accuracy overhaul (2026-08-21, first pass — superseded by full rebuild below)

The user pasted a "Capítulo III Grados" reference document (with real editorial
review comments embedded, `[Ui7]`-`[Ui10]`) and asked to rebuild Chapter 3's
content around it. This was **not** a like-for-like doc swap (the doc is much
shorter than the existing 8-lesson chapter and doesn't restructure it) — it
supplied the correct official Grado-determination framework that the chapter
was missing/getting wrong, so this was a full accuracy pass across the whole
chapter, not just new content bolted on.

**Root problem found:** every lesson in Chapter 3 expressed progression rate
as "~X%/año" with invented cutoffs (`<3%/año`→A, `3-20%/año`→B, `>20%/año`→C).
This metric doesn't exist in the AAP/EFP framework at all, and the cutoffs
were wildly unrealistic — a sanity check against the *actual* published
indirect criterion (RBL/edad: &lt;0.25 A, 0.25-1.0 B, &gt;1.0 C) shows a real
"fast" case runs more like ~1-2%/year, not &gt;20%/year. The Lesson 5
RBL/edad thresholds already in the chapter were also off (used 0.5 as the
A/B cutoff instead of the correct 0.25) — same wrong-cutoff pattern already
found and fixed in Chapter 2's simplified Estadio table earlier this session.

**What changed:**
- Added a "Cómo se determina el Grado" section to Lesson 1 — the chapter
  never actually had a standalone explanation of this despite being titled
  "Grados": the doc's official 3×3 table (evidencia directa/indirecta/modificadores
  × A/B/C, with correct thresholds), the "start from Grado B, shift with
  evidence" principle, the worked RBL/edad example (40% at 30yo=1.33→C vs.
  65yo=0.62→B), and a modifiers explanation reworded in plain language per
  the doc's own `[Ui9]` comment (the doc's reviewer flagged the original
  phrasing — vascularización/respuesta inmune/patrón de inflamación — as too
  clinical for a student-facing course).
- Added the doc's 3 case vignettes to Lesson 1, reworded per `[Ui10]`'s
  comment (the doc's reviewer flagged the original case phrasing as lacking
  rigor) into explicit RBL/edad-computed examples.
- **Went through all 8 lessons' existing case studies (~15 cases) and fixed
  the numbers**, not just the definitions — every "progresión ~X%/año"
  mention was either replaced with a computed RBL/edad ratio (recalculating
  age/RBL in a few cases so the math actually lands in the stated Grado
  under the correct 0.25/1.0 cutoffs — e.g. the Estadio II Grado A case's
  patient age went from 52→66 since a 52-year-old with Estadio-II-range RBL
  cannot mathematically reach Grado A via the ratio) or reframed as raw
  direct-evidence (a stated before/after RBL change over a known interval,
  no invented rate label). Surfaced a real pattern along the way: **Estadio
  III/IV + Grado A combinations are only reachable through direct evidence of
  long-term stability, never through the RBL/edad ratio alone** (the ratio
  structurally requires unrealistic ages once RBL is high) — this is now
  stated explicitly wherever such a case appears, reinforcing the doc's own
  "direct evidence has priority over indirect" principle rather than leaving
  it as an unexplained inconsistency.
- Fixed the same wrong 0.5-vs-0.25 A/B cutoff in the pretest Q3/Q5 and
  posttest Q3 explanations (the correct-answer options were already right
  regardless, since 1.5 is &gt;1.0 either way, but the cutoff stated in the
  explanation text was wrong). Also fixed pretest Q5's explanation, which had
  literally impossible arithmetic (claimed 36% RBL at 70 years old reads as
  Grado A — 36/70=0.51 is nowhere near &lt;0.25 under either the old or new
  cutoff) by changing the older-patient comparison to a lower, consistent RBL%.
- Matrix header in Lesson 1 relabeled from the fake `%/año` ranges to plain
  "progresión lenta/moderada/rápida", pointing to the new determination
  table instead of restating invented numbers in a second place.
- Skipped the doc's `[Ui7]` (broken bracket-citation numbering) and `[Ui8]`
  (an "objective" that wasn't phrased as one) comments as not applicable —
  we don't use bracket citations (house style is named "Basado en:" refs,
  already free of this problem), and `chapters.learning_outcomes` isn't
  rendered in the UI once a chapter has lessons, so there's no visible
  "objetivos de aprendizaje" list to fix.
- Pretest/posttest questions were **not** changed — the doc's 5 pretest
  questions are verbatim identical to what Chapter 3 already had from the
  committee-approved set (2026-08-20), so nothing to update there.

### Chapter 3 full rebuild, 8 new lessons (2026-08-21, supersedes the pass above)

After the accuracy-only pass above, the user asked directly "¿seguro has
metido todo el contenido que te enviaste?" — the honest answer was no: that
pass extracted and fixed the *numeric/definitional* content from the
reference doc but skipped several of its sections (objetivos de aprendizaje,
the full introducción, the Grado A/B/C interpretación clínica prose, the
Figura 2 concept, most of the "severidad y pérdida ósea radiográfica"
section). Given the choice between adding just the missing pieces or a full
rebuild, the user chose **"QUITA TODO, REFORMULA TOOODO EL CAPITULO 3... CON
LA DENSIDAD DEL CAPITULO 3, SE INTERACTIVO Y DIDACTICO"** — discard the old
lesson structure entirely and rebuild from the reference doc, but expanded
back out to the same depth/interactivity as before (not a thin 6-section
transcription).

`chapter3Content.js` was fully rewritten (`Write`, not incremental `Edit`) to
8 new lessons, restructured around the document's own logical flow instead
of the old "MEGA_PROMPT_CAPITULO_3" structure:

1. **Qué es el Grado: fundamentos y objetivos** — the objetivos de
   aprendizaje (now rendered as a visible `evidence-cards` block, since
   `chapters.learning_outcomes` isn't shown once a chapter has lessons — the
   doc's `[Ui8]`-flagged item was reworded into a proper objective), the
   intro paragraph, "qué evalúa realmente el grado" (3 aspects), the
   "empezar desde Grado B" principle, and a decision-tree-style visual
   standing in for the doc's Figura 2 (no image asset was supplied, so this
   is a described A→C panorama, not a literal diagram).
2. **Cómo se determina el Grado** — the full official table + RBL/edad
   calc-box + the doc's 3 case vignettes (kept here, not spread out).
3. **Grado A, B y C: interpretación clínica** — the doc's three descriptive
   paragraphs (previously skipped entirely), each with one worked example.
4. **Modificadores de riesgo: tabaquismo y diabetes** — full explanation
   (plain-language per `[Ui9]`), the umbral table, and two cases illustrating
   modifier-vs-ratio tension in both directions.
5. **Pérdida ósea radiográfica: de la imagen al número** — the doc's Section
   4 in full this time (RBL as % of root length, horizontal vs. vertical
   patterns, radiografía vs. clinical correlation, longitudinal comparison),
   previously only represented by its calc example.
6. **Estadio I y II: aplicando el Grado** — merged from the old separate
   Estadio I/II lessons, cases carried over with the already-fixed
   RBL/edad math from the prior pass.
7. **Estadio III y IV: aplicando el Grado** — same merge for III/IV.
8. **Reclasificación, algoritmo terapéutico y síntesis final** — merged the
   old reclasificación lesson, the algoritmo terapéutico lesson, and the FAQ
   lesson into one closing lesson (kept substantial, not trimmed).

Still correctly skipped: the doc's broken bracket-citation numbering
(`[Ui7]`'s concern — house style is named "Basado en:" refs) and the
"Lectura sugerida: Árbol de toma de decisiones SEPA" line, which refers to
the same "Árbol de decisión" PDF already wired into Chapter 3's PDF-resource
step (see "PDF viewer" section) rather than needing separate text.

Pretest/posttest unchanged (still the verbatim-matching committee set).
Verified all 8 lessons' HTML tags balance (`<div>`/`<details>` open/close
counts match) via a script before reseeding, given the file was written in
one shot rather than incrementally edited.

### "Pretest not saving" report (2026-08-21) — investigated, root cause is reseed cadence, not a code bug

The user reported that completing Chapter 2's pretest, going through lessons,
then leaving and re-entering the chapter sometimes asks for the pretest
again. Investigated via direct Supabase queries (service-role script) rather
than guessing:

- Current DB state at the time of investigation showed **healthy usage**: 2
  users with real pretest attempts recorded against the *current* test row,
  both with `lessons_completed: 8`, one with a completed posttest attempt —
  no orphaned or duplicate rows, no evidence of `submitAttempt` failing.
- `testsService.ts` (`getTest`, `getUserAttempts`, `submitAttempt`) and
  `ChapterPage.tsx`'s resume logic were re-read end to end; no additional bug
  found beyond the two already fixed 2026-08-20 (see "Two bugs found/fixed"
  section above: resume-state PDF skip, silent pretest-submission failure).
- **Actual mechanism, confirmed live during this same investigation:**
  `scripts/lib/insertChapterCore.js` deletes *all* `test_attempts` and
  `user_progress` rows for a chapter on every `npm run insert:chapterN` run
  (by design — content changed, old progress is meaningless). Chapter 2 was
  reseeded roughly 7 times in the 2026-08-20/21 session while real students
  were apparently using it. Re-running `insert:chapter2` for the Caso 3 fix
  in *this same conversation turn* printed "Reseteando progreso previo de 2
  usuario(s)" — i.e., the same two users who'd just successfully completed
  the pretest/lessons had their progress wiped again by this very edit,
  live, in front of the investigation. This is the exact experience a
  student would describe as "I did the pretest and it didn't save."
- **No code fix applied** — there was nothing to fix; the behavior is
  working as designed. The tradeoff (content iteration wipes in-progress
  students' state) is inherent to editing chapter content that's already
  live and in active use, not a defect. Worth the user's awareness going
  forward: each further content edit to a chapter students are actively
  using will repeat this.

### Official AAP/EFP 2018 staging table added to Chapter 2 Lesson 5 (2026-08-21)

The user pasted a screenshot of the real Tonetti/Greenwell/Kornman 2018
staging table (Severity: interdental CAL, RBL, tooth loss · Complexity:
local · Extent and distribution) and asked for it translated to Spanish and
added to Chapter 2 Lesson 5, in addition to (not replacing) the existing
"Los cuatro Estadios" cards and simplified "Tabla de decisión Estadio".
Translated faithfully, keeping the course's established terms (CAL, RBL,
PPS, Estadio) — "drifting, flaring" rendered as "migración y
vestibularización dentaria" to match "migración dentaria" already used
elsewhere in the course for this same finding. Wrapped in an
`overflow-x:auto` div since it's the widest table in the app (6 columns) and
none of the existing tables had horizontal-scroll handling.

**Fixed a real inconsistency this surfaced:** the existing simplified table
right below it still had the RBL split (III: 33-50%, IV: &gt;50%) that was
already identified and rejected earlier in this project (see the "critical
analysis" audit section above) — Tonetti 2018 gives Stage III and IV the
*same* RBL criterion ("extending to middle third of root and beyond"); the
distinguishing factor is tooth loss (≥5 for IV), not a higher bone-loss
percentage. Left uncorrected, this would have directly contradicted the new
official table sitting right above it on the same page. Fixed the simplified
table's RBL column for III/IV to "Tercio medio+" for both, and added a note
explaining why they share the criterion — this is the same accuracy issue
Chapter 1's own Estadio table already got right; Chapter 2's simplified
table was the one lagging.

### Small fixes: Naber figure size, "sinus tract" anglicism (2026-08-21)

- `sonda-naber.jpeg` (Chapter 2 Lesson 3) is a tall portrait product photo
  (1122×1402px, mostly white space around a thin probe) — at the shared
  `.embedded-figure img` rule (`max-width: 70%`) it rendered far too large.
  Added an inline `style="max-width: 220px;"` on that one `<img>` only, since
  the other embedded figures (Chapter 1's 3, Chapter 2's `sonda-periodontal.jpeg`
  and `tecnica-miller.jpg`) are landscape clinical photos/diagrams that read
  fine at the shared 70% and shouldn't shrink. If more portrait product
  photos get added later, worth promoting this to a `.embedded-figure.small`
  class instead of repeating inline styles.
- "Sinus tract" (leftover English term, missed by the original terminology
  sweep — it's a different phrase than "sinus" the anatomical term flagged
  before) → "Fístula", 2 occurrences in Chapter 2 Lesson 6 (comparison table
  + Caso 4 prose). Chapter 4 already correctly used "trayecto fistuloso" in
  its own endo-perio case — checked, no change needed there.

### Chapter 2 Lesson 5 rescoped to Estadio-only (2026-08-20)

The user pasted a "capítulo II del word de referencia" academic document (a
different reference than the MEGA_PROMPT docs used to originally build the
course) and asked to remove Grado content from Chapter 2 Lesson 5 and instead
explain each Estadio (I-IV) individually, grounded in that document's prose.

- **Removed entirely:** the "Determinación de Grado" section (RBL-rate
  formula box + the 6-row cumulative-modifiers scoring table + its 0-0.5/0.5-1.5/≥1.5
  → Grado A/B/C cutoffs). Grado determination now lives only in its proper
  home, Chapter 3 ("Grados") — Chapter 2 Lesson 5 is scoped purely to
  Estadificación, matching the reference doc's framing that Estadio "no
  pretende describir la velocidad de progresión; esa función pertenece al
  grado."
- **Added:** a "Los cuatro Estadios, uno por uno" section with one card per
  Estadio (I-IV), adapted from the reference doc's sections 3-6 — each one
  states the *conceptual* point, not just the numeric criteria already in the
  table below it (Estadio I: distinguishing reversible gingivitis from real
  attachment loss; Estadio II: "established", not "simple"; Estadio III:
  anatomic complexity signs — infrabony defects, furca, mobility — shift
  management from basic to surgical/multidisciplinary; Estadio IV: the
  Estadio III→IV difference is *functional*, not "more of the same
  severity"). Deliberately did **not** include the reference doc's "Lectura
  clínica resumida" column from its Estadio matrix table — the doc itself
  carries an editorial comment flagging that column as ambiguous and
  recommending its removal, so it wasn't ported over.
- Existing "Tabla de decisión Estadio" (CAL/RBL/furcación/movilidad/pérdida
  dentaria quick-reference) was kept unchanged, now positioned after the new
  prose section as the quick-lookup summary.
- Renamed the lesson title from "Síntesis diagnóstica: caso, Estadificación y
  Gradificación" to "Síntesis diagnóstica: caso y Estadificación" to match
  the new scope; updated the closing reference line (dropped the
  Grado-modifiers-specific citation note).
- Did **not** port over the reference doc's "Localización, extensión y
  reporte diagnóstico" section (7) or its 4 casos clínicos (8) — not
  requested, and extensión (localizada/generalizada/patrón molar-incisivo)
  is already covered in Chapter 1 Lesson 4.

### Chapter 2 Lesson 3 fixes + 2 figures (2026-08-20)

Furcación table (Hamp &amp; Nyman): the "Técnica diagnóstica" column previously
gave descriptive access criteria ("pasa bucal O lingual", "pasa
mesiodistalmente"); replaced per the user's exact wording with pérdida de
inserción horizontal thresholds (Grado 0 no penetra, Grado 1 &lt;3mm, Grado 2
&gt;3mm, Grado 3 penetración completa).

The "Implicación de la furcación para el Estadio" decision-tree previously
had 3 bullets claiming specific automatic Estadio escalation per furcación
grade (Grado 1→permite Estadio II, Grado 2→escala a Estadio III, Grado
3→escala a Estadio IV). Replaced with the user's 2-bullet version (Grado I →
puede ser en todos los estadios; Grado II y III → solo se encuentran en
Estadio III y IV) — a looser, non-deterministic framing than what was there
before.

Two new figures added, both already-existing untracked files in `public/`
committed alongside this change:

- `sonda-naber.jpeg` (product photo of a Nabers probe — curved double-ended
  furcation probe) inserted between the decision-tree and the furcation
  probing-technique paragraph, with a caption explaining why the curved tip
  matters (reaches the interradicular space a straight probe can't).
- `tecnica-miller.jpg` (illustration of vertical vs. horizontal mobility
  testing) inserted directly below the Miller mobility table.

Also reworded the furcation-probing-technique paragraph to drop the
"o sonda de 17mm con ángulo 90°" alternative, per the user's exact text —
now states only the Naber-probe technique.

This is now the **6th** embedded figure in the course (3 in Chapter 1, 3 in
Chapter 2).

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

### Chapter 4 revision (2026-08-20, first pass — lesson content later fully replaced 2026-08-21, see below)

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

### Chapter 4 full rebuild, 8 new "zonas grises" lessons (2026-08-21, supersedes the pass above)

Immediately after Chapter 3's full rebuild (see above), the user asked for
"lo mismo con el capítulo IV" and pasted a *different* reference document —
not more 24-month case studies, but "Capítulo IV. Zonas grises y
clarificaciones de uso clínico" (also a real manuscript with embedded
editorial comments, `[Ui12]`-`[Ui13]`), covering 5 specific diagnostic gray
zones: CAL attribution, periodonto reducido (sano vs. gingivitis vs. activa),
pseudobolsas, tooth-loss attribution, and the Estadio III/IV functional
boundary. Same instruction pattern as Chapter 3: replace what's there,
rebuild around the new doc, keep the density/interactivity.

**This fully discarded the old Lessons 1-8** (the 8 detailed 24-month
clinical cases: fumador+DM, periodontitis agresiva joven, endo-perio,
Estadio IV, peri-implantitis, GTR complication, compliance contrast,
cross-case synthesis) — none of that case content survived, per the explicit
"reemplaza lo que hay ahora" instruction. `chapter4Content.js` was rewritten
in one shot (`Write`) into 8 new lessons matching the doc's own 5-gray-zone
structure, expanded for density:

1. **Qué son las zonas grises y por qué importan** — objetivos de
   aprendizaje (`[Ui13]`'s comment flagged the original phrasing as not
   reading like real objectives — tightened "Aprender a atribuir..." to
   "Atribuir correctamente..." to drop the redundant "aprender a" under an
   already-labeled "objetivos" heading), intro, and a decision-tree panorama
   of the 4-5 gray-zone areas standing in for the doc's Figura 3 (no image
   asset supplied).
2. **Zona gris 1 — CAL no atribuible a periodontitis** — non-periodontal
   causes table, 2 cases (one from the doc — recesión por trauma de
   cepillado — one newly constructed for depth — fractura radicular
   aislada).
3. **Zona gris 2 — Periodonto reducido: sano, inflamado, o periodontitis
   activa** — a 3-way comparison table (periodonto reducido sano / gingivitis
   sobre periodonto reducido / periodontitis activa), the doc's own case
   (paciente tratado hace 3 años, BOP 18%, sin nueva pérdida).
4. **Zona gris 3 — Pseudobolsas y profundidad de sondaje** — differentiation
   table, a newly constructed pregnancy-gingivitis case (the doc didn't
   supply a dedicated case for this zone, so one was built to match its
   own worked-example style).
5. **Zona gris 4 — Atribución de pérdida dentaria** — the doc's case (4
   dientes perdidos, sin colapso funcional → stays Estadio III) plus one
   more constructed case (old orthodontic extractions misattributed to
   periodontitis).
6. **Zona gris 5 — La frontera entre Estadio III y Estadio IV** — two
   contrasting newly constructed cases (more individual tooth destruction
   but functional = III; less destruction but functional collapse = IV),
   built specifically to teach the doc's "function, not just numbers" point
   the doc argues in prose but doesn't illustrate with a paired example.
7. **Reglas prácticas para navegar las zonas grises** — the doc's 5 numbered
   rules verbatim, plus a "deficient vs. honest documentation" side-by-side
   example illustrating Rule 5 (document genuine uncertainty).
8. **Síntesis: casos integrados de zonas grises** — 2 newly constructed
   cases that each combine multiple gray zones at once (not in the source
   doc, built as a capstone), plus a recap of all 5 zones.

Pretest/posttest **unchanged** — already verbatim-matching the committee set
from the 2026-08-20 pass (confirmed by direct text comparison against this
new doc's own pretest, which is identical). PDF resource (Kornman 2020,
already wired 2026-08-20) needed no changes — this document's own "Lectura
Sugerida" line names the same paper (its citation was malformed in the
source doc, `[Ui12]` flags this — used the already-correct citation already
in the app instead of reproducing the doc's "Korman 2019" typo/wrong year).

Also worth noting: this rebuild finally makes the chapter's lesson content
actually match its DB title ("Zonas Grises y clarificaciones de uso
clínico") — previously flagged in this doc as an intentional mismatch (the
title was renamed 2026-08-20 but the lessons underneath were still the old
24-month-case content). That mismatch note above is now stale/resolved for
Chapter 4 specifically, though not for Chapters 2-3 (their titles still
don't literally describe their lesson content, which remains intentional).

Verified all 8 lessons' HTML tags balance and pretest/posttest counts via
script before reseeding, same as the Chapter 3 rebuild.

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
