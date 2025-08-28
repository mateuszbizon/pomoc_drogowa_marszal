import React from 'react'
import Container from '../ui/container'
import Shadow from '../ui/shadow'
import { Button } from '../ui/button'
import Link from 'next/link'
import { PHONE2 } from '@/constants'

type SubPageHeroProps = {
    title?: string
    description?: string
}

function SubPageHero({ title = "O nas - Mobilny Serwis TIR Zgorzelec", description = "Poznaj nas bliżej i sprawdź co możemy dla Ciebie zrobić i co nas wyróżnia." }: SubPageHeroProps) {
  return (
    <header className='relative pb-section-padding pt-[calc(theme(height.company-info-height)+theme(height.nav-height)+10px)] lg:pt-section-padding bg-[url(/hero_bg_small.jpg)] md:bg-[url(/hero_bg_medium.jpg)] xl:bg-[url(/hero_bg_big.jpg)] bg-cover bg-center bg-no-repeat bg-fixed lg:h-screen text-white z-0'>
        <Shadow />
        <Container>
            <div className='gap-8 h-full flex flex-col justify-center text-center'>
                <h1 className='heading1 lg:leading-18'>{title}</h1>
                <p className='bigger-text'>
                    {description}
                </p>
                <div className='flex gap-5 flex-wrap justify-center'>
                    <Button size={"lg"} className='text-lg' asChild>
                        <Link href={`tel:${PHONE2}`}>
                            Zadzwoń do nas
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default SubPageHero