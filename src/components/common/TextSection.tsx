type TextSectionProps = {
  text: string
}

export default function TextSection({ text }: TextSectionProps) {
  return (
    <div className="relative font-semibold xl:text-xl">
      <p className="mx-auto w-fit text-4xl">{text}</p>
    </div>
  )
}
