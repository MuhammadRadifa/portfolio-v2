'use client'

import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiCloseFill } from 'react-icons/ri'
import { twMerge } from 'tailwind-merge'
import { logoLinks } from '@/utils/constant/LogoLinks'

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Education', href: '/education' },
    { name: 'Project', href: '/project' },
    { name: 'Resume', href: '/cv.pdf' },
    { name: 'Contact', href: '/contact' },
  ]

  const [navBg, setNavBg] = useState(false)

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg)
    return () => {
      window.removeEventListener('scroll', changeNavBg)
    }
  }, [])

  return (
    <nav
      className={twMerge(
        `sticky top-0 z-10 flex items-center justify-end px-5 py-3 text-[#616D8A] md:px-10 md:py-5`,
        navBg ? 'md:bg-white md:shadow-lg' : 'bg-transparent',
      )}
    >
      <ul className="hidden gap-6 text-lg md:flex">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="group relative cursor-pointer font-semibold"
          >
            <span className="absolute bottom-0 h-1 w-0 rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="flex md:hidden">
        <button
          onClick={() => {
            setIsActive(!isActive)
          }}
          className="rounded-full border-2 bg-gray-100 p-1"
        >
          <IconContext.Provider
            value={{ className: 'text-4xl text-black-primary p-2' }}
          >
            {isActive ? <RiCloseFill /> : <RxHamburgerMenu />}
          </IconContext.Provider>
        </button>
      </div>
      <div
        className={twMerge(
          'fixed top-12 flex h-full w-full justify-center overflow-x-hidden rounded transition-all duration-300 ease-in-out md:hidden',
          isActive ? 'right-0' : '-right-full',
        )}
      >
        <ul className="m-5 flex h-fit w-full flex-col items-center gap-8 rounded-xl bg-gray-100 px-3 py-6 text-lg font-light">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="group relative w-fit cursor-pointer font-semibold text-[#616D8A]"
            >
              <span className="absolute bottom-0 h-1 w-0 rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <div className="">
            <ul className="flex gap-4">
              {logoLinks.slice(0, 5).map((link, index) => {
                const Icon = link.icon
                return (
                  <li key={index}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <IconContext.Provider
                        value={{ className: 'text-2xl text-black-primary' }}
                      >
                        <Icon />
                      </IconContext.Provider>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  )
}
