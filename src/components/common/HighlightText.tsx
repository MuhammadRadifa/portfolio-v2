export default function HighlightText({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="inline rounded-sm bg-white/30 p-1 text-primary-text backdrop-blur-sm">
      {children}
    </div>
  )
}
