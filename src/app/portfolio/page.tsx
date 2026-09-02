import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from '@/components/icons';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = { title: 'Portfolio & samples', description: 'Explore anonymized examples of stronger resume, cover letter, and LinkedIn positioning.' };

const examples = [
  { type: 'Resume / Before and after', title: 'From task list to product operations impact', before: 'Managed support tickets, created reports, and worked with product teams.', after: 'Led operational programs across support and product teams, improving response clarity and creating reporting that informed weekly roadmap decisions.', tone: 'sky' },
  { type: 'Cover letter / Targeted', title: 'A more intentional opening for a career transition', before: 'I am applying for the marketing role at your company. I have several years of experience.', after: 'I bring a customer-led operations background and a record of turning insight into clearer experiences—the combination I would bring to your growth marketing team.', tone: 'gold' },
  { type: 'LinkedIn / Positioning', title: 'Making a recruiter-facing profile do more work', before: 'Project Manager at Company', after: 'Project Manager | Building calmer, better-run cross-functional delivery for growing teams', tone: 'rose' }
];

export default function PortfolioPage() { return <><PageHero eyebrow="Selected sample work" title={<>The difference a stronger story <em>can make.</em></>} description="Anonymized examples show how strategic framing can make experience easier for a hiring reader to understand." />
  <section className="section"><div className="shell sample-list">{examples.map((sample, index) => <article className={`sample-card sample-card--${sample.tone}`} key={sample.title}><div className="sample-card__header"><span>0{index + 1}</span><p>{sample.type}</p></div><h2>{sample.title}</h2><div className="before-after"><div><span>Before</span><p>“{sample.before}”</p></div><div><span>After</span><p>“{sample.after}”</p></div></div></article>)}</div></section>
  <section className="section section--cream"><div className="shell sample-note"><p className="eyebrow"><span /> A note on samples</p><h2>Every document begins with a different person, goal, and opportunity.</h2><p>These examples demonstrate our approach to clarity and positioning. Your final materials will be created from your own accurate career information—not copied from a sample.</p><Link className="button button--outline" href="/contact">Discuss your goals <ArrowUpRight /></Link></div></section>
  </>; }
