import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { PHONE, PHONE2 } from '@/constants'

function CompanyInfo() {
  return (
    <div className='bg-secondary py-3 fixed w-full top-0 h-company-info-height z-40'>
        <Container>
            <div className='h-full flex items-center gap-5 lg:gap-8'>
                <Button size={"link"} variant={"link"} className='text-foreground hover:text-white text-lg lg:text-xl' asChild>
                    <Link href={`tel:${PHONE2}`}>
                        +48 {PHONE2}
                    </Link>
                </Button>
                <Button size={"link"} variant={"link"} className='text-foreground hover:text-white text-lg lg:text-xl' asChild>
                    <Link href={`tel:${PHONE}`}>
                        +48 {PHONE}
                    </Link>
                </Button>
            </div>
        </Container>
    </div>
  )
}

export default CompanyInfo