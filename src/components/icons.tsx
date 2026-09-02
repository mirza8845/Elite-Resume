import type { SVGProps } from 'react';

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" {...props}>
      <path d="M3 13 13 3M6 3h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" {...props}>
      <path d="m3 8.25 3.1 3.1L13.4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Spark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2.5 13.8 9l5.7 2.1-5.7 2.1L12 19.7l-1.8-6.5-5.7-2.1L10.2 9 12 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="m19.1 16 .6 2.2 1.9.7-1.9.7-.6 2.1-.6-2.1-1.9-.7 1.9-.7.6-2.2Z" fill="currentColor" />
    </svg>
  );
}

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
