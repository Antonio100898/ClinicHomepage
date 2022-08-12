export default function Paragraph({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return <p className={`${className} text-s md:text-xs`}>{children}</p>
}
