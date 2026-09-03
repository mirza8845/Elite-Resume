# Elite Resume Craft — Project Blueprint

## 1. What this project is

Elite Resume Craft is a premium, mobile-first career-document automation
platform. It is not only a brochure website. A future customer flow will be:

```text
Choose a service → select a package/template → complete intake → upload CV
→ verified payment → queued AI generation → quality checks → PDF/DOCX delivery
→ private download and revision support
```

The design direction is original: navy `#1A1A2E`, gold `#B8972E`, white, warm
neutral surfaces, editorial typography, clear structure, and no copied code,
copy, or assets from third-party sites.

## 2. Current delivery state

- Active delivery phase: **Milestone 1 — implementation ready for client review**
- Source of milestone scope and acceptance criteria: `docs/MILESTONES.md`
- This document is a living handover: update it whenever architecture, schema,
  providers, environment variables, testing, or deployment decisions change.
- No real API keys, customer information, or credentials may be added here or
  committed anywhere in the repository.

## 3. Technology architecture

| Concern | Choice | Why |
| --- | --- | --- |
| Full-stack application | Next.js 14 + React + TypeScript | Public content, SEO, server routes, customer dashboard, and admin area in one maintainable project. |
| Styling | Tailwind configuration plus project-owned global CSS | Fast responsive primitives and a fully custom visual system. |
| Database/Auth/Storage | Supabase PostgreSQL, Auth, private Storage, RLS | Managed relational data, secure user authentication, private files, and portability through PostgreSQL. |
| Background jobs | Custom PostgreSQL/Supabase queue | Durable application-owned job records, retries, admin visibility, and no paid job vendor initially. |
| AI | `AIProvider` adapter; mock in local/test, Groq in early beta | Provider keys remain server-only and can be replaced later. |
| Document generation | Structured document data plus open-source DOCX/PDF renderers | Content stays separate from templates; versions remain editable and traceable. |
| Email | `EmailProvider` adapter; Brevo SMTP/API initially | Transactional notifications with a free-first starting point. |
| Payments | `PaymentProvider` adapter; test provider first | No AI job can run until a signature-verified payment webhook marks the order paid. |
| Deployment | Vercel commercial plan or standard Node.js/Docker host | The app is portable and avoids Vercel-only business logic. |

## 4. Current repository structure

```text
src/
  app/                 Next.js routes, page metadata, sitemap, robots, CSS
  components/          Reusable brand, header/footer, page, document-preview UI
  lib/                 Typed site/config/content data and service adapters
supabase/
  migrations/          Versioned PostgreSQL schema and RLS migrations
docs/
  MILESTONES.md        Contract for scope, testing, demos, and handovers
  PROJECT_BLUEPRINT.md This document
.env.example           Names of required environment variables only
```

## 5. Milestone 1 implementation

### Public routes

- `/` Home
- `/about`
- `/services` and `/services/[slug]`
- `/pricing`
- `/templates` and `/templates/[slug]`
- `/portfolio`
- `/faq`
- `/contact`
- `/blog` and `/blog/[slug]`
- `/privacy`, `/terms`, `/refunds`, `/cookies`
- `/login` is intentionally a Milestone 2 portal placeholder

Public page data is temporarily typed in `src/lib/content.ts`. Milestone 3
will connect the editable sections to the Supabase content tables and admin UI.

### Search-engine foundations

- Default page metadata is defined in `src/app/layout.tsx`.
- Dynamic route metadata is created per service, template, and article.
- `src/app/sitemap.ts` generates the sitemap.
- `src/app/robots.ts` blocks indexing of future private `/admin`, `/dashboard`,
  and `/api` paths.
- All production URLs must be updated through `NEXT_PUBLIC_APP_URL`.

## 6. Database and security foundation

The Milestone 1 SQL migration creates:

- `profiles` with customer and future staff roles
- public-content tables: `services`, `packages`, `resume_templates`, `faqs`,
  `testimonials`, `blog_posts`, and `site_content`
