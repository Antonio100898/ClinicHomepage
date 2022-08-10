import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import NavBar from './navBar'
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
        <NavBar appLinks={data.appLinks} languageNames={data.languageNames} />
      </header>
    </>
  )
}
