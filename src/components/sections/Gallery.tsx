import React from 'react'
import Container from '../ui/container'
import HeadingInfo from '../ui/heading-info'
import LightBoxGallery from '../ui/light-box-gallery'
import { ABOUT, TIRE_IMG, TIRE_IMG2, TRUCK_IMG, TRUCK_IMG2, TRUCK_IMG3 } from '@/constants/images'
import { Button } from '../ui/button'
import Link from 'next/link'

const galleryImages = [ABOUT, TRUCK_IMG, TRUCK_IMG2, TRUCK_IMG3, TIRE_IMG, TIRE_IMG2]

function Gallery() {
  return (
    <section className='bg-white py-section-padding'>
        <Container>
            <HeadingInfo title='Galeria zdjęć' />
            <h2 className='heading2 text-center heading-margin-bottom'>Zdjęcia z pomocy drogowej</h2>
            <LightBoxGallery images={galleryImages} />
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