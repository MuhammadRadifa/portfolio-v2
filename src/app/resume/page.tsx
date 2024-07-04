import TextSection from '@/components/common/TextSection'

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TextSection icon="📄" text="it's My Resume." />
      <iframe
        src="/cv.pdf#toolbar=0"
        className="mt-4 h-[800px] w-full overflow-hidden xl:h-[1135px] xl:w-[810px]"
      />
    </div>
  )
}
