'use client'

import { useCallback, useState } from 'react'
import ImageViewer from 'react-simple-image-viewer'
import { ICertificate } from '@/utils/interface/Certificate'
import { motion } from 'framer-motion'
import { RiFileCopyLine } from 'react-icons/ri'
import { BiShow } from 'react-icons/bi'
import { IoLinkSharp } from 'react-icons/io5'
import TextSection from '@/components/common/TextSection'
import { fetcher } from '@/utils/service/Fetcher'
import useSWR from 'swr'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Education() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL as string}/certificate`,
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false },
  )

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  const handleClipboard = (href: string) => {
    navigator.clipboard.writeText(href)
  }

  const handleLink = (href: string) => {
    window.open(href, '_blank')
  }

  return (
    <div className="xl:px-40 2xl:px-64">
      <TextSection
        icon="🎓"
        text="My Education"
        classNames="mb-10 text-center"
      />
      <div className="flex flex-wrap items-center justify-center gap-5">
        {!isLoading &&
          !error &&
          data.data?.map(
            ({ title, company, type, href }: ICertificate, index: number) => (
              <motion.div
                key={index}
                whileInView={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="flex h-40 w-full max-w-[288px] cursor-pointer flex-col justify-between rounded-xl border-2 border-black-primary bg-white p-4 shadow-button-card transition-all hover:scale-105 xl:w-72"
              >
                <div>
                  <h1 className="text-xl font-bold text-black-primary">
                    {title}
                  </h1>
                  <p>{company}</p>
                </div>
                <div className="flex justify-between gap-2">
                  <p className="flex h-fit items-center justify-center rounded-xl bg-blue-gray-50 p-2 text-center text-xs font-semibold text-black-primary">
                    {type}
                  </p>
                  <div className="flex gap-2">
                    <BiShow
                      className="rounded-full border-2 border-black-primary bg-yellow-primary p-2 text-4xl text-black-primary hover:bg-orange-primary"
                      onClick={() => openImageViewer(index)}
                    />
                    <RiFileCopyLine
                      className="rounded-full border-2 border-black-primary bg-yellow-primary p-2 text-4xl text-black-primary hover:bg-orange-primary"
                      onClick={() => handleClipboard(href)}
                    />
                    <IoLinkSharp
                      className="rounded-full border-2 border-black-primary bg-yellow-primary p-2 text-4xl text-black-primary hover:bg-orange-primary"
                      onClick={() => handleLink(href)}
                    />
                  </div>
                </div>
              </motion.div>
            ),
          )}
        {isLoading && (
          <div className="flex w-full flex-row items-center justify-center">
            <Skeleton
              height={160}
              width={288}
              count={12}
              containerClassName="flex gap-2 flex-row items-center justify-center w-full flex-wrap"
            />
          </div>
        )}
        {error && <p className="text-center">Error ...</p>}
      </div>

      {isViewerOpen && !isLoading && !error && (
        <ImageViewer
          src={data.data.map(
            (item: any) =>
              `https://drive.google.com/thumbnail?id=${item.image}&sz=w3000`,
          )}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          backgroundStyle={{
            zIndex: 9999,
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  )
}
