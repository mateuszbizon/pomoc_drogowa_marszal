import Questions from '@/components/sections/Questions'
import SubPageHero from '@/components/sections/SubPageHero'
import React from 'react'

function FaqPage() {
  return (
    <>
        <SubPageHero title='Najczęściej zadawane pytania' description="Odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług." />
        <Questions />
    </>
  )
}

export default FaqPage