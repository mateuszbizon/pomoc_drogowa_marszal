"use client"

import React from 'react'
import Container from '../ui/container'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu'
import Link from 'next/link'
import { Button } from '../ui/button'
import { PHONE2 } from '@/constants'
import { NAV_ITEMS } from '@/constants/navItems'
import useScroll from '@/lib/hooks/useScroll'
import NavCard from '../cards/NavCard'
import Image from 'next/image'
import { LOGO } from '@/constants/images'
import NavMobile from './NavMobile'
import { Phone } from 'lucide-react'

function Nav() {
    const { isScrolled } = useScroll({ scrollAmount: 50 })

  return (
    <nav className={`h-nav-min-height lg:h-nav-height fixed top-company-info-height lg:top-0 w-full ${isScrolled ? "bg-foreground" : "bg-transparent"} z-40 transition duration-300 py-5`}>
        <Container>
            <div className='flex justify-between items-center h-full'>
                <div className='h-full flex gap-5'>
                    <Link href={"/"} title='Strona główna'>
                        <figure className='relative w-50 h-10'>
                            <Image src={LOGO.src} alt={LOGO.alt} fill />
                        </figure>
                    </Link>
                    <Link href={`tel:${PHONE2}`} className='text-white hidden lg:flex flex-col items-center'>
                        <span className='uppercase little-bigger-text font-semibold'>zadzwoń do nas</span>
                        <div className='flex items-center gap-4'>
                            <Phone className='size-7' />
                            <span className='heading3'>{PHONE2}</span>
                        </div>
                    </Link>
                </div>
                <div className='hidden lg:flex'>
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className='flex gap-0'>
                            {NAV_ITEMS.map(item => (
                                <NavigationMenuItem key={item.label}>
                                    <NavCard item={item} />
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    {/* <Button className='ml-2' asChild>
                        <Link href={`tel:${PHONE2}`}>
                            Zadzwoń do nas
                        </Link>
                    </Button> */}
                </div>
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Nav