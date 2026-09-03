import Link from 'next/link';
import { ArrowUpRight, Check, Spark } from '@/components/icons';
import { ResumePreview } from '@/components/resume-preview';
import { articles, faqs, services, templates } from '@/lib/content';

const outcomes = [
  ['Clear direction', 'Your experience is shaped around the role you are working toward.'],
  ['Credible impact', 'Accomplishments are grounded in what you actually did and the difference it made.'],
  ['Ready to use', 'Every document is designed to work for recruiters, systems, and real conversations.']
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__grain" aria-hidden="true" />
        <div className="shell hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light"><span /> Career branding for your next chapter</p>
            <h1>Your experience deserves to <em>be noticed.</em></h1>
            <p className="hero__lead">Premium, ATS-ready career documents designed to make the first impression count—and the next move feel possible.</p>
            <div className="hero__actions">
              <Link className="button button--gold" href="/pricing">Find your package <ArrowUpRight /></Link>
              <Link className="button button--ghost" href="/portfolio">See the difference <span className="button__arrow">↓</span></Link>
            </div>
            <div className="hero__proof">
              <div className="proof-avatars" aria-hidden="true"><span>AM</span><span>SR</span><span>JK</span></div>
              <p>Built for professionals who are ready to tell a stronger career story.</p>
            </div>
          </div>
          <div className="hero__art" aria-label="Premium resume document preview">
            <span className="hero__sun" aria-hidden="true" />
            <span className="hero__orbit hero__orbit--one" aria-hidden="true" />
            <span className="hero__orbit hero__orbit--two" aria-hidden="true" />
            <div className="hero__document"><ResumePreview variant="hero" /></div>
            <div className="hero__note hero__note--one"><Spark /> ATS-aware<br />content strategy</div>
            <div className="hero__note hero__note--two"><span>01</span> Designed for<br />the human reader</div>
          </div>
        </div>
        <div className="shell hero__ticker" aria-label="Services offered">
          <span>ATS Resumes</span><i /> <span>Cover Letters</span><i /> <span>LinkedIn Profiles</span><i /> <span>Career Branding</span>
        </div>
      </section>

      <section className="section section--cream intro-section">
        <div className="shell split-intro">
          <p className="eyebrow"><span /> The craft behind a strong application</p>
          <div>
            <h2>More than a better-looking document.</h2>
            <p className="large-copy">We listen for the thread in your career, turn experience into evidence, and create the materials that help the right people see your potential.</p>
            <Link className="text-link text-link--arrow" href="/about">Meet Elite Resume Craft <ArrowUpRight /></Link>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="shell">
          <div className="section-heading section-heading--row">
            <div><p className="eyebrow"><span /> Ways we can work together</p><h2>Make every career move feel intentional.</h2></div>
            <Link className="text-link text-link--arrow" href="/services">View all services <ArrowUpRight /></Link>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <Link href={`/services/${service.slug}`} key={service.slug} className={`service-card service-card--${service.accent}`}>
                <div className="service-card__top"><span>0{index + 1}</span><ArrowUpRight /></div>
                <h3>{service.shortTitle}</h3>
                <p>{service.description}</p>
                <span className="service-card__link">Explore service</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section difference-section">
        <div className="shell difference-grid">
          <div className="difference-art">
            <div className="paper-stack"><div className="paper-stack__back" /><ResumePreview compact /><div className="paper-stack__stamp">Made for<br /><strong>what’s next</strong></div></div>
          </div>
          <div className="difference-copy">
            <p className="eyebrow"><span /> Your story, strategically told</p>
            <h2>Good work should not get lost in the details.</h2>
            <p>Whether you are changing direction, stepping into leadership, or applying for your first meaningful role, your documents should make the value of your work easy to recognize.</p>
            <div className="outcome-list">
              {outcomes.map(([title, text], index) => <div className="outcome-item" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow eyebrow--light"><span /> A thoughtful process, made simple</p><h2>From your experience to your next opportunity.</h2></div>
          <div className="process-grid">
            {[
              ['01', 'Tell us where you are going', 'Choose your service, template, target role, and market.'],
              ['02', 'Share the details that matter', 'Complete a guided career questionnaire and upload anything useful.'],
              ['03', 'Receive materials made for momentum', 'Your work is shaped, checked, and delivered in a private portal.']
            ].map(([number, title, text]) => <div className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section templates-section">
        <div className="shell">
          <div className="section-heading section-heading--row"><div><p className="eyebrow"><span /> Designed to be read</p><h2>Templates with presence—and purpose.</h2></div><p className="section-side-copy">Refined layouts, clear hierarchy, and ATS-safe structure. Choose a visual language that feels like you.</p></div>
          <div className="template-showcase">
            {templates.map((template) => <Link key={template.slug} href={`/templates/${template.slug}`} className="template-card"><div className="template-card__paper"><ResumePreview variant={template.style} compact /></div><div className="template-card__info"><div><p>{template.category}</p><h3>{template.name}</h3></div><ArrowUpRight /></div></Link>)}
          </div>
          <div className="centered-action"><Link className="button button--outline" href="/templates">Browse every template <ArrowUpRight /></Link></div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="shell proof-grid">
          <blockquote>“I finally had a resume that sounded like me—just clearer, sharper, and more confident.”</blockquote>
          <div className="testimonial-meta"><div className="quote-mark">“</div><p><strong>Sarah R.</strong><br />Senior Programme Manager</p><div className="stars" aria-label="5 out of 5 stars">★★★★★</div></div>
        </div>
      </section>

      <section className="section founder-section">
        <div className="shell founder-grid">
          <div className="founder-portrait"><div className="portrait-shape portrait-shape--one" /><div className="portrait-shape portrait-shape--two" /><div className="portrait-initials">AJ</div><p>Founder<br />Career Branding Expert</p></div>
          <div className="founder-copy"><p className="eyebrow"><span /> A recruiter’s perspective</p><h2>Your career is more than a list of titles.</h2><p>Founder Aqsa Javed brings a background in CV sourcing, talent acquisition, reverse recruitment, and career branding to every client experience. The work begins with how hiring decisions are made—and ends with a story that feels true to you.</p><Link className="text-link text-link--arrow" href="/about">Read our story <ArrowUpRight /></Link></div>
        </div>
      </section>

      <section className="section section--cream faq-section">
        <div className="shell faq-layout">
          <div><p className="eyebrow"><span /> Common questions</p><h2>Clear answers, before you begin.</h2><p>Still deciding what you need? We are here to make the next step simple.</p><Link className="button button--outline" href="/faq">Read all FAQs <ArrowUpRight /></Link></div>
          <div className="faq-list">
            {faqs.slice(0, 4).map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="section notes-section">
        <div className="shell">
          <div className="section-heading section-heading--row"><div><p className="eyebrow"><span /> Career notes</p><h2>Practical insight for work in progress.</h2></div><Link className="text-link text-link--arrow" href="/blog">Visit the journal <ArrowUpRight /></Link></div>
          <div className="article-grid">{articles.map((article) => <article key={article.slug} className="article-card"><div className="article-card__art"><span>{article.category}</span></div><p className="article-card__meta">{article.date} <i /> {article.readTime}</p><h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3><p>{article.excerpt}</p><Link className="article-card__link" href={`/blog/${article.slug}`}>Read article <ArrowUpRight /></Link></article>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta__inner"><p className="eyebrow eyebrow--light"><span /> Your next chapter starts here</p><h2>Ready to make your<br /><em>experience count?</em></h2><Link className="button button--gold" href="/pricing">Choose your package <ArrowUpRight /></Link></div>
      </section>
    </>
  );
}
