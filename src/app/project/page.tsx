'use client'

import ProjectCard from '@/components/common/ProjectCard';
import TextSection from '@/components/common/TextSection';

import { GithubStats } from '@/components/common/GithubStats';
import { IProject } from '@/utils/interface/Project';
import { fetcher } from '@/utils/service/Fetcher';
import Image from 'next/image';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useSWR from 'swr';

const githubStatCards = [
  {
    src: 'https://camo.githubusercontent.com/780c703bef47dbdcc5892904d1e7532ee15a94fa30f5baa1b331bfddfadf89ab/68747470733a2f2f6769746875622d73746174732d657874656e6465642e76657263656c2e6170702f6170693f757365726e616d653d6d7568616d6d616452616469666126686964655f7469746c653d66616c736526686964655f72616e6b3d66616c73652673686f775f69636f6e733d7472756526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d747275652664697361626c655f616e696d6174696f6e733d66616c7365267468656d653d64726163756c61266c6f63616c653d656e26686964655f626f726465723d66616c7365266f726465723d31',
    alt: 'Muhammad Radifa GitHub stats',
  },
  {
    src: 'https://camo.githubusercontent.com/1da2913a6fc3c1bc8c5cacfafe8243cd30bed3cc3caafb2d7aafced0b754883e/68747470733a2f2f6769746875622d73746174732d657874656e6465642e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d6d7568616d6d6164526164696661266c6f63616c653d656e26686964655f7469746c653d66616c7365266c61796f75743d636f6d7061637426636172645f77696474683d333230266c616e67735f636f756e743d35267468656d653d64726163756c6126686964655f626f726465723d66616c7365266f726465723d32',
    alt: 'Muhammad Radifa top languages',
  },
  {
    src: 'https://camo.githubusercontent.com/f1c3dc250594a4d2128ea4f9bc12c56bebb32ffaf5faead203df229c87d18f56/68747470733a2f2f73747265616b2d73746174732e64656d6f6c61622e636f6d3f757365723d6d7568616d6d6164526164696661266c6f63616c653d656e266d6f64653d6461696c79267468656d653d64726163756c6126686964655f626f726465723d66616c736526626f726465725f7261646975733d35266f726465723d33',
    alt: 'Muhammad Radifa GitHub streak stats',
  },
]

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
        <div className="my-10 flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          {githubStatCards.map((card) => (
            <div
              key={card.src}
              className="cursor-pointer rounded-lg border-4 border-black-primary bg-white p-1 shadow-image-card duration-150 hover:shadow-button-card hover:shadow-black-primary dark:bg-black sm:p-1.5"
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={10}
                height={10}
                unoptimized
                className="h-auto w-full max-w-[250px] rounded-md sm:max-w-[326px]"
              />
            </div>
          ))}
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
