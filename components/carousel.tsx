import { WhatWeDoCards } from '@/lib/interface'
import Carousel from 'react-material-ui-carousel'
import WhatWeDoCard from './whatWeDoCard'

const SlidesCarousel = ({ cards }: { cards: WhatWeDoCards }) => {
  return (
    <Carousel IndicatorIcon={false}>
      {cards.map((card) => (
        <WhatWeDoCard key={card.text} card={card} />
      ))}
    </Carousel>
  )
}

export default SlidesCarousel
