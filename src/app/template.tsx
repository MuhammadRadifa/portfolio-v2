'use client'

import { animatePageIn } from '@/utils/animation/animatePage'
import { useEffect } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn()
  }, [])
  return (
    <div className="z-50">
      <div
        id="banner-1"
        className="fixed left-0 top-0 z-10 flex min-h-screen w-1/4 items-center justify-center bg-yellow-primary shadow-button shadow-background"
      >
        <div className="flex flex-col">
          <h1 className="text-center text-xl font-bold text-black-primary md:text-3xl">
            Hello
          </h1>
          <p className="text-center text-black-primary">Radifa.my.id</p>
        </div>
      </div>
      <div
        id="banner-2"
        className="fixed left-1/4 top-0 z-10 flex min-h-screen w-1/4 items-center justify-center bg-yellow-primary shadow-button shadow-background"
      >
        <div className="rounded-lg border-4 border-black-primary bg-white p-5 shadow-button shadow-black-primary md:p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 fill-black-primary md:h-16 md:w-16"
            viewBox="0 0 512 512"
          >
            <path d="M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64V261.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75H296h8c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5V160c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2V96c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1c0 0 0-.1 0-.1V64c0-8.8 7.2-16 16-16s16 7.2 16 16V95.9c0 0 0 .1 0 .1V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16v55.9c0 0 0 .1 0 .1v80c0 13.3 10.7 24 24 24s24-10.7 24-24V160.1c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16V332.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2H296h-8.5c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96.1z" />
          </svg>
        </div>
      </div>
      <div
        id="banner-3"
        className="fixed left-2/4 top-0 z-10 flex min-h-screen w-1/4 items-center justify-center bg-yellow-primary shadow-button shadow-background"
      >
        <div className="flex flex-col">
          <h1 className="text-center text-xl font-bold text-black-primary md:text-3xl">
            World
          </h1>
          <p className="text-center text-black-primary">Radifa.my.id</p>
        </div>
      </div>
      <div
        id="banner-4"
        className="fixed left-3/4 top-0 z-10 flex min-h-screen w-1/4 items-center justify-center bg-yellow-primary shadow-button shadow-background"
      >
        <div className="rounded-lg border-4 border-black-primary bg-white p-5 shadow-button shadow-black-primary md:p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 fill-black-primary md:h-16 md:w-16"
            viewBox="0 0 512 512"
          >
            <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
          </svg>
        </div>
      </div>
      {children}
    </div>
  )
}
