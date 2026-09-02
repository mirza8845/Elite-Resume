import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from '@/components/icons';

export const metadata: Metadata = { title: 'Client portal' };

export default function LoginPage() { return <section className="portal-notice"><div><p className="eyebrow"><span /> Client portal</p><h1>Your private career workspace is on its way.</h1><p>Secure customer accounts, project intake, document downloads, and revisions are part of Milestone 2.</p><Link className="button button--gold" href="/contact">Contact us in the meantime <ArrowUpRight /></Link></div></section>; }
