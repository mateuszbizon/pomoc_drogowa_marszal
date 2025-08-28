import React from 'react'
import Container from '../ui/container'
import HeadingInfo from '../ui/heading-info'
import LightBoxGallery from '../ui/light-box-gallery'
import { ABOUT, CARS_IMG, CARS_IMG2, CARS_IMG3, CARS_IMG4, TIRE_IMG, TIRE_IMG2, TIRE_IMG4, TIRE_IMG5, TRUCK_IMG, TRUCK_IMG10, TRUCK_IMG2, TRUCK_IMG3, TRUCK_IMG4, TRUCK_IMG5, TRUCK_IMG6, TRUCK_IMG7, TRUCK_IMG8, TRUCK_IMG9 } from '@/constants/images'
import { Button } from '../ui/button'
import Link from 'next/link'
import { PHONE2 } from '@/constants'

const galleryImages = [ABOUT, TRUCK_IMG, TRUCK_IMG2, TRUCK_IMG3, TIRE_IMG, TIRE_IMG2, TRUCK_IMG4, TRUCK_IMG5, TRUCK_IMG6, CARS_IMG, CARS_IMG2, TIRE_IMG4, TIRE_IMG5, TRUCK_IMG7, CARS_IMG3, CARS_IMG4, TRUCK_IMG8, TRUCK_IMG9, TRUCK_IMG10]

function GalleryFull() {
  return (
    <section className='bg-white py-section-padding'>
        <Container>
            <HeadingInfo title='Galeria zdjęć' />
            <h2 className='heading2 text-center heading-margin-bottom'>Mobilny serwis TIR Zgorzelec w akcji</h2>
            <LightBoxGallery images={galleryImages} />
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