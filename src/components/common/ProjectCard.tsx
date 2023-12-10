'use client'

import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default function ProjectCard({
  image,
  title,
  deskripsi,
  repo,
  demo,
}: any) {
  function redirect(url: string) {
    window.open(url, '_blank')
  }
  return (
    <div
      onClick={() => {
        redirect(repo)
      }}
      className="dark:border-dark-secondary group relative h-36 w-[280px] cursor-pointer overflow-hidden rounded-lg  border-2 border-black-primary object-cover shadow-button-card sm:w-[360px] lg:h-44"
    >
      <Image
        src={image}
        width={500}
        height={500}
        className="h-full w-full object-cover "
        alt="foto"
      />
      <div className="absolute right-0 top-0 z-10 flex h-1/4 w-full -translate-y-10 items-center justify-end gap-2 p-2 transition-all group-hover:translate-y-0">
        {demo && (
          <a
            href={demo}
            className="cursor-pointer rounded-full border-2 border-black-primary bg-yellow-primary p-1.5 text-sm text-black hover:bg-orange-primary lg:p-2 lg:text-base"
          >
            <FaExternalLinkAlt />
          </a>
        )}
        {repo && (
          <a
            href={repo}
            className="cursor-pointer rounded-full border-2 border-black-primary bg-yellow-primary p-1.5 text-sm text-black hover:bg-orange-primary lg:p-2 lg:text-base"
          >
            <FaGithub />
          </a>
        )}
      </div>
      <div className="dark:bg-dark-secondary absolute bottom-0 h-10 w-full border-t-2 border-black-primary bg-yellow-primary p-2 transition-all duration-300 group-hover:h-[60%] lg:group-hover:h-2/4 ">
        <div className="h-20">
          <h1 className="line-clamp-1 font-bold group-hover:line-clamp-2">
            {title}
          </h1>
          <p className="hidden h-full text-xs font-normal group-hover:block">
            {deskripsi}
          </p>
        </div>
      </div>
    </div>
  )
}
