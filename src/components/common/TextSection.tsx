'use client'

import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

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
      <p className="relative mx-auto w-fit text-2xl text-black-primary dark:text-white md:text-4xl">
        <motion.span
          whileInView={{ width: '100%' }}
          initial={{ width: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute bottom-0 -z-10 h-6 w-3/4 -translate-x-3 -rotate-2 rounded-md bg-gradient-to-r from-yellow-primary to-transparent"
        ></motion.span>
        <motion.span className="text-3xl md:text-[48px]">{icon}</motion.span>
        {text}
      </p>
    </div>
  )
}
