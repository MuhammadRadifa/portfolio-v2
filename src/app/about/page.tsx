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
        <p className="text-justify text-sm text-secondary-text md:text-base lg:w-1/2 xl:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          magni cupiditate, pariatur debitis ipsum ducimus totam nihil quos
          nulla quibusdam architecto. Modi, non exercitationem. Consequuntur
          cumque rem aut quidem quisquam. Lorem, ipsum dolor sit amet{' '}
          {<HighlightText>ini adalah</HighlightText>}
          consectetur adipisicing elit. Itaque accusantium voluptatem facilis,
          dolorem necessitatibus eos cumque nemo, hic sit cum aliquam vero sint
          quam libero, repudiandae repellendus dolor aliquid porro. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Delectus excepturi
          aspernatur, facilis repudiandae adipisci eum quae placeat fugiat quis
          earum dolor est quas dolore consequatur inventore hic laudantium
          voluptatibus at. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Temporibus magni cupiditate, pariatur debitis ipsum ducimus
          totam nihil quos nulla quibusdam architecto. Modi, non exercitationem.
          Itaque accusantium voluptatem facilis, dolorem necessitatibus eos
          cumque nemo, hic sit cum aliquam vero sint quam libero,{' '}
          {<HighlightText>repudiandae</HighlightText>} repellendus dolor aliquid
          porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Delectus excepturi aspernatur, facilis repudiandae adipisci eum quae
          placeat fugiat quis earum dolor est quas dolore consequatur inventore
          hic laudantium voluptatibus at.
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
