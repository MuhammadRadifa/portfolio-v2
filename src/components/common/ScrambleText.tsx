import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CYCLES_PER_LETTER = 3
const SHUFFLE_TIME = 75
const CHARS =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?/\\'

type Props = {
  children: string
}

const ScrambleText: React.FC<Props> = ({ children }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const TARGET_TEXT = children

  const [text, setText] = useState(TARGET_TEXT)

  useEffect(() => {
    scramble()
    return () => {
      stopScramble()
    }
  }, []) // Empty dependency array ensures useEffect runs only once on component mount

  const scramble = () => {
    let pos = 0

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split('')
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length)
          const randomChar = CHARS[randomCharIndex]

          return randomChar
        })
        .join('')

      setText(scrambled)
      pos++

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble()
      }
    }, SHUFFLE_TIME)
  }

  const stopScramble = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout)
    setText(TARGET_TEXT)
  }

  return (
    <motion.h1
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="cursor-pointer text-3xl font-bold dark:text-white md:text-6xl"
    >
      {text}
    </motion.h1>
  )
}

export default ScrambleText
