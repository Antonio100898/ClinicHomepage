import Footer from '@/components/footer'
import Header from '@/components/header'
import Main from '@/components/main'
import { useLocale } from '@/lib/hooks'
import theme from '@/lib/theme.preval'
import React from 'react'

export default function Layout({ children, pageProps }: any) {
  const { dir, locale, router } = useLocale()
  if (['/404', '/500'].includes(router.pathname)) {
    return <>{children}</>
  }
  return (
    <>
      <div className="app-wrapper" dir={dir}>
        <Header data={pageProps.data.common} />
        <Main>{children}</Main>
        <Footer data={pageProps.data.common} />
      </div>
      <style jsx global>
        {`
          html {
            min-height: 100% !important;
            height: 100%;
            scroll-behavior: smooth;
          }
          body {
            min-height: 100% !important;
            height: 100%;
          }
          #__next {
            min-height: -webkit-fill-available;
            height: 100%;
          }
          .app-wrapper {
            display: flex;
            flex-direction: column;
            min-height: -webkit-fill-available;
          }
          *:focus-visible {
            outline: none !important;
            box-shadow: 0 0 0 2px ${theme.colors.primary} !important;
            border-radius: ${theme.borderRadius['2xl']};
          }
        `}
      </style>
    </>
  )
}
