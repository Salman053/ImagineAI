'use client'
import React from 'react'
import logo from '../../public/assets/images/logo-text.svg'
import menu from '../../public/assets/icons/menu.svg'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <header className='header'>
      <Link href={'/'} className='flex items-center gap-2 md:py-2'>
        <Image src={logo}
          height={28}
          width={180}
          alt={''} />

      </Link>
      <nav className='flex gap-2 '>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
          <Sheet >
            <SheetTrigger>
              <Image
                width={32}
                height={32}
                alt='menu'
                className='hover:scale-105 trans hover:rotate-1 cursor-pointer'
                src={menu}
              />
            </SheetTrigger>
            <SheetContent className='sheet-content'>
              <>
                <Image
                  src={logo}
                  alt='logo'
                  width={152}
                  height={23}
                />
                <ul className="header-nav_elements  ">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname

                    return (
                      <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}>
                        <Link className='sidebar-link cursor-pointer' href={link.route}>
                          <Image
                            alt='logp'
                            src={link.icon}
                            width={24}
                            height={24}

                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button className='button bg-purple-gradient bg-cover'>
            <Link href={'/sign-in'}>Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav