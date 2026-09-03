import type { MetadataRoute } from 'next';
import { articles, services, templates } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/services', '/pricing', '/templates', '/portfolio', '/faq', '/contact', '/blog', '/privacy', '/terms', '/refunds', '/cookies'];
  return [...staticRoutes.map(route => ({ url: `${siteConfig.url}${route}`, lastModified: new Date(), changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const, priority: route === '' ? 1 : .7 })), ...services.map(item => ({ url: `${siteConfig.url}/services/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .8 })), ...templates.map(item => ({ url: `${siteConfig.url}/templates/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .7 })), ...articles.map(item => ({ url: `${siteConfig.url}/blog/${item.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .6 }))];
}
