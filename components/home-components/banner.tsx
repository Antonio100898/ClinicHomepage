import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import React from 'react'
import { PageHeader } from '../data-components/header-text'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
      <div className="wrapper">
        <div className="background"></div>
        <PageHeader>{data.homepage.title}</PageHeader>

        <style jsx>{`
          div.wrapper {
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            position: relative;
          }
          div.background {
            position: absolute;
            z-index: -1;
            inset: 0;
            background: linear-gradient(
              109.17deg,
              rgba(1, 157, 177, 0.21) 38.49%,
              #019db1 98.95%
            );
          }
        `}</style>
      </div>
    </div>
  )
}
