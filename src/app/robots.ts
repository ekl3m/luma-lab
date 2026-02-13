import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*', // Rules for all robots
            allow: '/',     // Allow everything
        },
        sitemap: 'https://lumalab.pl/sitemap.xml',
    }
}