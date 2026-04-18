import { getPostsByCategorySlug } from '@/sanity/posts/getPostsByCategorySlug'
import React from 'react'
import BlogCard from '../cards/BlogCard'
import ErrorMessage from '../messages/ErrorMessage'

type Props = {
    slug: string
}

async function AllCategoryBlogs({ slug }: Props) {
    const { posts, message, success } = await getPostsByCategorySlug(slug)

    if (!success) return <ErrorMessage description={message} />

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
        {posts.map(item => (
            <BlogCard key={item._id} blog={item} />
        ))}
    </div>
  )
}

export default AllCategoryBlogs