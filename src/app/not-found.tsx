import Link from 'next/link';
import { ArrowUpRight } from '@/components/icons';

export default function NotFound() { return <section className="portal-notice"><div><p className="eyebrow"><span /> 404</p><h1>That page has moved on.</h1><p>Let’s find the right direction for your next career move.</p><Link className="button button--gold" href="/">Back to home <ArrowUpRight /></Link></div></section>; }
