import ProjectCard from '@/components/common/ProjectCard'
import TextSection from '@/components/common/TextSection'
import data from '@/utils/constant/Project'

export default function Project() {
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
