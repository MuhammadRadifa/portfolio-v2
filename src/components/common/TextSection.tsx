import { twMerge } from 'tailwind-merge'

type TextSectionProps = {
  text: string
  icon: string
  classNames?: string
}

export default function TextSection({
  classNames,
  text,
  icon,
}: TextSectionProps) {
  return (
    <div className={twMerge('relative font-semibold xl:text-xl', classNames)}>
      <p className="relative mx-auto w-fit text-2xl text-black-primary md:text-4xl">
        <span className="absolute bottom-0 -z-10 h-6 w-3/4 -translate-x-3 -rotate-2 rounded-md bg-gradient-to-r from-yellow-primary to-transparent"></span>
        <span className="text-3xl md:text-[48px]">{icon}</span>
        {text}
      </p>
    </div>
  )
}
