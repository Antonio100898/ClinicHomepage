export const Button = ({
  className,
  text,
}: {
  className?: string
  type?: string
  text?: string
}) => {
  return <button className={`${className}`}>{text}</button>
}
