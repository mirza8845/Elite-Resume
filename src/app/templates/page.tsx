import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Check } from '@/components/icons';
import { PageHero } from '@/components/page-hero';
import { ResumePreview } from '@/components/resume-preview';
import { templates } from '@/lib/content';

export const metadata: Metadata = { title: 'Resume templates', description: 'Browse premium, ATS-friendly resume templates designed for readability.' };

export default function TemplatesPage() { return <><PageHero eyebrow="ATS-safe template collection" title={<>Polished, personal, and made <em>to be read.</em></>} description="Every template is built around visual clarity and the practical requirements of modern applicant tracking systems." />
  <section className="section"><div className="shell"><div className="filter-row"><span>Showing 3 templates</span><div><button type="button" className="filter-button">All levels</button><button type="button" className="filter-button">ATS-friendly</button></div></div><div className="template-catalog">{templates.map(template => <Link className="catalog-card" href={`/templates/${template.slug}`} key={template.slug}><div className="catalog-card__preview"><ResumePreview variant={template.style} /></div><div className="catalog-card__body"><p>{template.category}</p><h2>{template.name}</h2><span>{template.description}</span><div className="catalog-card__footer">See template <ArrowUpRight /></div></div></Link>)}</div></div></section>
  <section className="section section--cream"><div className="shell template-principles"><div><p className="eyebrow"><span /> Template principles</p><h2>Design should make information easier to find.</h2></div><ul>{['Clear, text-based headings and sections', 'No hidden information in visual elements', 'Comfortable spacing and readable type', 'Layouts that keep the focus on your experience'].map(item => <li key={item}><Check />{item}</li>)}</ul></div></section>
  </>;
}
