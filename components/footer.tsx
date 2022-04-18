import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'

export default function Footer({ data }: CommonType) {
  return (
    <WrapperLarge>
      <footer className="bg-light gap-6 grid md:grid-cols-2 lg:grid-cols-4">
        footer
      </footer>
    </WrapperLarge>
  )
}
