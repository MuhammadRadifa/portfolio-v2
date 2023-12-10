import ProjectCard from '@/components/common/ProjectCard'
import TextSection from '@/components/common/TextSection'
import foto1 from '@/assets/Project/foto1.png'
import foto2 from '@/assets/Project/foto2.png'
import foto3 from '@/assets/Project/foto3.png'
import foto4 from '@/assets/Project/foto4.png'
import foto5 from '@/assets/Project/foto5.png'

export default function Project() {
  const data = [
    {
      title: 'Kalkulator Kesehatan',
      image: foto1,
      deskripsi: 'app for calculating health, such as BMI, BMR, and others.',
      demo: 'https://kalkulator-kesehatan.netlify.app/',
      repo: 'https://github.com/MuhammadRadifa/kalkulator-kesehatan',
    },
    {
      title: 'Restful API - library',
      image: foto2,
      deskripsi:
        'library management system API is an API used to manage library systems',
      repo: 'https://github.com/MuhammadRadifa/API-Perpustakaan',
    },
    {
      title: 'Restful API - Social Media',
      image: foto3,
      deskripsi:
        'Social Media API is an API used to manage social media forum systems',
      repo: 'https://github.com/MuhammadRadifa/api-comunity-app',
    },
    {
      title: 'Learning Aja',
      image: foto4,
      deskripsi:
        'Learning Aja is a website that provides learning materials for students.',
      repo: 'https://github.com/MuhammadRadifa/amba-ajar',
    },
    {
      title: 'Portfolio-V1',
      image: foto5,
      deskripsi:
        'my first portfolio website. built with nextJS and TailwindCSS',
      repo: 'https://github.com/MuhammadRadifa/portfolio',
    },
  ]
  return (
    <div className="">
      <TextSection text="it's My Projects." />
      <div className="mb-2 mt-6 flex w-full flex-wrap justify-center gap-4 sm:mb-4 md:mb-5 lg:mb-6 lg:gap-6">
        {data.map((item, index) => (
          <ProjectCard {...item} key={index} />
        ))}
      </div>
    </div>
  )
}
