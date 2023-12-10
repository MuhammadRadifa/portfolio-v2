import HighlightText from '@/components/common/HighlightText'
import TextSection from '@/components/common/TextSection'
import Image from 'next/image'
import { TechTabs } from '@/components/common/TechTabs'

export default function About() {
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
          I am an <b>Informatics Engineering</b> student from STMIK Widya Cipta
          Dharma, I have a strong understanding of programming languages and web
          development and have experience in <b>software development</b>{' '}
          projects. I have an interest and deepening my knowledge in the field
          of <b>web development</b>.
          <br />
          <br />I have experience with <b>ReactJS</b> and <b>NextJS</b> for the
          frontend and <b>NodeJS</b> for the backend. I also have experience
          with <b>ExpressJS, AdonisJS</b> and <b>MySQL</b> for the backend.
        </p>
      </div>
      <TextSection
        classNames="mt-10 xl:mt-28"
        text="the Tech Stack That I Use."
      />
      <div className="mt-5 xl:px-40">
        <TechTabs />
      </div>
    </section>
  )
}
