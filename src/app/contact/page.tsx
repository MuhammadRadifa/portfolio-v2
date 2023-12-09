import TextSection from '@/components/common/TextSection'
import { logoLinks } from '@/utils/constant/LogoLinks'

export default function Contact() {
  return (
    <div className="xl:px-64">
      <TextSection text="Find Me On." classNames="mb-10" />
      <div className="flex flex-row flex-wrap justify-center gap-10 xl:justify-start">
        {logoLinks.map((data, index) => {
          const Icon = data.icon
          return (
            <a
              className="flex h-16 w-52 items-center gap-5 rounded-xl border-2 border-black-primary p-3 shadow-button-card transition-all duration-200 hover:scale-105"
              key={index}
              href={data.href}
            >
              <Icon className="text-2xl" />
              <p className="font-semibold">{data.name}</p>
            </a>
          )
        })}
      </div>
    </div>
  )
}
