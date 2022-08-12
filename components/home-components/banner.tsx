import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import BlueButton from '../data-components/blue-button'
import { PageHeader } from '../data-components/header-text'

export default function Banner({ data }: HomePageType) {
  return (
    <div id="top-header">
      <div className="wrapper">
        <div className="background"></div>
        <div className="lg:w-[40%] flex flex-col items-center text-center sm:px-4">
          <PageHeader>{data.homepage.title}</PageHeader>
          <div className="lg:text-lg text-medium w-1/2 sm:w-5/6">
            {data.homepage.description}
          </div>
          <BlueButton className="mt-20 text-lg">
            {data.homepage.getToKnowUsButton}
          </BlueButton>
        </div>
        <img className="img sm:hidden left-0 z-10" src="girl.svg" />
        <img className="img sm:hidden top-0 left-40 z-2" src="kids.svg" />
        <img className="img sm:hidden right-80 -bottom-40" src="women.svg" />
        <img className="img sm:hidden top-0 right-[50%]" src="hands.svg" />
        <img className="img sm:hidden top-20 right-40" src="dad-with-kid.svg" />
        <img
          className="img sm:hidden left-80 -bottom-40"
          src="mom-with-kid.svg"
        />
        <img className="img sm:hidden right-0 top-80" src="family.svg" />
        <style jsx>{`
          div.wrapper {
            width: 100%;
            height: 90vh;
            margin-top: -${themePreval.height.header};
            padding-top: ${themePreval.height.header};
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          div.background {
            position: absolute;
            z-index: -1;
            inset: 0;
            background: linear-gradient(
              109.17deg,
              #f4f3fd 38.49%,
              #d3d1fc 72.36%
            );
          }
          .img {
            position: absolute;
            width: 15%;
            min-width: 15vw;
          }
        `}</style>
      </div>
    </div>
  )
}
