'use client'

import ProjectCard from '@/components/common/ProjectCard'
import TextSection from '@/components/common/TextSection'
import data, { IProject } from '@/utils/constant/Project'
import foto1 from '@/assets/Project/foto1.png'
import { useEffect, useState } from 'react'

export default function Project() {
  const [filter, setFilter] = useState('all')
  const [project, setProject] = useState<Array<IProject>>([
    {
      title: 'Loading ...',
      image: foto1,
      deskripsi: 'Loading ...',
      type: 'loading',
      repo: '',
    },
  ])

  useEffect(() => {
    if (filter === 'all') {
      setProject(data)
    } else if (filter === 'mobile') {
      setProject(
        data.filter((item) =>
          ['android', 'ios', 'flutter'].includes(item.type),
        ),
      )
    } else {
      setProject(data.filter((item) => item.type === filter))
    }
  }, [filter])

  return (
    <div className="">
      <TextSection text="it's My Projects." />
      <div>
        <div className="my-4 flex justify-center gap-4 font-semibold text-[#616D8A] sm:gap-6 md:gap-8 lg:gap-4">
          <button
            className={`group relative flex flex-col items-start justify-center`}
            onClick={() => setFilter('all')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'all' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>All {filter == 'all' && `(${data.length})`}</p>
          </button>
          <button
            className={`group relative flex flex-col items-start justify-center`}
            onClick={() => setFilter('web')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'web' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>
              Web{' '}
              {filter == 'web' &&
                `(${data.filter((item) => item.type === 'api').length})`}
            </p>
          </button>
          <button
            className={`group relative flex flex-col items-start justify-center`}
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
                  data.filter((item) =>
                    ['android', 'ios', 'flutter'].includes(item.type),
                  ).length
                })`}
            </p>
          </button>
          <button
            className={`group relative flex flex-col items-start justify-center`}
            onClick={() => setFilter('api')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'api' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>
              Api{' '}
              {filter == 'api' &&
                `(${data.filter((item) => item.type === 'api').length})`}
            </p>
          </button>
        </div>
      </div>
      <div className="mb-2 mt-6 flex w-full flex-wrap justify-center gap-4 sm:mb-4 md:mb-5 lg:mb-6 lg:gap-6">
        {project.length != 1 &&
          project
            .slice(0)
            .reverse()
            .map((item, index) => <ProjectCard {...item} key={index} />)}
        {project.length == 1 && <p className="text-center">Loading ...</p>}
      </div>
    </div>
  )
}
