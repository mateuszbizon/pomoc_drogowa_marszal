"use client"

import React from 'react'
import Shadow from '../ui/shadow'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { HERO_SUBTITLE, PHONE2 } from '@/constants'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"

function Hero() {
    useGSAP(() => {
        gsap.fromTo(".heading1-text", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.5,
            stagger: 0.3,
            ease: "power2.out"
        })
        gsap.fromTo(".subtitle", {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.3,
            ease: "power2.out",
            delay: 0.5
        })
    }, [])

  return (
    <header className='pb-section-padding pt-[calc(theme(height.company-info-height)+theme(height.nav-height)+10px)] lg:pt-section-padding bg-[url(/hero_bg_small.jpg)] md:bg-[url(/hero_bg_medium.jpg)] xl:bg-[url(/hero_bg_big.jpg)] bg-cover bg-center bg-no-repeat bg-fixed relative z-0 lg:h-screen text-white'>
        <Shadow />
        <Container>
            <div className='gap-y-8 h-full flex flex-col justify-center text-center'>
                <h1 className='heading1 lg:leading-18'><span className='heading1-text text-secondary'>Mobilny Serwis</span> <br /><span className='heading1-text text-red'>TIR</span> <br /><span className='heading1-text '>Zgorzelec - Jędrzychowice</span></h1>
                <p className='subtitle bigger-text'>
                    {HERO_SUBTITLE}
                </p>
                <div className='subtitle flex gap-5 flex-wrap justify-center'>
                    <Button size={"lg"} className='text-lg' asChild>
                        <Link href={`tel:${PHONE2}`}>
                            Zadzwoń do nas
                        </Link>
                    </Button>
                    <Button size={"lg"} variant={"secondary"} className='text-lg' asChild>
                        <Link href={"/o-nas"}>
                            Poznaj nas
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Hero