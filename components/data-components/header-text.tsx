export const PageHeader = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  return (
    <h1 className={`${className} font-bold lg:text-3xl text-xl`}>
      {children}
    </h1>
  )
}
