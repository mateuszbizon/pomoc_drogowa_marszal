import Contact from '@/components/sections/Contact'
import SubPageHero from '@/components/sections/SubPageHero'
import React from 'react'

function ContactPage() {
  return (
    <>
        <SubPageHero title='Kontakt' description="Skontaktuj się z nami, aby uzyskać więcej informacji." />
        <Contact />
    </>
  )
}

export default ContactPage