'use client'
import { useTheme } from 'next-themes'
import GitHubCalendar from 'react-github-calendar'

export function GithubStats() {
  const { theme } = useTheme()
  return (
    <div className="cursor-pointer rounded-lg border-4 border-black-primary bg-white p-4 shadow-image-card duration-150 hover:shadow-button-card hover:shadow-black-primary dark:bg-black">
      <GitHubCalendar
        username="muhammadradifa"
        blockSize={15}
        blockMargin={5}
        colorScheme={theme === 'dark' ? 'dark' : 'light'}
      />
    </div>
  )
}
