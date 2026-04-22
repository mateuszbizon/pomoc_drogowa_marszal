import React, { Suspense } from 'react'
import Container from '../ui/container'
import HeadingInfo from '../ui/heading-info'
import { Button } from '../ui/button'
import Link from 'next/link'
import RecentGalleryImages from '../blogs/RecentGalleryImages'

function Gallery() {
  return (
    <section className='bg-white py-section-padding'>
        <Container>
            <HeadingInfo title='Galeria zdjęć' />
            <h2 className='heading2 text-center heading-margin-bottom'>Mobilny serwis TIR Zgorzelec w akcji</h2>
            <Suspense>
                <RecentGalleryImages />
            </Suspense>
            <div className='flex justify-center'>
                <Button size={"lg"} className='mt-10' asChild>
                    <Link href={"/galeria"}>
                        Zobacz wszystkie zdjęcia
                    </Link>
                </Button>
            </div>
        </Container>
    </section>
  )
}

export default Gallery