export default function BlueButton({
  children,
  className,
  type,
}: {
  children: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
}) {
  return (
    <button
      type={type}
      className={`${className} bg-icon-bg px-2 py-2 text-light font-bold rounded-[51px]`}
    >
      {children}
    </button>
  )
}
