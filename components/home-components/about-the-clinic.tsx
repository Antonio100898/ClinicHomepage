import { HomePageType } from '@/lib/interface'
import BlueButton from '../data-components/blue-button'
import Heading from '../data-components/heading-text'
import Paragraph from '../data-components/small-text'
import { WrapperLarge } from '../wrapper'

export default function AboutTheClinic({ data }: HomePageType) {
  return (
    <WrapperLarge
      id="about-us"
      className="lg:grid-cols-2 sm:grid-cols-1 lg:p-20 sm:px-5"
    >
      <div className="justify-self-end sm:py-10">
        <img src="love-hands.svg" />
      </div>
      <div className="lg:p-10 grid grid-cols-1  lg:w-2/3">
        <Heading>{data.homepage.aboutHeading}</Heading>
        <p className="lg:text-2xl sm:text-[36px] font-bold">
          {data.homepage.aboutTitle}
        </p>
        <Paragraph>{data.homepage.aboutUsText}</Paragraph>
        <div className="sm:pt-5">
          <BlueButton className="text-medium">
            {data.homepage.aboutUsButton}
          </BlueButton>
        </div>
      </div>
    </WrapperLarge>
  )
}
