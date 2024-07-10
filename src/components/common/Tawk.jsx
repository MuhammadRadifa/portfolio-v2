'use client'

import TawkMessengerReact from '@tawk.to/tawk-messenger-react'

export default function Tawk() {
  const style = {
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
