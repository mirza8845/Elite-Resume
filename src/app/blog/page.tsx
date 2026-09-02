import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from '@/components/icons';
import { PageHero } from '@/components/page-hero';
import { articles } from '@/lib/content';

export const metadata: Metadata = { title: 'Career notes', description: 'Clear, practical perspective on resumes, applications, and career positioning.' };

export default function BlogPage() { return <><PageHero eyebrow="Career notes" title={<>Practical perspective for <em>work in progress.</em></>} description="Clear ideas to help you communicate your experience and make your next career move with more intention." />
  <section className="section"><div className="shell blog-list">{articles.map((article, index) => <article className="blog-row" key={article.slug}><span>{String(index + 1).padStart(2, '0')}</span><p>{article.category}</p><div><p className="blog-row__meta">{article.date} · {article.readTime}</p><h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2><p>{article.excerpt}</p></div><Link aria-label={`Read ${article.title}`} href={`/blog/${article.slug}`}><ArrowUpRight /></Link></article>)}</div></section>
  </>; }
