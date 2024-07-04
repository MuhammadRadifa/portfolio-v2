'use client'

import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiCloseFill } from 'react-icons/ri'
import { twMerge } from 'tailwind-merge'
import { logoLinks } from '@/utils/constant/LogoLinks'
import TransitionLink from './common/transitionLink'
import { Tooltip } from '@material-tailwind/react'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '@/utils/animation/animatePage'

type Routes = '/about' | '/education' | '/project'

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)

  const pathName = usePathname()
  const router = useRouter()

  const navLinks = [
    { name: '🚀 Home', href: '/' },
    { name: '😎 About', href: '/about' },
    { name: '🎓 Education', href: '/education' },
    { name: '⚒️ Project', href: '/project' },
    { name: '📑 Resume', href: '/resume' },
    { name: '📲 Contact', href: '/contact' },
  ]

  const navigationRoutes = {
    '/about': '/education',
    '/education': '/project',
    '/project': '/resume',
    '/resume': '/contact',
  }

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
        `sticky top-0 z-10 flex items-center justify-end bg-transparent px-5 py-3 text-[#616D8A] duration-200 dark:text-white md:px-10 md:py-5`,
        navBg && 'md:justify-center md:py-2',
      )}
    >
      <ul
        className={twMerge(
          'hidden gap-6 text-lg md:flex',
          navBg &&
            'gap-4 rounded-xl border-2 border-black-primary bg-white p-4 text-black-primary shadow-nav-card',
        )}
      >
        {navLinks.map((link, index) => (
          <TransitionLink key={index} href={link.href} label={link.name} />
        ))}
      </ul>
      {navBg && (
        <div
          onClick={() => {
            animatePageOut(navigationRoutes[pathName as Routes], router)
          }}
          className={twMerge(
            'fixed top-0 my-4 hidden h-16 w-16 -rotate-120 cursor-pointer rounded-full border-4 border-black-primary bg-yellow-primary duration-150 hover:-rotate-90 md:right-16 md:block',
            // !isProject
            //   ? '-rotate-120 hover:-rotate-90 md:right-16'
            //   : 'rotate-120 hover:rotate-90 md:left-16',
          )}
        >
          <Tooltip
            content={`Next Page`}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: -25 },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="p-2"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="black"
                strokeLinecap="round"
                strokeWidth={2}
              >
                <path
                  strokeDasharray="2 4"
                  strokeDashoffset={6}
                  d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    repeatCount="indefinite"
                    values="6;0"
                  ></animate>
                </path>
                <path
                  strokeDasharray={30}
                  strokeDashoffset={30}
                  d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.1s"
                    dur="0.3s"
                    values="30;0"
                  ></animate>
                </path>
                <path strokeDasharray={10} strokeDashoffset={10} d="M12 8v7.5">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.2s"
                    values="10;0"
                  ></animate>
                </path>
                <path
                  strokeDasharray={6}
                  strokeDashoffset={6}
                  d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.2s"
                    values="6;0"
                  ></animate>
                </path>
              </g>
            </svg>
          </Tooltip>
        </div>
      )}
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
