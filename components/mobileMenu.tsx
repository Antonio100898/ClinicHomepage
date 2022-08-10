import { MobileMenuProps } from '@/lib/interface'
import Languages from './languages'
import NavLinks from './navLinks'

export default function MobileMenu({
  appLinks,
  languageNames,
  open,
}: MobileMenuProps) {
  return (
    <>
      {open && (
        <>
          <NavLinks navLinks={appLinks} />
          <Languages languageNames={languageNames} />
        </>
      )}
    </>
  )
}
