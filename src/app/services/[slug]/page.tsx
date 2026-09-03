import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowUpRight, Check } from '@/components/icons';
import { PageHero } from '@/components/page-hero';
import { services } from '@/lib/content';

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const service = services.find(item => item.slug === params.slug); return service ? { title: service.title, description: service.description } : {}; }

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(item => item.slug === params.slug);
  if (!service) notFound();
  return <>
    <PageHero eyebrow={service.eyebrow} title={<>{service.title} with more <em>intention.</em></>} description={service.description}><Link className="button button--gold" href="/pricing">View package options <ArrowUpRight /></Link></PageHero>
    <section className="section"><div className="shell detail-grid"><div><p className="eyebrow"><span /> What is included</p><h2>Built around the work you are pursuing.</h2><p className="detail-copy">We combine your career context, target role, and the language of your market into a document that feels accurate, considered, and ready to use.</p></div><div className="deliverable-card"><p>Included with this service</p><ul>{service.deliverables.map(item => <li key={item}><Check />{item}</li>)}</ul></div></div></section>
    <section className="section section--cream"><div className="shell two-column-content"><div><p className="eyebrow"><span /> Our process</p><h2>A clearer path from input to application.</h2></div><div className="numbered-copy"><div><span>01</span><h3>Context first</h3><p>Share your experience, goals, and the roles that matter most right now.</p></div><div><span>02</span><h3>Strategic shaping</h3><p>Your content is organized around credible achievements and relevant signals.</p></div><div><span>03</span><h3>Ready for action</h3><p>Receive accessible versions you can use confidently in your next application.</p></div></div></div></section>
    <section className="mini-cta"><div className="shell"><p>Need a more complete career package?</p><Link className="text-link text-link--arrow" href="/services/career-branding">Explore Career Branding <ArrowUpRight /></Link></div></section>
  </>;
}
