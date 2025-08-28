import Services from '@/components/sections/Services'
import SubPageHero from '@/components/sections/SubPageHero'
import { HERO_SUBTITLE } from '@/constants'
import React from 'react'

function ServicePage() {
  return (
    <>
        <SubPageHero title='Usługi' description={HERO_SUBTITLE} />
        <Services />
    </>
  )
}

export default ServicePage