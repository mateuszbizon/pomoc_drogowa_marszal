import React from 'react'
import Container from '../ui/container'
import HeadingInfo from '../ui/heading-info'
import GoogleMap from '../ui/google-map'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { EMAIL, LOCATION, NIP, PHONE, PHONE2 } from '@/constants'

function Contact() {
  return (
    <section className='py-section-padding'>
        <Container>
            <HeadingInfo title='Kontakt' />
            <h2 className='heading2 text-center heading-margin-bottom'>Skontaktuj się z nami</h2>
            <div className='flex flex-col md:flex-row gap-5 lg:gap-10'>
                <div className='grow'>
                    <GoogleMap />
                </div>
                <div className='w-full md:w-[400px] h-fit flex flex-col gap-10 items-center text-center rounded-2xl p-5 bg-primary text-white'>
                    <div className='flex flex-col items-center gap-3'>
                        <Phone className='size-7' />
                        <Button variant={"link"} size={"link"} className='text-white hover:text-white/70 text-lg' asChild>
                            <Link href={`tel:${PHONE2}`}>
                                {PHONE2}
                            </Link>
                        </Button>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <Phone className='size-7' />
                        <Button variant={"link"} size={"link"} className='text-white hover:text-white/70 text-lg' asChild>
                            <Link href={`tel:${PHONE}`}>
                                {PHONE}
                            </Link>
                        </Button>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <Mail className='size-7' />
                        <Button variant={"link"} size={"link"} className='text-white hover:text-white/70 text-lg' asChild>
                            <Link href={`mailto:${EMAIL}`}>
                                {EMAIL}
                            </Link>
                        </Button>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <MapPin className='size-7' />
                        <span className='text-lg font-medium'>{LOCATION}</span>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <MapPin className='size-7' />
                        <span className='text-lg font-medium'>NIP: {NIP}</span>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Contact