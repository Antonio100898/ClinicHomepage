export default function SmallHeading({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return <h3 className={`${className} font-bold text-medium`}>{children}</h3>
}
