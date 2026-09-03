import { PageHero } from '@/components/page-hero';

export function PolicyPage({ title, intro, sections }: { title: string; intro: string; sections: [string, string][] }) {
  return <><PageHero eyebrow="Legal information" title={title} description={intro} /><section className="section"><div className="shell policy-copy"><p className="policy-copy__note">Last updated: September 2026. This Milestone 1 policy content is a structured draft and must be reviewed for the business’s legal jurisdiction before public launch.</p>{sections.map(([heading, content]) => <section key={heading}><h2>{heading}</h2><p>{content}</p></section>)}</div></section></>;
}
