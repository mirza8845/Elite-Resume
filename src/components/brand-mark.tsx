import Link from 'next/link';

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand-mark${inverse ? ' brand-mark--inverse' : ''}`} aria-label="Elite Resume Craft home">
      <span className="brand-mark__monogram" aria-hidden="true">ER</span>
      <span className="brand-mark__copy">
        <span>Elite</span>
        <span>Resume Craft</span>
      </span>
    </Link>
  );
}
