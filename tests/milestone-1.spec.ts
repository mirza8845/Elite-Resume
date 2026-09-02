import { expect, test } from '@playwright/test';

const publicRoutes = [
  '/',
  '/about',
  '/services',
  '/services/ats-resume',
  '/services/cover-letter',
  '/services/linkedin-optimization',
  '/services/career-branding',
  '/pricing',
  '/templates',
  '/templates/the-astor',
  '/templates/the-marlow',
  '/templates/the-arden',
  '/portfolio',
  '/faq',
  '/contact',
  '/blog',
  '/blog/how-to-turn-responsibilities-into-achievements',
  '/blog/what-ats-friendly-actually-means',
  '/blog/your-linkedin-headline-is-not-a-job-title',
  '/privacy',
  '/terms',
  '/refunds',
  '/cookies',
  '/login',
  '/sitemap.xml',
  '/robots.txt'
];

test('all public Milestone 1 routes respond successfully', async ({ request }) => {
  for (const route of publicRoutes) {
    const response = await request.get(route);
    expect(response.status(), `${route} should respond with 200`).toBe(200);
  }
});

test('home page has usable landmark navigation, metadata, and skip link', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Elite Resume Craft/);
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Your experience deserves');
  await page.keyboard.press('Tab');
  await expect(page.getByText('Skip to content')).toBeFocused();
});

test('desktop public page does not overflow its viewport', async ({ page }) => {
  await page.goto('/');
  const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(hasHorizontalOverflow).toBe(false);
});

test('mobile public page keeps its primary action and avoids horizontal overflow', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'This assertion is intended for the mobile project.');
  await page.goto('/');
  await expect(page.getByRole('link', { name: /find your package/i })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Open navigation' })).toBeVisible();
  const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(hasHorizontalOverflow).toBe(false);
});

test('contact page has labels for the public enquiry form', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.getByLabel('First name')).toBeVisible();
  await expect(page.getByLabel('Email address')).toBeVisible();
  await expect(page.getByLabel('Tell us about your next move')).toBeVisible();
});
