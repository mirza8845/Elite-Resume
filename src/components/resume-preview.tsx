type ResumePreviewProps = {
  variant?: 'hero' | 'classic' | 'editorial' | 'modern';
  compact?: boolean;
};

export function ResumePreview({ variant = 'classic', compact = false }: ResumePreviewProps) {
  return (
    <div className={`resume-preview resume-preview--${variant}${compact ? ' resume-preview--compact' : ''}`} aria-label="Resume template preview">
      <div className="resume-preview__bar" />
      <p className="resume-preview__name">Avery<br />Morgan</p>
      <p className="resume-preview__role">Product &amp; Operations Leader</p>
      <div className="resume-preview__contact">London · avery@sample.com · linkedin.com/in/avery</div>
      <div className="resume-preview__line resume-preview__line--wide" />
      <div className="resume-preview__section">
        <p className="resume-preview__heading">Profile</p>
        <div className="resume-preview__line" /><div className="resume-preview__line" /><div className="resume-preview__line resume-preview__line--short" />
      </div>
      <div className="resume-preview__section">
        <p className="resume-preview__heading">Experience</p>
        <p className="resume-preview__job">Director of Operations <span>2021—Present</span></p>
        <div className="resume-preview__line" /><div className="resume-preview__line resume-preview__line--wide" /><div className="resume-preview__line resume-preview__line--short" />
        <p className="resume-preview__job resume-preview__job--second">Strategy Lead <span>2017—2021</span></p>
        <div className="resume-preview__line" /><div className="resume-preview__line resume-preview__line--mid" />
      </div>
      {!compact && <div className="resume-preview__section resume-preview__section--last"><p className="resume-preview__heading">Education &amp; Skills</p><div className="resume-preview__line" /><div className="resume-preview__line resume-preview__line--mid" /></div>}
    </div>
  );
}
