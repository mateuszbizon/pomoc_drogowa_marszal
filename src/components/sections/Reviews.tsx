"use client"

import React from 'react'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { Button } from '../ui/button'
import Link from 'next/link'
import Container from '../ui/container'
import HeadingInfo from '../ui/heading-info'
import { REVIEWS_LIST } from '@/constants/reviews'
import ReviewCard from '../cards/ReviewCard'

function Reviews() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

  return (
    <section id='reviews' className='py-section-padding bg-white'>
        <Container>
            <HeadingInfo title='Opinie' />
            <h2 className='heading2 text-center heading-margin-bottom'>
                Opinie serwisu mobilnego
            </h2>
            <Carousel
                opts={{
                    loop: true
                }}
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className='lg:px-10 mb-10'
            >
                <CarouselContent>
                    {REVIEWS_LIST.map(item => (
                        <ReviewCard key={item.content} review={item} />
                    ))}
                </CarouselContent>
                <CarouselPrevious className='hidden lg:inline-flex' />
                <CarouselNext className='hidden lg:inline-flex' />
            </Carousel>
            <div className='flex justify-center'>
                <Button size={"lg"} asChild>
                    <Link href={"https://www.google.com/search?hl=pl&uds=ADvngMjcH0KdF7qGWtwTBrP0nt7dDc_5NA7qY2fZuHB3L7PyFd6QqQ0Sl8uPKAxwvDp-KvpXsp2p9PtGTFH_wS-Iui5btJPl3R3rGRO6_gDmveiw9G6TIvzGpu9AcYsFA2dO_58yyOmtfMdxso2TMMj3BQof6Ju8dCPdZHB85TfHZNOwx67lPEcSof_sIo5_z88NYSX46rqkfT8ioAKKPgTyEWMWFKDy-w&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7lg40JFLXLMgN8s_iLHICCD0dkw91qcwLq2nZccTpvHBorxtJ5jD0_zRJ2ZU2qOF0D_jonnuM1WmbTmnU2ttqP6QCfCvvkXRhhc5q5SFqp8a-N8U1AdxJpbv28U-P-IvtkPiCwWT5uriT0BTZ67sqtEt9HQIp5A3q9XQtS7-YlC0SrI5Wg%3D%3D&q=MARSZA%C5%81%20Pomoc%20Drogowa%20TIR%20Zgorzelec.%20Serwis%20Mobilny%20TIR.%20Holowanie.%20Auto%20Pomoc.%20Opinie&client=firefox-b-d&sa=X&ved=0CCYQ_4MLahcKEwi4gL_Xm72IAxUAAAAAHQAAAAAQBg&biw=1536&bih=711&dpr=1.25"} target='_blank'>
                        Wszystkie opinie
                    </Link>
                </Button>
            </div>
        </Container>
    </section>
  )
}

export default Reviews