# Elite Resume Craft — Delivery Milestones

## Purpose

This document is the operating agreement for the four delivery milestones of
Elite Resume Craft. It lets the owner, developer, or a future AI understand
exactly what to build, test, demo, and hand over for each phase.

This is a planning document only. No milestone is considered started until the
owner explicitly says `Start Milestone 1`, `Start Milestone 2`, `Start
Milestone 3`, or `Start Milestone 4`.

## Project direction

Elite Resume Craft is a premium career-document automation platform. Customers
will choose a service and template, provide career information, complete a
verified payment, receive AI-assisted ATS-friendly documents, and manage their
documents and revisions in a private dashboard. Administrators will manage
orders, content, products, templates, generation jobs, and revisions.

The implementation is original and follows the approved brand direction:
navy `#1A1A2E`, gold `#B8972E`, white, restrained premium typography, and a
mobile-first experience. Third-party site source code, assets, and copy must
not be copied.

## Approved technology direction

| Area | Initial choice | Rule |
| --- | --- | --- |
| Application | Next.js with TypeScript | One full-stack codebase for public site, customer app, admin app, and secure server routes. |
| Data, authentication, storage | Supabase | PostgreSQL, Auth, private Storage, Row-Level Security, Cron, and Edge Functions. |
| Background jobs | Custom PostgreSQL/Supabase queue | No Inngest initially. Jobs are durable, idempotent, retryable, and visible to administrators. |
| AI | Groq free tier initially | All AI calls run server-side through an `AIProvider` adapter. A mock provider is used in local/test environments. |
| Documents | Open-source DOCX/PDF libraries | Content is separated from layouts; files are versioned and access-controlled. |
| Email | Brevo free SMTP/API initially | All email sending goes through an `EmailProvider` adapter. |
| Payment | Test provider first | A `PaymentProvider` adapter supports test checkout and secure webhook flow before a merchant provider is selected. |
| Hosting | Local/Staging first; Vercel for production | A commercial Vercel plan or other commercial Node.js/Docker host is required for a live paid business. |

## Shared non-negotiable rules

- Never expose AI, Supabase service-role, payment, email, or storage secrets in browser code or Git.
- Validate all server inputs using shared schemas; do not trust browser validation alone.
- Enforce Supabase Row-Level Security for every customer-owned record and file.
- Customer files are private and delivered only through authorized signed URLs.
- Payment webhooks must be signature-verified. AI generation must never start from a browser-reported payment success.
- Every asynchronous job must be idempotent, logged, retryable, and safely recoverable.
- Never deliver an AI document without the defined quality checks passing or an admin review state being created.
- Keep UI responsive for mobile, tablet, and desktop. Meet basic keyboard and screen-reader accessibility expectations.
- Use TypeScript, explicit domain types, small modules, clear naming, server-side authorization, and user-safe error messages.
- Document all technical decisions, schema changes, provider changes, deployment steps, and deviations in `docs/PROJECT_BLUEPRINT.md` once implementation begins.
- Do not make a milestone completion claim without its tests passing and the client demo being ready.

## Milestone activation rule

When the owner says `Start Milestone N`, it authorizes work only on that
milestone and its direct prerequisites. Before work begins, verify that
Milestone N-1 is marked complete in this document and that its acceptance tests
are passing.

If a prerequisite is incomplete, report it plainly and request instruction;
do not silently skip earlier security, data, or workflow foundations.

Each milestone ends with:

1. A working staging/demo build.
2. A feature-completion report.
3. A test-case report with pass/fail evidence.
4. Updated project documentation.
5. A clean Git commit or release tag when a remote repository is available.

## Milestone 1 — Foundation, brand system, and public website

**Target duration:** Weeks 1–2  
**Status:** Implementation ready for client review — final browser-run responsive/keyboard checks pending

### Objective

Establish the maintainable full-stack foundation and ship the original,
responsive public experience that explains and sells the services.

### Included work

- Bootstrap Next.js, TypeScript, linting, formatting, environment validation,
  application layout, shared UI primitives, and error boundaries.
- Create Supabase project schema foundation, role model, migration process, and
  baseline Row-Level Security policies.
- Define the visual system: brand colors, typography, spacing, responsive grid,
  buttons, cards, navigation, form states, empty states, and accessible focus
  states.
- Build public Home, About, Services, individual service shells, Pricing,
  Templates, Samples/Portfolio, Blog listing/detail shells, FAQ, Contact, and
  policy page shells.
