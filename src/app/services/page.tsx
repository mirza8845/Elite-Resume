import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Check } from '@/components/icons';
import { PageHero } from '@/components/page-hero';
import { services } from '@/lib/content';

export const metadata: Metadata = { title: 'Career services', description: 'ATS resumes, cover letters, LinkedIn optimization, and full career branding support.' };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Career services" title={<>Materials that make your <em>next move</em> clearer.</>} description="Choose focused support for one document, or bring your full professional presence into alignment." />
      <section className="section"><div className="shell service-list">
        {services.map((service, index) => <article className="service-list__item" key={service.slug}><div className={`service-list__accent service-list__accent--${service.accent}`}><span>0{index + 1}</span></div><div><p className="eyebrow"><span /> {service.eyebrow}</p><h2>{service.title}</h2><p className="service-list__description">{service.description}</p><p className="service-list__ideal"><strong>Ideal for:</strong> {service.idealFor}</p><Link className="text-link text-link--arrow" href={`/services/${service.slug}`}>Explore service <ArrowUpRight /></Link></div><ul>{service.deliverables.map(item => <li key={item}><Check />{item}</li>)}</ul></article>)}
      </div></section>
      <section className="service-bottom"><div className="shell"><p className="eyebrow eyebrow--light"><span /> Not sure where to begin?</p><h2>We can help you choose the right level of support.</h2><Link className="button button--gold" href="/contact">Talk about your next step <ArrowUpRight /></Link></div></section>
    </>
  );
}
