import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__rings" aria-hidden="true" />
      <div className="shell page-hero__inner">
        <p className="eyebrow eyebrow--light"><span /> {eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}
