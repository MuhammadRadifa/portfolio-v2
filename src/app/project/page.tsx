'use client'

import ProjectCard from '@/components/common/ProjectCard'
import TextSection from '@/components/common/TextSection'

import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '@/utils/service/Fetcher'
import { IProject } from '@/utils/interface/Project'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { GithubStats } from '@/components/common/GithubStats'

export default function Project() {
  const [filter, setFilter] = useState('all')

  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL as string}/project`,
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false },
  )

  return (
    <div className="">
      <TextSection icon="⚒️" text="it's My Projects." />
      <div>
        <div className="my-10 hidden justify-center md:flex">
          <GithubStats />
        </div>
        <div className="my-4 flex justify-center gap-4 font-semibold text-[#616D8A] dark:text-white sm:gap-6 md:gap-8 lg:gap-4">
          <button
            className={`group relative flex cursor-pointer flex-col items-start justify-center`}
            onClick={() => setFilter('all')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'all' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>
              All{' '}
              {!isLoading &&
                !error &&
                filter == 'all' &&
                `(${!isLoading && data?.data.length})`}
            </p>
          </button>
          <button
            className={`group relative flex cursor-pointer flex-col items-start justify-center`}
            onClick={() => setFilter('web')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'web' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>
              Web{' '}
              {!isLoading &&
                !error &&
                filter == 'web' &&
                `(${
                  data.data.filter((item: IProject) => item.type === 'web')
                    .length
                })`}
            </p>
          </button>
          <button
            className={`group relative flex cursor-pointer flex-col items-start justify-center`}
            onClick={() => setFilter('mobile')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'mobile' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>
              Mobile{' '}
              {filter == 'mobile' &&
                `(${
                  data.data.filter((item: IProject) =>
                    ['android', 'ios', 'flutter', 'mobile'].includes(item.type),
                  ).length
                })`}
            </p>
          </button>
          <button
            className={`group relative flex cursor-pointer flex-col items-start justify-center`}
            onClick={() => setFilter('api')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'api' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>
              Api{' '}
              {!isLoading &&
                !error &&
                filter == 'api' &&
                `(${
                  data.data.filter((item: IProject) => item.type === 'api')
                    .length
                })`}
            </p>
          </button>
        </div>
      </div>
      <div className="mb-2 mt-6 flex w-full flex-wrap justify-center gap-4 sm:mb-4 md:mb-5 lg:mb-6 lg:gap-6">
        {!isLoading &&
          !error &&
          data.data
            .slice(0)
            .reverse()
            .filter((item: IProject) => {
              if (filter === 'all') return true
              if (filter === 'mobile')
                return ['android', 'ios', 'flutter', 'mobile'].includes(
                  item.type,
                )
              if (filter === 'web') return item.type === 'web'
              if (filter === 'api') return item.type === 'api'
              return item.type === filter
            })
            .map((item: IProject, index: Number) => (
              <ProjectCard {...item} key={index} />
            ))}
        {isLoading && (
          <div className="flex w-3/4 flex-row items-center justify-center">
            <Skeleton
              height={160}
              width={320}
              count={12}
              containerClassName="flex gap-2 flex-row items-center justify-center w-full flex-wrap"
            />
          </div>
        )}
        {error && <p className="text-center">Error ...</p>}
      </div>
    </div>
  )
}
