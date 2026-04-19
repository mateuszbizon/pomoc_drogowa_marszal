import { GET_ALL_BLOGS_QUERY_RESULT } from '@/sanity/types'
import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import { urlFor } from '@/sanity/lib/image'
import { ExternalLink } from 'lucide-react'

type BlogCardProps = {
    blog: GET_ALL_BLOGS_QUERY_RESULT[0]
}

function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug?.current}`} target='_blank' title={`Blog: ${blog.title}`}>
        <div className='bg-background rounded-2xl space-y-5 border-2 hover:border-black transition duration-300'>
            {blog.mainImage && (
                <div className='p-1'>
                    <figure className='relative w-full aspect-video rounded-xl overflow-hidden'>
                        <Image src={urlFor(blog.mainImage).url()} alt={blog.mainImage.alt || ""} fill className='object-cover' />
                    </figure>
                </div>
            )}
            <div className='p-5 pt-0 space-y-5'>
                <p className='font-medium text-lg line-clamp-2'>{blog.title}</p>
                <p className='flex gap-2 items-center'>Zobacz bloga <ExternalLink className='size-5' /></p>
            </div>
        </div>
    </Link>
  )
}

export default BlogCard