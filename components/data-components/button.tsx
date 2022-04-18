export const Button = ({
  className,
  type,
  text,
  ...props
}: {
  className?: string
  type?: string
  text?: string
}) => {
  return <button className={`${className}`}>{text}</button>
}
