import Link from 'next/link';
import { BrandMark } from '@/components/brand-mark';
import { ArrowUpRight } from '@/components/icons';
import { siteConfig } from '@/lib/site';

const groups = [
  { title: 'Explore', links: [['Services', '/services'], ['Templates', '/templates'], ['Pricing', '/pricing'], ['Portfolio', '/portfolio']] },
  { title: 'Learn', links: [['About', '/about'], ['Career notes', '/blog'], ['FAQs', '/faq'], ['Contact', '/contact']] },
  { title: 'Legal', links: [['Privacy', '/privacy'], ['Terms', '/terms'], ['Refund policy', '/refunds'], ['Cookies', '/cookies']] }
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-intro">
            <BrandMark inverse />
            <p>Career documents with the clarity to be noticed and the craft to be remembered.</p>
            <a className="footer-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email} <ArrowUpRight /></a>
          </div>
          <div className="footer-links">
            {groups.map((group) => (
              <div key={group.title}>
                <p className="footer-label">{group.title}</p>
                {group.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Elite Resume Craft. All rights reserved.</p>
          <p>Designed for careers in motion.</p>
        </div>
      </div>
    </footer>
  );
}
