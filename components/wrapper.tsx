import { ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-screen-md">{children}</div>
}

export function WrapperLarge({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <section className={`grid ${className}`}>{children}</section>
}
