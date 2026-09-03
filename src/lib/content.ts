export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  accent: 'gold' | 'sky' | 'rose' | 'mint';
};

export type Template = {
  slug: string;
  name: string;
  category: string;
  description: string;
  style: 'classic' | 'editorial' | 'modern';
  features: string[];
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export const services: Service[] = [
  {
    slug: 'ats-resume',
    eyebrow: '01 / Career document',
    title: 'ATS Resume',
    shortTitle: 'ATS Resume',
    description:
      'A strategically written, easy-to-read resume that turns your experience into evidence employers can quickly understand.',
    deliverables: ['ATS-ready resume', 'Editable Word version', 'Polished PDF version', 'Target-role keyword strategy'],
    idealFor: 'Professionals ready to apply with more clarity and confidence.',
    accent: 'gold'
  },
  {
    slug: 'cover-letter',
    eyebrow: '02 / Application support',
    title: 'Cover Letter',
    shortTitle: 'Cover Letter',
    description:
      'A tailored, credible introduction that connects your experience with the role and gives your application a stronger opening.',
    deliverables: ['Targeted cover letter', 'Editable Word version', 'Polished PDF version', 'Job-description alignment'],
    idealFor: 'Applicants who want each submission to feel deliberate—not generic.',
    accent: 'sky'
  },
  {
    slug: 'linkedin-optimization',
    eyebrow: '03 / Digital presence',
    title: 'LinkedIn Optimization',
    shortTitle: 'LinkedIn Profile',
    description:
      'A recruiter-ready LinkedIn presence with positioning, language, and keywords that make your next step easier to discover.',
    deliverables: ['Headline options', 'About section', 'Experience refresh', 'Skill recommendations'],
    idealFor: 'Professionals building visibility for their next opportunity.',
    accent: 'rose'
  },
  {
    slug: 'career-branding',
    eyebrow: '04 / Full positioning',
    title: 'Career Branding Suite',
    shortTitle: 'Career Branding',
    description:
      'A joined-up career story across your resume, cover letter, and LinkedIn profile—built around the work you want next.',
    deliverables: ['ATS-ready resume', 'Custom cover letter', 'LinkedIn optimization', 'Interview preparation notes'],
    idealFor: 'Career changers, ambitious professionals, and leadership-track applicants.',
    accent: 'mint'
  }
];

export const templates: Template[] = [
  {
    slug: 'the-astor',
    name: 'The Astor',
    category: 'Leadership',
    description: 'A composed, high-contrast layout for experienced professionals with a story to tell.',
    style: 'classic',
    features: ['One-column reading flow', 'Executive summary focus', 'ATS-friendly hierarchy']
  },
  {
    slug: 'the-marlow',
    name: 'The Marlow',
    category: 'Professional',
    description: 'A refined editorial balance of detail and breathing room for modern career transitions.',
    style: 'editorial',
    features: ['Skill sidebar', 'Clear chronology', 'Elegant but parsable']
  },
  {
    slug: 'the-arden',
    name: 'The Arden',
    category: 'Early career',
    description: 'A focused, confident format that helps graduates make potential feel tangible.',
    style: 'modern',
    features: ['Project-forward layout', 'Education emphasis', 'Simple section rhythm']
  }
];

export const articles: Article[] = [
  {
    slug: 'how-to-turn-responsibilities-into-achievements',
    category: 'Resume strategy',
    title: 'How to turn responsibilities into achievements employers remember',
    excerpt: 'The practical shift that makes your experience feel specific, valuable, and believable.',
    date: 'June 12, 2026',
    readTime: '6 min read'
  },
  {
    slug: 'what-ats-friendly-actually-means',
    category: 'ATS guide',
    title: 'What “ATS-friendly” actually means—and what it does not',
    excerpt: 'A clear guide to formatting, keywords, and the human reader behind the software.',
    date: 'May 28, 2026',
    readTime: '5 min read'
  },
  {
    slug: 'your-linkedin-headline-is-not-a-job-title',
    category: 'LinkedIn',
    title: 'Your LinkedIn headline is more than a job title',
    excerpt: 'Use the space to make your expertise, direction, and value visible in one line.',
    date: 'May 10, 2026',
    readTime: '4 min read'
  }
];

export const faqs = [
  {
    question: 'Will my resume work with applicant tracking systems?',
    answer:
      'Yes. Every template and content decision is designed around clear parsing, logical headings, readable structure, and natural keyword alignment.'
  },
  {
    question: 'Do you write for career changers and new graduates?',
    answer:
      'Absolutely. We focus on transferable evidence, relevant projects, education, and the direction you want to move toward.'
  },
  {
    question: 'What files will I receive?',
    answer:
      'Eligible resume and cover-letter packages include an editable DOCX and a polished PDF. Your customer portal will keep versions together.'
  },
  {
    question: 'How does AI fit into the process?',
    answer:
      'AI helps organize and tailor draft content. Quality rules and human-quality standards guide what is delivered; unsupported claims are never added.'
  },
  {
    question: 'Can I request changes?',
    answer:
      'Packages with revisions include a private revision request area so that feedback, supporting files, and document versions stay in one place.'
  }
];
