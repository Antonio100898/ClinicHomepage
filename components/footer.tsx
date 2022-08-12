import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import SmallHeading from './data-components/small-heading-text'
import WhiteButton from './data-components/white-button'
import FooterContacts from './footer-contacts'
import { WrapperLarge } from './wrapper'

export default function Footer({ data }: CommonType) {
  const { dir } = useLocale()
  return (
    <WrapperLarge>
      <footer
        id="support-us"
        className="bg-light gap-6 grid items-center justify-items-center md:grid-cols-2 lg:grid-cols-4 sm:cols-1 lg:px-60 lg:py-28 sm:py-10"
      >
        <div className="lg:justify-self-stretch">
          <img className="w-full sm:w-[200px]" src="logo.svg" />
        </div>
        <div className="flex flex-col">
          <WhiteButton className="font-bold text-xs m-1" border>
            {data.footerScheduleButton}
          </WhiteButton>
          <WhiteButton className="font-bold text-xs m-1" border>
            {data.footerSupportUsButton}
          </WhiteButton>
        </div>
        <div className="flex flex-col gap-1 sm:hidden">
          <SmallHeading>{data.footerMenuTitle}</SmallHeading>
          <ul className="leading-8">
            <li>{dir === 'rtl' ? 'האפרמה תודוא' : 'About the clinic'}</li>
            <li>{dir === 'rtl' ? 'רשק ורצ' : 'Contact Us'}</li>
            <li>{dir === 'rtl' ? 'ונב וכמת' : 'Support Us'}</li>
          </ul>
        </div>
        <div className="mt-6">
          <SmallHeading>{data.footerContactUsTitle}</SmallHeading>
          <FooterContacts data={data.contactUsLinks} />
        </div>
      </footer>
    </WrapperLarge>
  )
}
