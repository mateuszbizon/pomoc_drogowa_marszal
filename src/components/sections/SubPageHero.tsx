"use client"

import React from 'react'
import Container from '../ui/container'
import Shadow from '../ui/shadow'
import { Button } from '../ui/button'
import Link from 'next/link'
import { PHONE2 } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

type SubPageHeroProps = {
    title?: string
    description?: string
}

function SubPageHero({ title = "O nas", description = "Poznaj nas bliżej i sprawdź co możemy dla Ciebie zrobić i co nas wyróżnia." }: SubPageHeroProps) {
    useGSAP(() => {
        gsap.fromTo(".text", {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.3,
            ease: "power2.out"
        })
    }, [])

  return (
    <header className='relative pb-section-padding pt-[calc(theme(height.company-info-height)+theme(height.nav-height)+10px)] lg:pt-section-padding bg-[url(/hero_bg_small.jpg)] md:bg-[url(/hero_bg_medium.jpg)] xl:bg-[url(/hero_bg_big.jpg)] bg-cover bg-center bg-no-repeat bg-fixed lg:h-screen text-white z-0'>
        <Shadow />
        <Container>
            <div className='gap-8 h-full flex flex-col justify-center text-center'>
                <h1 className='text heading1 lg:leading-18'>
                    {title}
                </h1>
                <p className='text bigger-text'>
                    {description}
                </p>
                <div className='text flex gap-5 flex-wrap justify-center'>
                    <Button size={"lg"} className='text-lg' asChild>
                        <Link href={`tel:${PHONE2}`}>
                            Zadzwoń do nas
                        </Link>
                    </Button>
                    <Button size={"lg"} variant={"secondary"} className='text-lg' asChild>
                        <Link href={`/uslugi`}>
                            Poznaj ofertę
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default SubPageHero