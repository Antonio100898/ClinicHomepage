import { NavLinksProps } from '@/lib/interface'

export default function NavLinks({ navLinks }: NavLinksProps) {
  return (
    <ul className="flex justify-evenly lg:w-8/12 w-10/12 sm:justify-between items-center">
      {navLinks.map((item) => (
        <li
          className="sm:text-center leading-tight"
          key={item.text}
        >
          <a href={item.relativeLink}>
            <span className="lg:text-lg md:text-s min-w-[70px]">{item.text}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
