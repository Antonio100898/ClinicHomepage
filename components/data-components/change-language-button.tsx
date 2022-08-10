/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'

export const ChangeLangButton = ({
  className,
  children,
  lang,
}: {
  className?: string
  children?: React.ReactNode
  lang: string
}) => {
  const router = useRouter()
  const changeLocale = (lang: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: lang })
  }
  return (
    <div className="">
      <button onClick={() => changeLocale(lang)}>{lang}</button>
    </div>
  )
}
