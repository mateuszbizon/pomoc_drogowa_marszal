import AllBlogs from '@/components/blogs/AllBlogs'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 60; // Odświeżaj stronę co 60 sekund

function BlogPage() {
  return (
    <>
        <section className='pt-[calc(theme(padding.section-padding)*2)] pb-section-padding lg:py-[calc(theme(padding.section-padding)*2)]'>
            <Container>
                <h1 className='heading1'>Wszystkie posty na blogu</h1>
            </Container>
        </section>
        <section className='pb-section-padding'>
            <Container>
                <AllBlogs />
            </Container>
        </section>
    </>
  )
}

export default BlogPage