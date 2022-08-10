import { ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="">{children}</div>
}

export function WrapperLarge({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`grid ${className}`}>
      {children}
    </section>
  )
}
