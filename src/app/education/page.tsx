'use client'

import { useCallback, useState } from 'react'
import ImageViewer from 'react-simple-image-viewer'
import { certificates, imagesPreview } from '@/utils/constant/Certificate'

import { RiFileCopyLine } from 'react-icons/ri'
import { BiShow } from 'react-icons/bi'
import { IoLinkSharp } from 'react-icons/io5'
import TextSection from '@/components/common/TextSection'

export default function Education() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }
  return (
    <div className="xl:px-64">
      <TextSection
        text="My Certification and Awards"
        classNames="mb-10 text-center"
      />
      <div className="flex flex-wrap items-center justify-center gap-5">
        {certificates.map(({ title, company, type }, index) => (
          <div
            key={index}
            className="flex h-40 w-full max-w-[288px] cursor-pointer flex-col justify-between rounded-xl border-2 border-black-primary bg-white p-4 shadow-button-card transition-all hover:scale-105 xl:w-72"
            onClick={() => openImageViewer(index)}
          >
            <div>
              <h1 className="text-xl font-bold text-black-primary">{title}</h1>
              <p>{company}</p>
            </div>
            <div className="flex justify-between gap-2">
              <p className="flex h-fit items-center justify-center rounded-xl bg-blue-gray-50 p-2 text-center text-xs font-semibold">
                {type}
              </p>
              <div className="flex gap-2">
                <BiShow className="rounded-full border-2 border-black-primary bg-yellow-primary p-2 text-4xl text-black-primary hover:bg-orange-primary" />
                <RiFileCopyLine className="rounded-full border-2 border-black-primary bg-yellow-primary p-2 text-4xl text-black-primary hover:bg-orange-primary" />
                <IoLinkSharp className="rounded-full border-2 border-black-primary bg-yellow-primary p-2 text-4xl text-black-primary hover:bg-orange-primary" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={imagesPreview}
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
