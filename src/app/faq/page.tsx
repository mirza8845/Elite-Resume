import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { faqs } from '@/lib/content';

export const metadata: Metadata = { title: 'Frequently asked questions', description: 'Answers about ATS resumes, delivery, AI assistance, templates, revisions, and privacy.' };

const extendedFaqs = [...faqs, { question: 'When will I receive my documents?', answer: 'Timelines and delivery expectations will be shown during checkout. Your portal will always show the current order and generation status.' }, { question: 'Is my career information private?', answer: 'Yes. Customer projects and files are stored privately and access-controlled. The live platform will use temporary, authorized download links rather than public files.' }, { question: 'Can I use my own existing CV?', answer: 'Yes. Upload your current PDF, DOCX, or TXT document during the guided intake process, alongside any details you would like improved.' }];

export default function FaqPage() { return <><PageHero eyebrow="Frequently asked questions" title={<>A little more <em>clarity</em> before you begin.</>} description="Everything you need to know about documents, templates, delivery, privacy, and the process." />
  <section className="section"><div className="shell full-faq-list">{extendedFaqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, '0')}</span>{faq.question}<b>+</b></summary><p>{faq.answer}</p></details>)}</div></section>
  </>; }
