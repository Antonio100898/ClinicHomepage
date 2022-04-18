import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()
  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />
      <header className="h-header z-10 pt-4 px-4">
        <div className="grid grid-cols-auto-1fr gap-x-6 mx-auto max-w-screen-lg p-3 bg-light rounded-lg">
          <Logo />
          <ul className="flex flex-row gap-x-2">
            <li>
              <ChangeLangButton className="" lang="en">
                {data.languageNames[0].en}
              </ChangeLangButton>
            </li>
            <li>
              <ChangeLangButton className="" lang="he">
                {data.languageNames[0].he}
              </ChangeLangButton>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

const Logo = () => {
  return (
    <Link href="/">
      <a>Logo</a>
    </Link>
  )
}
