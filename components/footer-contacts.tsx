import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function FooterContacts({
  data,
}: {
  data: {
    imagePath: string
    linkType: string
    linkValue: string
    text: string
  }[]
}) {
  const phoneText1 = data[0]['text']
  const phoneText2 = data[1]['text']
  const adressText = data[2]['text']
  const email = data[3]['text']
  return (
    <>
      <FooterContactsItem
        imagePath="icons/phone-fullfiled.svg"
        link={phoneText1}
        text={phoneText1}
        text2={phoneText2}
        type="tel"
      />
      <FooterContactsItem
        imagePath="icons/email-fullfilled.svg"
        link={email}
        type="email"
      />
      <FooterContactsItem
        type="adress"
        imagePath="icons/adress-fullfilled.svg"
        link={adressText}
      />
    </>
  )
}

const FooterContactsItem = ({
  link,
  imagePath,
  text,
  text2,
  type,
}: {
  link: string
  imagePath: string
  text?: string
  text2?: string
  type: string
}) => {
  const [itemLink, setLink] = useState<string>('')

  useEffect(() => {
    switch (type) {
      case 'tel':
        setLink('tel:' + link)
        break
      case 'adress':
        setLink('https://www.google.com/maps/place/' + link)
        break
      case 'email':
        setLink('mailto:' + text)
        break
      default:
        setLink(link)
    }
  }, [link, text, type])
  return (
    <div className="flex items-center gap-x-4 my-2">
      <a href={itemLink} target="_blank" rel="noreferrer">
        <div className="flex items-center justify-center">
          <img className="w-[24px] h-[24px]" src={imagePath} />
        </div>
      </a>
      <div className="flex flex-col">
        <p className="text-xs">{text ? text : link}</p>
        {text2 && <p>{text2}</p>}
      </div>
    </div>
  )
}
