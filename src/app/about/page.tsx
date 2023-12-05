import HighlightText from '@/components/common/HighlightText'
import TextSection from '@/components/common/TextSection'
import Image from 'next/image'

export default function About() {
  return (
    <section className="text-primary-text">
      <TextSection text="it's More About Me." />
      <div className="mx-auto mt-8 flex justify-center gap-10">
        <Image
          src={'https://avatars.githubusercontent.com/muhammadradifa'}
          alt="Picture of the author"
          width={1000}
          height={1000}
          className="aspect-auto w-96 rounded-lg object-cover"
        />
        <p className="w-1/2 text-justify text-lg text-secondary-text">
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
      <TextSection text="the Tech Stack That I Use." />
    </section>
  )
}
