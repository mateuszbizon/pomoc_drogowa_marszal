import React from 'react'
import LightBoxGallery from '../ui/light-box-gallery'
import { urlFor } from '@/sanity/lib/image'
import ErrorMessage from '../messages/ErrorMessage'
import { getRecentImages } from '@/sanity/images/getRecentImages'

async function RecentGalleryImages() {
  const { images, success, message } = await getRecentImages()

    if (!success) return <ErrorMessage description={message} />

    const finalImages = images.map(image => ({
        src: urlFor(image.mainImage!).url(),
        alt: image.mainImage?.alt || "Zdjęcie z galerii"
    }))

  return (
    <LightBoxGallery images={finalImages} />
  )
}

export default RecentGalleryImages