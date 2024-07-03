'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/assets/images/logo-text.svg'
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const Sidebar = () => {
  const user = useUser()
  const pathname = usePathname();
  return (
    <aside className='sidebar py-5 h-full'>
      <div className="flex size-full flex-col gap-4">
        <Link href={'/'} className='sidebar-logo'>
          <Image src={logo} width={180} height={28} alt={'logo'} />
        </Link>

        <nav className='sidebar-nav '>
          <SignedIn>
            <ul className="sidebar-nav_elements  ">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group cursor-pointer
             ${isActive ? 'bg-purple-gradient text-white' : `text-gray-700`} `}>
                    <Link className='sidebar-link' href={link.route}>
                      <Image
                        alt='logp'
                        src={link.icon}
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="w-full h-[1px] bg-gray-400"></div>
            <ul className='sidebar-nav_elements  '>
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li key={link.route} className={`sidebar-nav_element group cursor-pointer
             ${isActive ? 'bg-purple-gradient text-white' : `text-gray-700`} `}>
                    <Link className='sidebar-link' href={link.route}>
                      <Image
                        alt='logp'
                        src={link.icon}
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className=' flex-center flex-col hover:bg-purple-gradient w-[100%] cursor-pointer gap-2  trans py-2 px-3 rounded-xl '>
                <h3>Welcome , </h3>
                <UserButton afterSignOutUrl='/' showName={true} />
              </li>
            </ul>

          </SignedIn>

          <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href={'/sign-in'}>Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar