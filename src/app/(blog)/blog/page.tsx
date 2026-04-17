import AllBlogs from '@/components/blogs/AllBlogs'
import Container from '@/components/ui/container'
import React from 'react'

function BlogPage() {
  return (
    <>
        <section className='py-section-padding lg:py-[calc(theme(padding.section-padding)*2)]'>
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