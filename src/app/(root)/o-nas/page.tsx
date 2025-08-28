import About from '@/components/sections/About'
import Gallery from '@/components/sections/Gallery'
import SubPageHero from '@/components/sections/SubPageHero'
import React from 'react'

function AboutPage() {
  return (
    <>
        <SubPageHero />
        <About />
        <Gallery />
    </>
  )
}

export default AboutPage