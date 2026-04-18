import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/sanity/posts/getAllPosts'
import { NAV_ITEMS } from '@/constants/navItems'

const baseUrl = 'https://serwismobilnytirzgorzelec.pl/'

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    const { posts } = await getAllPosts()

    const postLinks = posts.map(post => ({
        url: `${baseUrl}/${post.slug?.current}`,
        lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
        priority: 0.8,
    }))

    const navLinks = NAV_ITEMS.map(item => ({
        url: item.isLink ? `${baseUrl}${item.href}` : "",
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
    {
      url: `${baseUrl}o-nas`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}uslugi`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}faq`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}opinie`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}galeria`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}kontakt`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}uslugi/mobilny-serwis-tir`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}uslugi/pomoc-drogowa-zgorzelec`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}uslugi/naprawa-kol-zgorzelec`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}uslugi/auto-laweta-zgorzelec`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}uslugi/serwis-klimatyzacji-zgorzelec`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}uslugi/pomoc-drogowa-a4`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...postLinks
  ]
}