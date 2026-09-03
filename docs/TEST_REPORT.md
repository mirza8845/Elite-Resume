# Test Report — Milestone 1

**Date:** 2026-09-02  
**Scope:** Foundation, public website, SEO routes, documentation, and schema/RLS migration source.  
**Status:** Implementation ready for client review. Browser-run visual regression is pending because Chromium could not be downloaded in this execution environment.

## Results

| ID | Test | Result | Evidence |
| --- | --- | --- | --- |
| M1-01 | Open every public route | Pass | Production build generated 29 static/SSG route outputs; loopback smoke test returned HTTP 200 for all 26 public, dynamic, sitemap, and robots routes. |
| M1-02 | Test navigation and CTAs | Pass (build/route level) | Every target public route exists in the production build. CTA targets resolve to implemented pages. |
| M1-03 | Check desktop, tablet, mobile layouts | Pending browser execution | Responsive layouts are implemented at 900px and 650px breakpoints. Playwright desktop/mobile tests are defined but Chromium download failed when the provider connection closed. |
| M1-04 | Run lint/type/build checks | Pass | `npm run lint`, `npm run typecheck`, and `npm run build` all passed. |
| M1-05 | Inspect public metadata and sitemap | Pass | Route-specific metadata, `sitemap.xml`, and `robots.txt` compiled and returned HTTP 200. |
| M1-06 | Keyboard navigation | Pending browser execution | A skip link, semantic navigation, headings, labels, and visible focus treatment are implemented. The automated Tab-focus assertion is defined in Playwright and will run once Chromium is available. |

## Commands successfully run

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e -- --list
```

The route smoke test was run against the built server and returned HTTP 200 for:

```text
/, /about, /services, all 4 service pages, /pricing,
/templates, all 3 template pages, /portfolio, /faq, /contact,
/blog, all 3 article pages, /privacy, /terms, /refunds, /cookies,
/login, /sitemap.xml, /robots.txt
```

## Browser test suite ready to run

`tests/milestone-1.spec.ts` contains reproducible Chromium and mobile-Chromium
tests for routes, title/landmarks, skip-link keyboard focus, form labels, and
horizontal-overflow checks.

Run after browser installation succeeds:

```bash
npx playwright install chromium
npm run test:e2e
```

## Not a Milestone 1 blocker

- The Supabase migration is versioned source code. It must be applied to the
  owner-controlled Supabase project before Milestone 2 authentication/data tests.
- The contact form deliberately opens the configured email client in Milestone
  1. It will become a server-side persisted support/contact flow in later work.
- `/login` is an intentional Milestone 2 customer-portal placeholder; it does
  not represent a missing public route.
