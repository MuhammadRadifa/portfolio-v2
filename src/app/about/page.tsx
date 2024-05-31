'use client'

import TextSection from '@/components/common/TextSection'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { techIcons } from '@/utils/constant/TechIcons'
import { animate, motion } from 'framer-motion'

export default function About() {
  const fadeInAnimationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.05 * index,
      },
    }),
  }

  return (
    <section className="text-black-primary">
      <TextSection text="it's More About Me." />
      <div className="mx-auto mt-8 flex flex-col items-center justify-center md:gap-10 lg:flex-row">
        <Image
          src={'https://avatars.githubusercontent.com/muhammadradifa'}
          alt="Picture of the author"
          width={1000}
          height={1000}
          className="aspect-auto w-full rounded-lg object-cover md:w-1/2 xl:w-96"
        />
        <p className="mt-5 text-justify text-base text-secondary-text md:mt-0 lg:w-1/2 xl:text-lg">
          I am an undergraduate student majoring in{' '}
          <b>Informatics Engineering</b> at STMIK Widya Cipta Dharma. I possess
          a strong understanding of programming languages and web development,
          along with hands-on experience in <b>software development</b>{' '}
          projects. My current focus is on deepening my knowledge in the field
          of <b>web & android development</b>.
          <br />
          <br />I have hands-on experience with <b>ReactJS</b> and <b>NextJS</b>{' '}
          for the frontend. and using <b>ExpressJS</b>, <b>AdonisJS</b> for
          backend development. im also currently learning about <b>Kotlin</b>{' '}
          for android development
        </p>
      </div>
      <TextSection
        classNames="mt-10 xl:mt-28"
        text="the Tech Stack That I Use."
      />
      <div className="mt-5 grid grid-cols-3 justify-items-center gap-2 sm:grid-cols-3 xl:grid-cols-6 xl:gap-y-6 xl:px-40">
        {/* <TechTabs /> */}
        {techIcons.map((data, index) => {
          const Icons = data.icons
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="animate"
              variants={fadeInAnimationVariants}
              custom={index}
              className={twMerge(
                `flex h-28 w-28 flex-col items-center justify-center gap-y-2 rounded-2xl border-2 bg-white duration-150 hover:scale-105 hover:border-black-primary hover:shadow-button-card md:h-36 md:w-36 md:p-4`,
              )}
            >
              <Icons
                className={twMerge(`text-4xl text-black-primary md:text-6xl`)}
              />
              <p className="text-base font-bold text-black-primary md:text-xl">
                {data.name}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