- Create editable content-model foundations for services, packages, FAQs,
  templates, testimonials, and blog posts.
- Add public SEO foundations: metadata, canonical rules, sitemap, robots,
  Open Graph defaults, semantic landmarks, and image alt-text rules.
- Start `docs/PROJECT_BLUEPRINT.md` with setup instructions, structure,
  decisions, and environment-variable reference.

### Demonstration outcome

A client can browse a polished, responsive, original Elite Resume Craft public
site, see services, packages, templates, examples, FAQs, and reach clear calls
to action.

### Acceptance test cases

| ID | Test | Expected result |
| --- | --- | --- |
| M1-01 | Open every public route | Page renders with no server/client error. |
| M1-02 | Test navigation and CTAs | Every intended link and CTA reaches the correct route. |
| M1-03 | Check 320px, tablet, and desktop layouts | No clipping, overlap, inaccessible control, or horizontal overflow. |
| M1-04 | Run lint/type/build checks | All checks pass. |
| M1-05 | Inspect public metadata and sitemap | Correct title/description/canonical behavior and valid sitemap entries. |
| M1-06 | Keyboard navigation | Interactive elements have usable focus and expected keyboard behavior. |

### Handover

- Staging URL and responsive walkthrough.
- Test report for M1-01 through M1-06.
- Updated project blueprint and release notes.

---

## Milestone 2 — Customer accounts, intake, uploads, and dashboard

**Target duration:** Weeks 3–4  
**Status:** Not started

### Objective

Allow a customer to securely create an account, select a service and template,
complete/save an intake project, upload supporting documents, and see the work
in a private dashboard.

### Included work

- Email/password registration, secure sessions, email verification, sign-in,
  sign-out, password reset, and profile management; Google sign-in remains an
  optional later integration.
- Customer dashboard overview, projects, orders, documents placeholders,
  revisions placeholders, profile, and support entry point.
- Product/package/template selection, including career level, target role,
  country/market, and additional requirement selection.
- Dynamic multi-step questionnaire for personal information, work history,
  education, skills, certifications, projects, links, and target job
  description.
- Draft save/resume functionality and review-before-checkout page.
- Secure PDF/DOCX/TXT upload flow with file type/size validation and private
  Supabase storage paths.
- Resume project, intake submission, upload, order-draft, and audit-data
  schema/policies.

### Demonstration outcome

A customer can register, select a package/template, submit or save their
career information, upload an old CV, and see only their own project in the
dashboard.

### Acceptance test cases

| ID | Test | Expected result |
| --- | --- | --- |
| M2-01 | Register, verify, sign in, sign out | Account lifecycle works and protected routes stay protected. |
| M2-02 | Request/reset password | Reset token and secure password change flow work. |
| M2-03 | Complete/save/reopen intake | Data persists accurately across sessions. |
| M2-04 | Upload PDF, DOCX, TXT | Supported safe files store privately and link to the project. |
| M2-05 | Upload invalid type/oversized file | Upload is rejected with clear, safe error message. |
| M2-06 | Attempt cross-customer access | Database, route, and signed-file access are denied. |
| M2-07 | Use customer workflow on phone | All intake steps remain usable at mobile width. |

### Handover

- Staging user journey with test account.
- Test report for M2-01 through M2-07.
- Updated schema, RLS, customer-flow, and setup documentation.

---

## Milestone 3 — Admin operations, AI generation, and document delivery

**Target duration:** Weeks 5–6  
**Status:** Not started

### Objective

Create the operational system that turns a paid/test-paid intake into
versioned, quality-checked career documents and gives authorized admins control
of the process.

### Included work

- Secure `/admin` area and admin role authorization.
- Admin views for dashboard metrics, orders, customers, packages, templates,
  FAQs, testimonials, blog content, and revisions.
- Custom `job_queue` with atomic job claim, event log, status transitions,
  retry policy, delayed retry, failed/manual-review states, and admin retry.
- `AIProvider` interface, deterministic mock provider, server-only Groq
  provider, output validation, rate-limit handling, and AI usage record.
- Job-description analysis and structured resume/cover-letter/LinkedIn output.
- Automated checks for mandatory data, dates, duplicates, repetition,
  unsupported claims, keyword stuffing, contact validity, and section
  completeness.
- Reusable ATS-safe template engine; generate editable DOCX, PDF, and document
  version records with secure customer access.
- Customer document listing/download and revision-request workflow.

### Demonstration outcome

