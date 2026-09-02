import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowUpRight, Check } from '@/components/icons';
import { ResumePreview } from '@/components/resume-preview';
import { templates } from '@/lib/content';

export function generateStaticParams() { return templates.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const template = templates.find(item => item.slug === params.slug); return template ? { title: template.name, description: template.description } : {}; }

export default function TemplateDetailPage({ params }: { params: { slug: string } }) { const template = templates.find(item => item.slug === params.slug); if (!template) notFound(); return <section className="template-detail"><div className="shell template-detail__grid"><div className="template-detail__preview"><ResumePreview variant={template.style} /></div><div className="template-detail__copy"><p className="eyebrow"><span /> {template.category} template</p><h1>{template.name}</h1><p>{template.description}</p><ul>{template.features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul><Link className="button button--gold" href="/pricing">Choose a package <ArrowUpRight /></Link><p className="template-detail__caption">Template selection is included where applicable. Your content remains the focus.</p></div></div></section>; }
