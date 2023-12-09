import { twMerge } from 'tailwind-merge'

type TextSectionProps = {
  text: string
  classNames?: string
}

export default function TextSection({ classNames, text }: TextSectionProps) {
  return (
    <div className={twMerge('relative font-semibold xl:text-xl', classNames)}>
      <p className="mx-auto w-fit text-2xl text-black-primary md:text-4xl">
        {text}
      </p>
    </div>
  )
}
