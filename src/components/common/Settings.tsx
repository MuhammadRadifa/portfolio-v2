'use client'

import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler,
} from '@material-tailwind/react'
import { useEffect, useRef, useState } from 'react'
import { ThemeButton } from './ThemeButton'
import { useTheme } from 'next-themes'
import { AudioPlayer } from './AudioPlayer'

export function Settings() {
  const { theme, setTheme } = useTheme()

  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef: any = useRef(null)

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        'https://aac.saavncdn.com/051/1fef3e907319879eda1e3934f2d21ff2_320.mp4',
      )
      audioRef.current.addEventListener('ended', () => setIsPlaying(false))
    }

    const audio = audioRef.current
    isPlaying ? audio.play() : audio.pause()

    return () => {
      audio.pause()
      audio.removeEventListener('ended', () => setIsPlaying(false))
    }
  }, [isPlaying, setIsPlaying])

  const toggle = () => setIsPlaying(!isPlaying)

  return (
    <div className="fixed bottom-6 left-6">
      {/* <div>
        
      </div> */}
      <SpeedDial>
        <SpeedDialHandler>
          <button className="h-16 w-16 cursor-pointer rounded-full border-4 border-black-primary bg-yellow-primary duration-150 hover:-rotate-90 md:right-16 md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="animate-spin p-2.5"
              viewBox="0 0 512 512"
            >
              <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
            </svg>
          </button>
        </SpeedDialHandler>
        <SpeedDialContent>
          <SpeedDialAction
            onClick={() => {
              setTheme(theme == 'light' ? 'dark' : 'light')
            }}
            className="h-16 w-16 cursor-pointer rounded-full border-4 border-black-primary bg-yellow-primary duration-150 hover:bg-orange-primary md:right-16 md:block"
          >
            <ThemeButton theme={theme ? theme : 'light'} />
          </SpeedDialAction>
          <SpeedDialAction className="h-16 w-16 cursor-pointer rounded-full border-4 border-black-primary bg-yellow-primary duration-150 hover:bg-orange-primary md:right-16 md:block">
            <AudioPlayer isPlaying={isPlaying} toggle={toggle} />
          </SpeedDialAction>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  )
}
