import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { NAV_ITEMS } from '@/constants/navItems'
import Link from 'next/link'
import { PHONE2 } from '@/constants'

function NavMobile() {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button size={"icon"}>
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader className='hidden'>
                <SheetTitle>Mobilna nawigacja</SheetTitle>
            </SheetHeader>
            <ul>
                {NAV_ITEMS.map(item => (
                    <li key={item.label}>
                        {item.isLink ? (
                            <Button variant="link" className='text-foreground hover:text-foreground/70 text-lg' asChild>
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                            </Button>
                        ) : (
                            <ul>
                                {item.menu.map(menuItem => (
                                    <li key={menuItem.label}>
                                        <Button variant="link" className='text-foreground hover:text-foreground2 text-lg' asChild>
                                            <Link href={menuItem.href}>
                                                {menuItem.label}
                                            </Link>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            <Button asChild>
                <Link href={`tel:${PHONE2}`}>
                    Zadzwoń do nas
                </Link>
            </Button>
        </SheetContent>
    </Sheet>
  )
}

export default NavMobile