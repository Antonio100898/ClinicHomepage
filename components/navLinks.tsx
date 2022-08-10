import { NavLinksProps } from '@/lib/interface'

export default function NavLinks({ navLinks }: NavLinksProps) {
  return (
    <ul className="flex lg:justify-evenly lg:w-7/12 lg:pr-5 sm:w-9/12 sm:justify-between items-center">
      {navLinks.map((item) => (
        <li
          className="sm:text-center sm:w-1/6 leading-tight sm:font-bold"
          key={item.text}
        >
          <a href={item.relativeLink}>
            <span className="lg:text-lg">{item.text}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
