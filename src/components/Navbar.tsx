'use client'

import { useState } from 'react'
import { IconContext } from 'react-icons'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiCloseFill } from 'react-icons/ri'
import { twMerge } from 'tailwind-merge'
import { logoLinks } from '@/utils/constant/LogoLinks'

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)

  const navLinks = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Education' },
    { name: 'Experience' },
    { name: 'Project' },
    { name: 'Resume' },
    { name: 'Contact' },
  ]

  return (
    <nav className="relative flex items-center justify-between p-5 text-primary-text md:p-10">
      <div className="h-10 w-10 bg-white"></div>
      <ul className="hidden gap-6 text-lg font-light md:flex">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="group relative cursor-pointer font-normal hover:text-[#5FBDFF]"
          >
            <span className="absolute bottom-0 h-[2px] w-0 bg-[#5FBDFF] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            <a href={`#${link.name.toLowerCase()}`}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="flex md:hidden">
        <button
          onClick={() => {
            setIsActive(!isActive)
          }}
          className="rounded-full bg-black p-1"
        >
          <IconContext.Provider value={{ className: 'text-2xl text-white' }}>
            {isActive ? <RiCloseFill /> : <RxHamburgerMenu />}
          </IconContext.Provider>
        </button>
      </div>
      <div
        className={twMerge(
          'absolute left-0 flex h-full w-full translate-y-16 justify-center rounded transition-all duration-300 ease-in-out md:hidden',
          isActive ? '-translate-x-0' : 'translate-x-full',
        )}
      >
        <ul className="m-5 flex h-fit w-full flex-col items-center gap-8 rounded-xl bg-black px-3 py-6 text-lg font-light">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="hover:text-blue-sky group relative w-fit cursor-pointer font-normal"
            >
              <span className="bg-blue-sky text-blue-sky absolute bottom-0 h-[2px] w-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <a href={`#${link.name.toLowerCase()}`}>{link.name}</a>
            </li>
          ))}
          <div className="">
            <ul className="flex gap-4">
              {logoLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <li key={index}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <IconContext.Provider
                        value={{ className: 'text-2xl text-white' }}
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
