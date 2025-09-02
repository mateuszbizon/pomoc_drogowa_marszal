"use client"

import { NavItem } from '@/types'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import { NavigationMenuContent, NavigationMenuLink, NavigationMenuTrigger } from '../ui/navigation-menu'
import { usePathname } from 'next/navigation'

type NavCardProps = {
    item: NavItem
}

function NavCard({ item }: NavCardProps) {
    const currentPath = usePathname()
    const isActive = item.isLink && currentPath === item.href

  return (
    <>
        {item.isLink ? (
            <NavigationMenuLink  asChild>
                <Button className={`py-2 px-6 text-white ${isActive && "bg-primary"} hover:bg-primary xl:text-lg rounded-2xl`} variant={"link"} asChild>
                    <Link href={item.href}>
                        {item.label}
                    </Link>
                </Button>
            </NavigationMenuLink>
        ) : (
            <>
                <NavigationMenuTrigger className={`${buttonVariants({ variant: "link" })} py-0 text-foreground hover:text-foreground2 text-lg`}>
                    Menu
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className='space-y-1'>
                        {item.menu.map(menuItem =>  (
                            <li key={menuItem.label}>
                                <Button variant={"link"} className='text-foreground hover:text-foreground2 text-lg' asChild>
                                    <Link href={menuItem.href}>
                                        {menuItem.label}
                                    </Link>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </>
        )}
    </>
  )
}

export default NavCard