- `audit_logs`
- the private `customer-files` bucket
- timestamp triggers and a safe `is_admin()` policy helper
- RLS policies for customer self-access, public published content, and admin
  content management

### Required security rules

1. RLS must remain enabled on every user/customer-facing table.
2. Service-role keys are allowed in server jobs only—never client code.
3. Career documents must use private paths and authorized signed URLs.
4. Browser input is never trusted without server validation.
5. Webhook signatures are verified before any order state changes.
6. An admin promotion must be performed deliberately after the owner registers;
   no public signup can choose an administrative role.

## 7. Coding standards

- TypeScript strict mode; do not use `any` for domain models.
- Place reusable UI in `src/components` and product/domain logic in `src/lib`.
- Use server components by default; client components only for browser state or
  interaction.
- Keep secrets server-only. Variables beginning `NEXT_PUBLIC_` are public.
- Validate request data and use consistent user-facing errors; never leak stack
  traces, API errors, or personal data.
- Use meaningful names, small focused modules, and accessible semantic HTML.
- Write/adjust tests with every behavior change; a milestone is not complete
  until its documented acceptance tests pass.
- Do not replace the planned database queue with ad-hoc fire-and-forget calls.

## 8. Environment variables

Copy `.env.example` to `.env.local` locally. Set production values in the host
dashboard only.

| Variable | Visibility | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Public | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public | Browser-safe Supabase key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server only | Trusted server jobs/administration only |
| `GROQ_API_KEY` | Server only | AI provider adapter |
| `BREVO_API_KEY` | Server only | Transactional email provider adapter |
| `PAYMENT_SECRET_KEY` | Server only | Selected payment provider |
| `PAYMENT_WEBHOOK_SECRET` | Server only | Webhook signature verification |
| `NEXT_PUBLIC_APP_URL` | Public | Canonical app URL and link generation |

## 9. Local setup and commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

Use Node.js 18.20+ for the current Milestone 1 dependency set. Before a new
major Next.js upgrade, confirm the supported Node.js version and update the
deployment environment together.

To apply database migrations, connect an owner-controlled Supabase project and
run the SQL through the Supabase CLI or SQL editor. Never run production schema
changes without reviewing the migration first.

## 10. Testing and release process

For every milestone:

1. Run lint, typecheck, and production build.
2. Test each acceptance case in `docs/MILESTONES.md`.
3. Record pass/fail evidence and any known limitation.
4. Demo the staging build.
5. Update this document and milestone status.
6. Commit clean source changes; push only to the owner-controlled Git remote.

Milestone 4 requires a test checkout, webhook replay test, generation failure
test, private-file access test, and production domain/SSL smoke test before
release.

### Milestone 1 test result

`docs/TEST_REPORT.md` records the current result. Lint, TypeScript, production
build, generated routes, sitemap, robots, and loopback route smoke tests pass.
The Playwright browser suite is defined and parses successfully, but its
Chromium download failed because the remote download connection closed. Run the
two commands in that report before declaring the responsive/keyboard browser
checks complete.

## 11. Deployment and portability

The code will support any Node.js server or Docker-capable host. A static export
is not sufficient once authentication, API routes, webhooks, and private files
are active.

Deployment checklist:

1. Owner supplies GitHub, Supabase, hosting/Vercel commercial account, and DNS access.
2. Add secrets in the host environment dashboard, never the source repository.
3. Configure `NEXT_PUBLIC_APP_URL` to the production domain.
4. Configure Supabase Auth redirect URLs and email sender domain.
5. Add payment webhook URL and verify its signing secret.
6. Connect the domain, enforce HTTPS, and verify canonical redirects.
7. Run a full test order before public launch.

Vercel Hobby is not appropriate for the commercial live product. Use a
commercial Vercel plan or another commercial Node.js/Docker host for launch.

## 12. Future milestones

- **M2:** authentication, customer workspace, guided intake, secure uploads.
- **M3:** admin operations, custom queue, AI, document rendering, delivery,
  revisions.
- **M4:** payment provider, emails, full quality/security testing, production
  release, repository/deployment handover.

See `docs/MILESTONES.md` for exact scope and test cases.
