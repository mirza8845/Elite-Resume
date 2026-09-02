export const siteConfig = {
  name: 'Elite Resume Craft',
  description:
    'Premium ATS-ready resumes, career branding, and thoughtful tools for your next professional chapter.',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'https://eliteresumecraft.co',
  email: 'hello@eliteresumecraft.co',
  whatsapp: '+92 300 000 0000'
} as const;

export const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Templates', href: '/templates' },
  { label: 'Our approach', href: '/about' },
  { label: 'Resources', href: '/blog' },
  { label: 'Pricing', href: '/pricing' }
] as const;
