export default function Heading({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return (
    <h2 className={`${className} text-blue lg:text-lg sm:text-medium`}>
      {children}
    </h2>
  )
}
