import Reviews from '@/components/sections/Reviews'
import SubPageHero from '@/components/sections/SubPageHero'
import React from 'react'

function ReviewPage() {
  return (
    <>
        <SubPageHero title='Opinie' description='Przeczytaj, co mówią o nas nasi klienci.' />
        <Reviews />
    </>
  )
}

export default ReviewPage