import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight, Check } from '@/components/icons';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = { title: 'About', description: 'The career branding philosophy behind Elite Resume Craft.' };

export default function AboutPage() { return <><PageHero eyebrow="About Elite Resume Craft" title={<>A better career story starts with <em>listening.</em></>} description="We pair practical hiring insight with thoughtful writing to help professionals present their work with confidence." />
  <section className="section"><div className="shell story-grid"><div className="story-mark"><span>ER</span><p>Career clarity<br />with craft</p></div><div><p className="eyebrow"><span /> Our point of view</p><h2>Career documents should feel like a true reflection of the person behind them.</h2><p className="story-copy">Elite Resume Craft was built for the moment when you know you are ready for more—but finding the right words is harder than doing the work itself. We create career materials with more strategy, more care, and less noise.</p><p className="story-copy">Our approach is informed by CV sourcing, talent acquisition, reverse recruitment, and career branding: a rare combination of knowing what candidates need to say and what hiring teams need to see.</p></div></div></section>
  <section className="section section--cream"><div className="shell founder-profile"><div className="founder-profile__visual"><span>AQSA<br />JAVED</span></div><div><p className="eyebrow"><span /> Founder / Career Branding Expert</p><h2>Meet Aqsa Javed.</h2><p>Aqsa believes the strongest career documents do more than list experience. They give people a language for the value they bring, a clear direction for the work they want next, and a first impression they can stand behind.</p><ul>{['Recruitment and hiring-process insight', 'CV sourcing and reverse-recruitment experience', 'Career branding built around authentic evidence'].map(item => <li key={item}><Check />{item}</li>)}</ul></div></div></section>
  <section className="mini-cta"><div className="shell"><p>Ready to shape the next version of your story?</p><Link className="text-link text-link--arrow" href="/pricing">Explore packages <ArrowUpRight /></Link></div></section>
  </>; }
