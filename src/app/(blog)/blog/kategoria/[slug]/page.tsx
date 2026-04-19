import AllCategoryBlogs from '@/components/blogs/AllCategoryBlogs'
import EmptyMessage from '@/components/messages/EmptyMessage'
import ErrorMessage from '@/components/messages/ErrorMessage'
import Container from '@/components/ui/container'
import { getCategoryBySlug } from '@/sanity/category/getCategoryBySlug'
import React from 'react'

type Props = {
    params: Promise<{ slug: string }>
}

async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const { category, success, message } = await getCategoryBySlug(slug)

    if (!success) return (
        <section className='h-screen py-section-padding'>
            <ErrorMessage description={message} />
        </section>
    )

    if (!category) {
        return (
            <section className='h-screen py-section-padding'>
                <EmptyMessage title='Nie znaleziono kategorii' description="Wygląda na to że kategoria o takiej nazwie nie istnieje" />
            </section>
        )
    }

  return (
    <>
        <section className='pt-[calc(theme(padding.section-padding)*2)] pb-section-padding lg:py-[calc(theme(padding.section-padding)*2)]'>
            <Container>
                <h1 className='heading1'>Kategoria {category.title}</h1>
            </Container>
        </section>
        <section className='pb-section-padding'>
            <Container>
                <AllCategoryBlogs slug={slug} />
            </Container>
        </section>
    </>
  )
}

export default CategoryPage