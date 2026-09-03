import Link from 'next/link';
import { BrandMark } from '@/components/brand-mark';
import { ArrowUpRight, Menu } from '@/components/icons';
import { navItems } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <BrandMark />
        <nav className="site-header__nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="site-header__actions">
          <Link className="text-link" href="/login">Client portal</Link>
          <Link className="button button--small" href="/contact">Get started <ArrowUpRight /></Link>
          <button className="menu-button" type="button" aria-label="Open navigation"><Menu /></button>
        </div>
      </div>
    </header>
  );
}
