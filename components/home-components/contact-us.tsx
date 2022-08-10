import { useLocale } from '@/lib/hooks'
import { HomePageType } from '@/lib/interface'
import ContactUsForm from '../contact-us-form'
import ContactUsItem from '../contact-us-item'
import WhiteButton from '../data-components/white-button'
import { WrapperLarge } from '../wrapper'

export default function ContactUs({ data }: HomePageType) {
  const { dir } = useLocale()
  return (
    <WrapperLarge
      id="contact-us"
      className="lg:grid-cols-2 sm:grid-cols-1 lg:py-36 sm:px-4 sm:pb-10 relative"
    >
      <div className="absolute bg-contact-bg w-full lg:h-2/3 sm:h-1/2 bottom-0 z-bg"></div>
      <img className="absolute left-0 bottom-0 z-bg" src="circle-bottom.svg" />
      <img
        className="sm:hidden absolute top-80 right-0 z-bg"
        src="circle-right.svg"
      />
      <div
        className={`lg:w-6/12 lg:mt-48 ${
          dir === 'rtl' ? 'lg:mr-60' : 'lg:ml-60'
        }`}
      >
        <WhiteButton className="text-medium lg:font-bold sm:px-0">
          {data.homepage.contactUsHeading}
        </WhiteButton>
        <h2 className="text-xl font-bold">{data.homepage.contactUsTitle}</h2>
        <p>{data.homepage.contactUsText}</p>
        <div className="w-full flex sm:flex-col flex-wrap pt-8 gap-y-4">
          {data.common.contactUsLinks.map((item) => (
            <ContactUsItem key={item.text} item={item} />
          ))}
        </div>
      </div>
      <ContactUsForm data={data.common} />
    </WrapperLarge>
  )
}
