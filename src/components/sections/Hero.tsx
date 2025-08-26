import React from 'react'
import Shadow from '../ui/shadow'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { PHONE2 } from '@/constants'

function Hero() {
  return (
    <header className='pb-section-padding pt-[calc(theme(height.company-info-height)+theme(height.nav-height)+10px)] lg:pt-section-padding bg-[url(/hero_bg_small.jpg)] md:bg-[url(/hero_bg_medium.jpg)] xl:bg-[url(/hero_bg_big.jpg)] bg-cover bg-center bg-no-repeat bg-fixed relative z-0 lg:h-screen text-white'>
        <Shadow />
        <Container>
            <div className='gap-y-8 h-full flex flex-col justify-center text-center'>
                <h1 className='heading1 lg:leading-18'><span className='text-secondary'>Serwis Mobilny</span> <br /><span className='text-red'>TIR</span> <br />Zgorzelec - Jędrzychowice</h1>
                <p className='bigger-text'>
                    Usługi naprawy samochodów ciężarowych i osobowych na terenie Polski oraz UE w trybie mobilnym i stacjonarnym. Auto laweta
                </p>
                <div className='flex gap-5 flex-wrap justify-center'>
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