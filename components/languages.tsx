import { LanguagesProps } from '@/lib/interface'
import { ChangeLangButton } from './data-components/change-language-button'

export default function Languages({ languageNames }: LanguagesProps) {
  return (
    <ul className="flex gap-x-2">
      <li>
        <ChangeLangButton className="" lang="en">
          {languageNames[0].en}
        </ChangeLangButton>
      </li>
      <li>
        <ChangeLangButton className="" lang="he">
          {languageNames[0].he}
        </ChangeLangButton>
      </li>
    </ul>
  )
}
