import TextSection from '@/components/common/TextSection'

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TextSection icon="📄" text="it's My Resume." />
      <div className="mt-5 flex w-full flex-col items-end md:mt-10 xl:w-[810px]">
        <div className="flex gap-3">
          <a
            href="/cv.pdf"
            download
            className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-black-primary bg-yellow-primary p-1 text-black-primary shadow-button shadow-black-primary hover:bg-orange-primary md:p-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24em"
              height="24em"
              viewBox="0 0 24 24"
              className="h-8 w-8"
            >
              <g
                fill="none"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path strokeDasharray={14} strokeDashoffset={14} d="M6 19h12">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.4s"
                    values="14;0"
                  ></animate>
                </path>
                <path
                  strokeDasharray={18}
                  strokeDashoffset={18}
                  d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="18;0"
                  ></animate>
                  <animate
                    attributeName="d"
                    calcMode="linear"
                    dur="1.5s"
                    keyTimes="0;0.7;1"
                    repeatCount="indefinite"
                    values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"
                  ></animate>
                </path>
              </g>
            </svg>
            <p className="text-xs font-semibold sm:text-sm md:text-lg">
              download
            </p>
          </a>
          <a
            href="/cv.pdf"
            className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-black-primary bg-white p-1 shadow-button shadow-black-primary hover:bg-primary-text md:p-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="m-1 h-6 w-6 md:m-0 md:h-8 md:w-8"
            >
              <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
            </svg>
          </a>
        </div>
        <iframe
          src="/cv.pdf#toolbar=0"
          className="mt-4 h-[800px] w-full overflow-hidden xl:h-[1135px]"
        />
      </div>
    </div>
  )
}
