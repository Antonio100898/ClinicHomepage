import { useLocale } from '@/lib/hooks'
import { HomePageType } from '@/lib/interface'
import SlidesCarousel from '../carousel'
import { PageHeader } from '../data-components/header-text'
import WhatWeDoCard from '../whatWeDoCard'
import { WrapperLarge } from '../wrapper'

export default function WhatWeDo({ data }: HomePageType) {
  const { dir } = useLocale()
  return (
    <WrapperLarge className="lg:text-center pt-20 sm:pb-10 text-lg">
      <h2
        className={`${
          dir === 'rtl' ? 'sm:pr-4' : 'sm:pl-4'
        } lg:text-lg sm:text-medium text-red`}
      >
        {data.homepage.whatWeDoHeading}
      </h2>
      <PageHeader className="sm:hidden">
        {data.homepage.whatWeDoTitle}
      </PageHeader>
      <div className="lg:px-44 lg:my-10 lg:flex justify-evenly sm:hidden">
        {data.homepage.whatWeDoCards.map((card) => (
          <WhatWeDoCard key={card.title} card={card} />
        ))}
      </div>
      <div className="lg:hidden pt-4">
        <SlidesCarousel cards={data.homepage.whatWeDoCards} />
      </div>
    </WrapperLarge>
  )
}
