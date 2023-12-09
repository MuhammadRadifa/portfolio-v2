export default function HighlightText({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="text-black-primary bg-yellow-primary inline rounded-sm p-1 font-bold backdrop-blur-sm">
      {children}
    </span>
  )
}
