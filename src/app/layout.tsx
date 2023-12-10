import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Radifa - Portfolio',
  description: 'Radifa - Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        <main className="mb-10 p-5 md:p-8">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
