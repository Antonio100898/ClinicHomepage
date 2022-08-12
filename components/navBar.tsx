import { NavBarProps } from '@/lib/interface'
import Link from 'next/link'
import { useState } from 'react'
import Languages from './languages'
import MobileMenu from './mobileMenu'
import NavLinks from './navLinks'

export default function NavBar({ appLinks, languageNames }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  return (
    <div className="flex items-center sm:justify-between sm:mx-0 mx-60 py-3 px-3 bg-light rounded-lg ">
      <div className={`${!mobileMenuOpen ? 'visible' : 'hidden'}`}>
        <Logo />
      </div>
      <div className="lg:hidden md:hidden w-11/12 flex justify-between items-center">
        <MobileMenu
          appLinks={appLinks}
          languageNames={languageNames}
          open={mobileMenuOpen}
        />
      </div>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="pt-2 md:hidden lg:hidden"
      >
        <img src="hamburger.svg" />
      </button>
      <div className="flex justify-between items-center w-full sm:hidden">
        <NavLinks navLinks={appLinks} />
        <Languages languageNames={languageNames} />
      </div>
    </div>
  )
}

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <img src="logo.svg" />
      </a>
    </Link>
  )
}
