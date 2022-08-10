import { useEffect, useState } from 'react'

export default function ContactUsItem({
  item,
}: {
  item: {
    imagePath: string
    linkType: string
    linkValue: string
    text: string
  }
}) {
  const [link, setLink] = useState<string>('')
  const { imagePath, linkType, linkValue, text } = item
  useEffect(() => {
    switch (linkType) {
      case 'tel':
        setLink('tel:' + linkValue)
        break
      case 'address':
        setLink('https://www.google.com/maps/place/' + text)
        break
      case 'email':
        setLink('mailto:' + text)
        break
      default:
        setLink(linkValue)
    }
  }, [linkType])
  return (
    <div className="flex items-center lg:w-1/2 sm:w-7/12 gap-x-6">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="bg-blue flex items-center justify-center rounded-[50%] w-[44px] h-[44px]">
          <img src={imagePath} />
        </div>
      </a>
      <div className="flex flex-col w-8/12">
        <p className="text-xs">{text}</p>
      </div>
    </div>
  )
}
