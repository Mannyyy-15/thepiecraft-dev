import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Protect private routes from crawlers
    },
    sitemap: 'https://thepiecraft.com/sitemap.xml',
  }
}
