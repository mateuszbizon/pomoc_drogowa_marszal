import EmptyMessage from '@/components/messages/EmptyMessage'
import ErrorMessage from '@/components/messages/ErrorMessage'
import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import Shadow from '@/components/ui/shadow'
import { urlFor } from '@/sanity/lib/image'
import { getPostBySlug } from '@/sanity/posts/getPostBySlug'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    params: Promise<{ slug: string }>
}

async function SingleBlogPage({ params }: Props) {
    const slug = (await params).slug
    const { post, success, message } = await getPostBySlug(slug)

    if (!post) return (
        <section className='h-screen py-section-padding'>
            <EmptyMessage title='Nie znaleziono bloga' description="Wygląda na to że blog o takim tytule nie istnieje" />
        </section>
    )

    if (!success) return (
        <section className='h-screen py-section-padding'>
            <ErrorMessage description={message} />
        </section>
    )

  return (
    <>
        <section className='py-[calc(theme(padding.section-padding)*2)] lg:py-[calc(theme(padding.section-padding)*2+theme(padding.section-padding))] bg-[url(/hero_bg_small.jpg)] md:bg-[url(/hero_bg_medium.jpg)] xl:bg-[url(/hero_bg_big.jpg)] bg-cover bg-bottom bg-no-repeat bg-fixed relative z-0 text-white'>
            <Shadow />
            <Container>
                <h1 className='heading1 text-center'>{post.title}</h1>
            </Container>
        </section>
        <section className='py-section-padding'>
            <Container className='max-w-250 space-y-10'>
                <div className='grid lg:grid-cols-2 gap-x-5 gap-y-10'>
                    <div className='space-y-5'>
                        <p className='little-bigger-text font-medium text-center lg:text-left'>Kategorie</p>
                        <div className='flex flex-wrap gap-5'>
                            {post.categories?.map(item => (
                                <Button variant={"link"} size={"link"} className='text-foreground hover:text-primary' key={item._id} asChild>
                                    <Link href={`/blog/kategoria/${item.slug?.current}`}>
                                        {item.title}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <p className='little-bigger-text font-medium text-center lg:text-right'>Opublikowano</p>
                        <p className='text-center lg:text-right'>
                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
                        </p>
                    </div>
                </div>

                <div>
                    {post.mainImage && (
                        <figure className='w-full aspect-square relative'>
                            <Image src={urlFor(post.mainImage).url()} alt={post.mainImage.alt || ""} fill className='rounded-2xl' />
                        </figure>
                    )}
                </div>

                <div className='prose prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:xl:text-4xl prose-h2:font-bold max-w-max'>
                    {Array.isArray(post.body) && <PortableText value={post.body} />}
                </div>
            </Container>
        </section>
    </>
  )
}

export default SingleBlogPage