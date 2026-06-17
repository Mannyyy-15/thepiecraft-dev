import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Protect private routes from crawlers
    },
    sitemap: 'https://dev.thepiecraftmarketing.com/sitemap.xml',
  }
}
