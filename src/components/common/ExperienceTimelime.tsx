'use client'

import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
import { LinkPreview } from './LinkPreview'

export default function ExperienceTimeline({
  position,
  type,
  company,
  title,
  date,
  description,
  url,
}: {
  position: boolean
  type: string
  company: string
  title: string
  date: string
  description: string
  url: string
}) {
  return (
    <motion.div
      className={twMerge(
        'flex px-5 md:contents md:px-0',
        position && 'flex-row-reverse',
      )}
    >
      {!position && <DotTimeline type={type} url={url} />}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className={twMerge(
          'flex w-full flex-col gap-3 rounded-xl border-4 border-black-primary bg-white p-4 text-black shadow-button-card md:w-5/6',
          position
            ? 'col-start-1 col-end-5 my-4 ml-auto'
            : 'col-start-6 col-end-10 my-4 mr-auto',
        )}
      >
        <h2 className="mb-1 text-lg font-bold md:text-2xl">{title}</h2>
        <h4 className="text-sm font-semibold md:text-lg">{company}</h4>
        <p className="overflow-hidden text-justify leading-tight">
          {description}
        </p>
        <p className="md:text-lg">{date}</p>
      </motion.div>
      {position && <DotTimeline type={type} url={url} />}
    </motion.div>
  )
}

function DotTimeline({ type, url }: { type: string; url: string }) {
  return (
    <div className="relative col-start-5 col-end-6 mr-6 md:mx-auto md:mr-10">
      <div className="flex h-full w-6 items-center justify-center">
        <div className="pointer-events-none h-full w-1 bg-black-primary"></div>
      </div>
      <LinkPreview url={url}>
        <motion.div
          whileInView={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="absolute -left-4 top-1/2 -mt-10 flex h-14 w-14 rounded-full border-4 border-black-primary bg-yellow-primary md:-left-7 md:h-20 md:w-20"
        >
          {type === 'Work' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="p-3 md:p-5"
              viewBox="0 0 512 512"
            >
              <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="p-3 md:p-4"
              viewBox="0 0 612 512"
            >
              <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
            </svg>
          )}
        </motion.div>
      </LinkPreview>
    </div>
  )
}
