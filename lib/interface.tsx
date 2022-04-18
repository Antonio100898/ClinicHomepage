export type HomePageType = {
  data: {
    homepage: Homepage
    common: Common
  }
}

export type CommonType = {
  data: Common
}

export type Homepage = {
  title: string
  description: string
  getToKnowUsButton: string
  aboutHeading: string
  aboutTitle: string
  aboutUsText: string
  aboutUsButton: string
  whatWeDoHeading: string
  whatWeDoTitle: string
  whatWeDoCards: Array<{
    title: string
    text: string
    imagePath: string
  }>
  contactUsHeading: string
  contactUsTitle: string
  contactUsText: string
}

export type Common = {
  contactUsLinks: Array<{
    text: string
    linkType: string
    imagePath: string
    linkValue: string
  }>
  appLinks: Array<{
    text: string
    relativeLink: string
  }>
  languageNames: Array<{
    he: string
    en: string
    ar: string
    am: string
    ti: string
  }>
  contactUsFormFirstName: string
  contactUsFormLastName: string
  contactUsFormEmail: string
  contactUsFormPhone: string
  contactUsFormMessage: string
  contactUsFormSendButton: string
  footerMenuTitle: string
  footerContactUsTitle: string
  footerScheduleButton: string
  footerSupportUsButton: string
}

export function HOMEPAGE_QUERY(locale: string) {
  return `
query Homepage {
  homepage(locale: ${locale}) {
    title
    description
    getToKnowUsButton
    aboutHeading
    aboutTitle
    aboutUsText
    aboutUsButton
    whatWeDoHeading
    whatWeDoTitle
    whatWeDoCards {
      title
      text
      imagePath
    }
    contactUsHeading
    contactUsTitle
    contactUsText
  }
  ${COMMON_QUERY_STRING(locale)}
}`
}

export const COMMON_QUERY_STRING = (locale: string) => `
common(locale: ${locale}) {
  languageNames{
    he
    en
    ar
    am
    ti
  }
  contactUsLinks {
    text
    linkType
    linkValue
    imagePath
    linkValue
  }
  appLinks {
    text
    relativeLink
  }
  appLinks {
    text
    relativeLink
  }
  contactUsFormFirstName
  contactUsFormLastName
  contactUsFormEmail
  contactUsFormPhone
  contactUsFormMessage
  contactUsFormSendButton
  contactUsFormSuccessMessage
  contactUsFormErrorFirstNameMissing
  contactUsFormErrorLastNameMissing
  contactUsFormErrorEmailMissing
  contactUsFormErrorEmailInvalid
  contactUsFormErrorPhoneMissing
  contactUsFormErrorPhoneInvalid
  contactUsFormErrorMessageMissing
  footerMenuTitle
  footerContactUsTitle
  footerScheduleButton
  footerSupportUsButton
}
`
