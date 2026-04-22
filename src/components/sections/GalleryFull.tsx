import React, { Suspense } from 'react'
import Container from '../ui/container'
import HeadingInfo from '../ui/heading-info'
import { Button } from '../ui/button'
import Link from 'next/link'
import { PHONE2 } from '@/constants'
import AllGalleryImages from '../blogs/AllGalleryImages'

export const revalidate = 60

function GalleryFull() {
  return (
    <section className='bg-white py-section-padding'>
        <Container>
            <HeadingInfo title='Galeria zdjęć' />
            <h2 className='heading2 text-center heading-margin-bottom'>Mobilny serwis TIR Zgorzelec w akcji</h2>
            <Suspense>
                <AllGalleryImages />
            </Suspense>
            <p className='mt-10 text-center bigger-text font-bold'>
                Potrzebujesz natychmiastowej pomocy? Skorzystaj z usług mobilnego serwisu TIR Zgorzelec — dzwoń teraz!
            </p>
            <div className='flex justify-center mt-5'>
                <Button size={"lg"} asChild>
                    <Link href={`tel:${PHONE2}`}>
                        Zadzwoń do nas
                    </Link>
                </Button>
            </div>
        </Container>
    </section>
  )
}

export default GalleryFull