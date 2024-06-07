'use client'
import { animatePageOut } from '@/utils/animation/animatePage'
import { usePathname, useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface Props {
  href: string
  label: string
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  return (
    <li
      onClick={handleClick}
      className="group relative cursor-pointer font-semibold"
    >
      <span
        className={twMerge(
          'absolute bottom-0 h-1 w-0 rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full',
          pathname === href && 'w-full',
        )}
      ></span>
      <a>{label}</a>
    </li>
  )
}

export default TransitionLink
