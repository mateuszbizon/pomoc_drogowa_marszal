import GalleryFull from '@/components/sections/GalleryFull'
import SubPageHero from '@/components/sections/SubPageHero'
import React from 'react'

function GalleryPage() {
  return (
    <>
        <SubPageHero title='Galeria' description="Zobacz nasze zdjęcia z akcji." />
        <GalleryFull />
    </>
  )
}

export default GalleryPage