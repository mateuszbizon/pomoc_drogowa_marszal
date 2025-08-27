import React from 'react'
import Container from '../ui/container'
import Link from 'next/link'
import { Button } from '../ui/button'
import { EMAIL, HERO_SUBTITLE, LOCATION, NIP, PHONE, PHONE2 } from '@/constants'
import { Mail, MapPin, Phone } from 'lucide-react'
import { NAV_ITEMS, SERVICE_ITEMS } from '@/constants/navItems'
import Image from 'next/image'
import { LOGO } from '@/constants/images'

function Footer() {
  return (
    <footer className='pt-section-padding pb-10 bg-primary text-white'>
        <Container>
            <div className='grid md:grid-cols-[repeat(auto-fit,_280px)] gap-10 md:gap-20'>
                <div className='space-y-4 text-center md:text-left'>
                    <figure className='relative w-60 h-15'>
                        <Image src={LOGO.src} alt={LOGO.alt} fill />
                    </figure>
                    <p className='md:text-lg'>
                        <em>
                            {HERO_SUBTITLE}
                        </em>
                    </p>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Nawigacja</p>
                    <nav>
                        <ul className='space-y-2'>
                            {NAV_ITEMS.map(item => {
                                if (!item.isLink) return null

                                return (
                                    <li key={item.label}>
                                        <Button className='text-white hover:text-white/50' size={"link"} variant={"link"} asChild>
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </Button>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Usługi</p>
                    <nav>
                        <ul className='space-y-2'>
                            {SERVICE_ITEMS.map(item => (
                                <li key={item.label}>
                                    <Button className='text-white hover:text-white/70' size={"link"} variant={"link"} asChild>
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Dane kontaktowe</p>
                    <div className='space-y-5'>
                        <div>
                            <Button variant={"link"} size={"link"} className='text-white hover:text-white/70 text-xl' asChild>
                                <Link href={`tel:${PHONE2}`}>
                                    <Phone /> {PHONE2}
                                </Link>
                            </Button>
                        </div>
                        <div>
                            <Button variant={"link"} size={"link"} className='text-white hover:text-white/70 text-xl' asChild>
                                <Link href={`tel:${PHONE}`}>
                                    <Phone /> {PHONE}
                                </Link>
                            </Button>
                        </div>
                        <div>
                            <Button variant={"link"} size={"link"} className='text-white hover:text-white/70' asChild>
                                <Link href={`mailto:${EMAIL}`}>
                                    <Mail /> {EMAIL}
                                </Link>
                            </Button>
                        </div>
                        <div>
                            <p className='flex gap-2 justify-center md:justify-start'><MapPin /> {LOCATION}</p>
                        </div>
                        <div>
                            <p className='flex gap-2 justify-center md:justify-start'><MapPin /> NIP: {NIP}</p>
                        </div>
                        {/* <div className='flex justify-center lg:justify-start items-center gap-3 text-foreground'>
                            <Button size={"icon"} asChild>
                                <Link href={INSTA} target='_blank' title='Instagram'>
                                    <Instagram />
                                    <span className='sr-only'>Instagram</span>
                                </Link>
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='mt-section-padding flex justify-between items-center'>
                <p>
                    {new Date().getFullYear()} | <span className='font-semibold'>Pomoc Drogowa Zgorzelec</span>
                </p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer