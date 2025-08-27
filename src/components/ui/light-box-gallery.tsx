"use client"

import { Image as ImageType } from '@/types'
import React from 'react'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import Link from 'next/link'
import Image from 'next/image'

type LightBoxGalleryProps = {
    images: ImageType[]
}

function LightBoxGallery({ images }: LightBoxGalleryProps) {
  return (
    <LightGallery
      speed={500}
      plugins={[lgZoom, lgThumbnail]}
      elementClassNames="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {images.map((img) => (
        <Link key={img.src} href={img.src}>
          <figure className='relative w-full aspect-square'>
            <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
            />
          </figure>
        </Link>
      ))}
    </LightGallery>
  )
}

export default LightBoxGallery