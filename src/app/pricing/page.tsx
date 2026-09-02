import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Check } from '@/components/icons';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = { title: 'Pricing', description: 'Clear, straightforward pricing for ATS resumes and complete career branding packages.' };

const packages = [
  { name: 'Basic Resume', price: '$30', note: 'A stronger, more strategic application starting point.', features: ['ATS-optimized resume', 'Professional design', 'PDF delivery', 'Editable DOCX delivery'], accent: false },
  { name: 'Premium Full Suite', price: '$50', note: 'A complete career-document refresh for your next move.', features: ['ATS-designed resume', 'PDF + editable DOCX', 'LinkedIn optimization', 'Custom cover letter', 'One free revision', 'Interview tips'], accent: true }
];

export default function PricingPage() { return <><PageHero eyebrow="Simple, transparent pricing" title={<>Choose the support that fits <em>what’s next.</em></>} description="No confusing add-ons. Just thoughtful career support designed around your goals." />
  <section className="section"><div className="shell pricing-grid">{packages.map(pkg => <article className={`pricing-card${pkg.accent ? ' pricing-card--featured' : ''}`} key={pkg.name}>{pkg.accent && <span className="pricing-card__badge">Most complete</span>}<p className="pricing-card__kind">Career documents</p><h2>{pkg.name}</h2><p className="pricing-card__price">{pkg.price}<small> one time</small></p><p className="pricing-card__note">{pkg.note}</p><ul>{pkg.features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul><Link className={`button ${pkg.accent ? 'button--gold' : 'button--outline'}`} href="/contact">Choose this package <ArrowUpRight /></Link></article>)}</div></section>
  <section className="section section--cream"><div className="shell pricing-note"><p className="eyebrow"><span /> A note on revisions</p><h2>Good work gets better with feedback.</h2><p>Every Premium Full Suite includes one free revision. Need a different level of support? Contact us and we will help you decide what fits your situation.</p><Link className="text-link text-link--arrow" href="/contact">Talk with us <ArrowUpRight /></Link></div></section>
  </>;
}
