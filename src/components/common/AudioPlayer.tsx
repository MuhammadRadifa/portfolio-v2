'use client'

import { useEffect, useRef, useState } from 'react'

export function AudioPlayer({
  isPlaying,

  toggle,
}: {
  isPlaying: boolean
  toggle: () => void
}) {
  return (
    <div>
      <button className="cursor-pointer" onClick={toggle}>
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24em"
            height="24em"
            viewBox="0 0 24 24"
            className="h-full w-full p-1"
          >
            <g
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path d="M13 15L8 18L8 6L13 9L13 9">
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.6s"
                  keyTimes="0;0.33;1"
                  values="M13 15L8 18L8 6L13 9L13 9;M13 15L8 18L8 6L13 9L13 15;M9 18L7 18L7 6L9 6L9 18"
                ></animate>
              </path>
              <path d="M13 9L18 12L18 12L13 15L13 15">
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.6s"
                  keyTimes="0;0.33;1"
                  values="M13 9L18 12L18 12L13 15L13 15;M13 9L18 12L18 12L13 15L13 9;M15 6L17 6L17 18L15 18L15 6"
                ></animate>
              </path>
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24em"
            height="24em"
            viewBox="0 0 24 24"
            className="h-full w-full p-1"
          >
            <path
              fill="black"
              fillOpacity={0}
              stroke="black"
              strokeDasharray={36}
              strokeDashoffset={36}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 6L18 12L8 18z"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.4s"
                values="36;0"
              ></animate>
              <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="0.5s"
                dur="0.5s"
                values="0;1"
              ></animate>
            </path>
          </svg>
        )}
      </button>
    </div>
  )
}
