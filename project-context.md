# OVA Periodontitis UNICOC — Project Context

Landing page + learning platform (OVA = Objeto Virtual de Aprendizaje) teaching the
AAP/EFP 2018 periodontitis classification (Stage/Grade) to UNICOC dental students.
Client: Universidad Cooperativa de Colombia.

Last updated: 2026-08-19.

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
exist. To promote someone: update their `profiles.user_type` row directly
(Supabase Studio table editor, or a service_role REST call) — there's no
in-app UI for granting roles, only for viewing/resetting once granted.

The Admin nav link only renders where `Header.tsx` (landing) or the
Dashboard's own top bar explicitly check `isAdmin` from `AuthContext` — most
authenticated pages have their own separate header bars that don't share
`Header.tsx`, so a new page needs its own admin-link wiring if it should have
one (this bit DashboardPage once already: the link existed in code but only in
`Header.tsx`, which is never rendered post-login).

### Content status (as of this doc)

| Chapter | DB row | Lessons | Pretest | Posttest |
|---|---|---|---|---|
| 1 — El cambio que transformó la periodoncia | ✅ | **8/8**, postgrado-level academic depth | 4 Q | 8 Q (≥70% to pass) |
| 2 — Diagnosticando en 3 pasos | ✅ | **0** | — | — |
| 3 — Clasificando: Estadio y Grado | ✅ | **0** | — | — |
| 4 — Casos reales | ✅ | **0** | — | — |

Only Chapter 1 has any lesson/test content. Chapters 2-4 exist as rows (so they
show up on the dashboard) but `ChapterPage` falls back to a static
"próximamente" placeholder for any chapter with no lessons — that's intentional,
not a bug.

Chapter 1's content has been **fully regenerated three times** now via
`scripts/insertChapter1.js`/`chapter1Content.js` (original 4-lesson placeholder
→ 8-lesson version → current postgrado-depth version sourced from
`MEGA_PROMPT_CAPITULO_1_DENSO.md`, pasted 2026-08-19: full immunopathogenesis,
biofilm/microbiology, RANK/RANKL, 5 risk modifiers instead of 2, 2 fully
worked integrated cases). Each regeneration reset every user's
`user_progress` for that chapter, since lesson counts/content changed and old
`lessons_completed` counts stopped meaning anything — check with whoever's
testing before regenerating again, it wipes real progress every time.
`chapters.estimated_time_minutes` for Chapter 1 was bumped 45 → 75 to match.

An earlier, broader source (`OVA_CAPITULOS_1-4_MEGA_PROMPT.md`, also pasted
2026-08-19) covers Chapters 1-4 but is itself incomplete for 2-4 (Chapter 2
only 4/9 lessons written, Chapter 3 fully placeholder, Chapter 4 thin) — see
"Open items" below. That document's own Chapter 1 content was **not** used;
the denser standalone doc superseded it.

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

- Email/password only, via `supabase.auth`. Signup enforces `@unicoc.edu.co`
  domain client-side in `AuthContext.signUp`.
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
accounts (`test.ova.*`, `trigger.test.*` — harmless, `student` role, safe to
delete whenever), there are **3 real student signups**:
`m.leamus@unicoc.edu.co`, `v.garcia@unicoc.edu.co`, `s.lozada@unicoc.edu.co`.

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

- **Chapters 2, 3, 4 have no lesson/test content at all.** A candidate source
  document (`OVA_CAPITULOS_1-4_MEGA_PROMPT.md`) was pasted 2026-08-19 but is
  itself incomplete: Chapter 2 only has 4 of 9 promised lessons written
  (2.5-2.9 are bracketed placeholders), Chapter 3 has **zero** real content
  (all 7 cases are `[Contenido denso...]` placeholders), Chapter 4's lessons
  4.5/4.6 are single bullets, not full lessons, and it only provides one
  generic pre/post-test rather than one per chapter. Decision on how to handle
  the gap (insert only what's real / user supplies the rest / this operator
  authors the rest) was pending when this doc was written — check the
  conversation before assuming a direction was chosen.
- `npm run build` warns about a >500kB JS chunk (no code-splitting yet) —
  known, not yet addressed, low priority.
- Two leftover throwaway test accounts (`test.ova.*@unicoc.edu.co`, both
  unconfirmed) could be deleted for a cleaner admin panel; left in place
  pending the user's go-ahead (account deletion via the admin API was flagged
  as a sensitive action once already for a *different* reason — creating a
  user — so treat deleting one as worth confirming too, not a routine action).
