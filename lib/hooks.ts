import { useRouter } from 'next/router'

export function useLocale() {
  const router = useRouter()
  let { locale } = router

  if (locale === undefined) {
    locale = 'he'
  }
  const dir: 'rtl' | 'ltr' = ['he', 'ar'].includes(locale) ? 'rtl' : 'ltr'
  return { router, dir, locale }
}
