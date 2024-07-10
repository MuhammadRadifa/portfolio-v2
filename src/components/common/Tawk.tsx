'use client'

import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { CSSProperties } from 'react'

export default function Tawk() {
  const style: CSSProperties = {
    zIndex: 50,
  }
  return (
    <div className="cursor-pointer">
      <TawkMessengerReact
        customStyle={style}
        propertyId={process.env.NEXT_PUBLIC_PROPERTY_ID}
        widgetId={process.env.NEXT_PUBLIC_WIDGET_ID}
      />
    </div>
  )
}
