'use client'
import { animatePageOut } from '@/utils/animation/animatePage'
import { usePathname, useRouter } from 'next/navigation'

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
      <span className="absolute bottom-0 h-1 w-0 rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
      <a>{label}</a>
    </li>
  )
}

export default TransitionLink
