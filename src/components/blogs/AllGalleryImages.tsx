import { getAllImages } from '@/sanity/images/getAllImages'
import React from 'react'
import ErrorMessage from '../messages/ErrorMessage'
import LightBoxGallery from '../ui/light-box-gallery'
import { urlFor } from '@/sanity/lib/image'

async function AllGalleryImages() {
    const { images, success, message } = await getAllImages()

    if (!success) return <ErrorMessage description={message} />

    const finalImages = images.map(image => ({
        src: urlFor(image.mainImage!).url(),
        alt: image.mainImage?.alt || "Zdjęcie z galerii"
    }))

  return (
    <LightBoxGallery images={finalImages} />
  )
}

export default AllGalleryImages