An admin can open a test-paid order, observe its queued/generating/quality
check/completed timeline, retry a controlled failure, and a customer can access
only their resulting PDF/DOCX versions and request a revision.

### Acceptance test cases

| ID | Test | Expected result |
| --- | --- | --- |
| M3-01 | Create test order and queue job | One idempotent job is created with correct status trail. |
| M3-02 | Run mock AI generation | Structured valid resume data is generated without external cost. |
| M3-03 | Run configured Groq test | Key stays server-side; rate-limit/error outcome is handled safely. |
| M3-04 | Force an AI/render failure | Retry occurs according to policy or item moves to manual review. |
| M3-05 | Generate PDF/DOCX | Both files are linked, versioned, and downloadable by owner only. |
| M3-06 | Force quality-check failure | Delivery is blocked and clear review state is recorded. |
| M3-07 | Request revision | Revision records, messages, files, and version history are retained. |
| M3-08 | Open admin routes as a customer | Access is denied. |

### Handover

- Staging end-to-end document-generation demo using controlled test data.
- Test report for M3-01 through M3-08.
- Updated job-queue, AI, document, admin, and recovery documentation.

---

## Milestone 4 — Payments, notifications, production quality, and release

**Target duration:** Weeks 7–8  
**Status:** Not started

### Objective

Complete the verified payment-to-delivery journey, notification system,
production readiness checks, source-control handover, and deployment.

### Included work

- `PaymentProvider` interface with fully tested test-mode checkout, payment
  status changes, webhook-signature verification, and idempotent webhook
  processing.
- Live payment provider integration once the owner supplies an eligible,
  approved merchant account. Do not activate live collection without it.
- `EmailProvider` integration using Brevo SMTP/API for verification, order,
  payment, processing, document-ready, revision, failed-payment, and reset
  emails.
- Analytics event hooks, final SEO content, error monitoring approach, audit
  log review, rate limiting, upload hardening, and performance optimization.
- Automated unit/integration/end-to-end test suite and final manual test matrix.
- Git repository cleanup, release commit/tag, README, deployment guide,
  environment template, backup/recovery instructions, and owner handover.
- Deploy to the authorized Vercel account or compatible commercial Node.js/
  Docker host; configure environment variables, domain, SSL, redirects,
  Supabase Auth URLs, email domain, webhooks, and final production smoke test.

### Demonstration outcome

A test customer completes the full journey: order → verified test payment →
queued generation → email notifications → private PDF/DOCX download → revision
request. The administrator sees the complete order timeline and can operate the
system.

### Acceptance test cases

| ID | Test | Expected result |
| --- | --- | --- |
| M4-01 | Complete a test checkout | Order remains unpaid until verified webhook is processed. |
| M4-02 | Replay the payment webhook | No duplicate order, charge state, or generation job is created. |
| M4-03 | Simulate failed/cancelled payment | Customer sees clear status and no AI job begins. |
| M4-04 | Send each transactional email | Correct recipient, template, and safe content are delivered/logged. |
| M4-05 | Complete production-like end-to-end test | Files, timeline, notifications, revisions, and access control work together. |
| M4-06 | Run security checks | Authorization, secrets, RLS, signed URLs, validation, and webhook security pass review. |
| M4-07 | Run cross-browser/device regression | Core journey passes on modern Chrome, Safari, Android, tablet, and desktop. |
| M4-08 | Deploy and connect domain | HTTPS, redirects, environment configuration, and production health checks pass. |

### Handover

- Production URL and final smoke-test report.
- Complete test report and acceptance checklist.
- Git repository pushed to the owner-controlled remote, once repository access
  is supplied.
- Deployment, environment, backup, maintenance, and recovery documentation.

## Required owner inputs before Milestone 4 production release

- GitHub repository access or owner-controlled remote URL.
- Vercel commercial account access (or another commercial Node.js/Docker host).
- Domain/DNS access.
- Supabase project ownership/access.
- Brevo account and verified sender domain.
- Groq API key, if the real AI provider is to be enabled.
- Approved payment merchant account, provider credentials, and legal-business
  country/entity details for live collection.
- Final logo, founder photo, testimonials, portfolio samples, social links,
  support email/WhatsApp, and legal-policy text, if available.

## Future extensions (not part of the four milestones)

- AI career coaching and interview preparation.
- Job matching, job application tracking, and ATS scoring.
- Additional languages, currencies, subscriptions, referrals, and affiliates.
- Mobile applications and recruiter/employer portal.
- Higher-volume dedicated job workers, caching, and expanded analytics.
