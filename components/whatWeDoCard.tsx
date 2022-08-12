import { useLocale } from '@/lib/hooks'
import Heading from './data-components/heading-text'
import Paragraph from './data-components/small-text'

export default function WhatWeDoCard({
  card,
}: {
  card: {
    title: string
    text: string
    imagePath: string
  }
}) {
  const { dir } = useLocale()
  const { imagePath, text, title } = card
  return (
    <div className="rounded-[30px] shadow-4xl md:w-[20%] lg:w-[340px] sm:mx-4 h-[480px] overflow-hidden">
      <div className="bg-contact-bg flex justify-center h-1/2">
        <img className="w-1/3" src={imagePath} />
      </div>
      <div
        className={`px-5 ${
          dir === 'rtl' ? 'text-right' : 'text-left'
        } pt-10 h-1/2`}
      >
        <Heading className="font-bold">{title}</Heading>
        <Paragraph>{text}</Paragraph>
      </div>
    </div>
  )
}
