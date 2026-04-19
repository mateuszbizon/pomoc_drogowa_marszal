import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/sanity/posts/getAllPosts'
import { NAV_ITEMS, SERVICE_ITEMS } from '@/constants/navItems'

const baseUrl = 'https://serwismobilnytirzgorzelec.pl'

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    const { posts } = await getAllPosts()

    const postLinks = posts.map(post => ({
        url: `${baseUrl}/${post.slug?.current}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
        priority: 0.8,
    }))

    const navLinks = NAV_ITEMS.map(item => {
        if (item.isLink) {
            return {
                url: item.isLink ? `${baseUrl}${item.href}` : "",
                lastModified: new Date(),
                changeFrequency: 'yearly',
                priority: 0.8,
            }
        }

        return
    })

    const serviceLinks = SERVICE_ITEMS.map(item => ({
        url: `${baseUrl}${item.href}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
    }))

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...navLinks.filter((link): link is NonNullable<typeof link> => link !== undefined),
    ...serviceLinks,
    ...postLinks,
  ]
}