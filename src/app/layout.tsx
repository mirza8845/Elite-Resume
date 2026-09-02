import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Elite Resume Craft | Career documents that open doors',
    template: '%s | Elite Resume Craft'
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: ['ATS resume', 'CV writing', 'cover letter', 'LinkedIn optimization', 'career branding'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
    title: 'Elite Resume Craft | Career documents that open doors',
    description: siteConfig.description
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
