export default function WhiteButton({
  children,
  className,
  border,
}: {
  children: string
  className?: string
  border?: boolean
}) {
  return (
    <button
      className={`${className} ${
        border && 'border border-2 border-icon-bg'
      } px-8 h-12 bg-light  text-blue rounded-[51px]`}
    >
      {children}
    </button>
  )
}
