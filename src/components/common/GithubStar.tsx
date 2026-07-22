'use client'

import { fetcher } from '@/utils/service/Fetcher';
import { FaCodeFork, FaGithub } from 'react-icons/fa6';
import { GoStarFill } from 'react-icons/go';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import AnimatedCounter from './AnimatedCounter';

export default function GithubStar() {
  const { data, isLoading, error } = useSWR(
    `https://api.github.com/repos/MuhammadRadifa/portfolio-v2`,
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false },
  )

  return isLoading ? (
    <div className="fixed left-6 top-3 z-10 hidden cursor-pointer items-center space-x-5 md:flex">
      <Skeleton className="h-14 w-44" />
    </div>
  ) : (
    <div className="fixed left-6 top-3 z-10 hidden cursor-pointer items-center space-x-5 md:flex">
      <a
        href="https://github.com/MuhammadRadifa/portfolio-v2"
        target="_blank"
        className="flex h-14 w-44 cursor-pointer flex-row rounded-lg border-4 border-black-primary bg-white text-black-primary shadow-image-card duration-150 dark:bg-black dark:text-white md:right-16"
      >
        <FaGithub className="m-2 text-3xl" />
        <div>
          <p className="text-md font-bold">Portfolio-v2</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <GoStarFill className="text-xs text-black-primary dark:text-yellow-primary" />
              <span className="text-xs font-bold">
                <AnimatedCounter from={0} to={data.stargazers_count} />
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FaCodeFork className="text-xs" />
              <span className="text-xs font-bold">
                <AnimatedCounter from={0} to={data.forks} />
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
