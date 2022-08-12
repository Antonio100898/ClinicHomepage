import { Common, FormValues } from '@/lib/interface'
import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import BlueButton from './data-components/blue-button'
import FormInput from './form-input'

export default function ContactUsForm({ data }: { data: Common }) {
  const {
    contactUsFormEmail,
    contactUsFormFirstName,
    contactUsFormLastName,
    contactUsFormMessage,
    contactUsFormPhone,
    contactUsFormSendButton,
    contactUsFormErrorFirstNameMissing,
    contactUsFormErrorLastNameMissing,
    contactUsFormErrorEmailMissing,
    contactUsFormErrorEmailInvalid,
    contactUsFormErrorPhoneMissing,
    contactUsFormErrorPhoneInvalid,
    contactUsFormErrorMessageMissing,
  } = data

  const validateForm = (values: FormValues) => {
    const errors = {} as FormValues
    if (!values.firstName) {
      errors.firstName = contactUsFormErrorFirstNameMissing
    }
    if (!values.email) {
      errors.email = contactUsFormErrorEmailMissing
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = contactUsFormErrorEmailInvalid
    }
    if (!values.lastName) {
      errors.lastName = contactUsFormErrorLastNameMissing
    }
    if (!values.phone) {
      errors.phone = contactUsFormErrorPhoneMissing
    }
    if (!values.more) {
      errors.more = contactUsFormErrorMessageMissing
    }
    if (
      values.phone &&
      !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(values.phone)
    ) {
      errors.phone = contactUsFormErrorPhoneInvalid
    }

    return errors
  }
  return (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        more: '',
      }}
      validate={validateForm}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        alert('Your info has been successfully submited, thank you!')
        setSubmitting(false)
        resetForm()
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className="bg-light rounded-[36px] shadow-4xl md:w-10/12 lg:w-7/12 gap-x-4 px-8 lg:grid sm:py-4 sm:mt-16 sm:grid-cols-1 grid-cols-2 lg:px-10 md:py-14 lg:py-14"
        >
          <FormInput
            label={contactUsFormFirstName}
            name="firstName"
            type="text"
            error={errors.firstName}
            touched={touched.firstName}
          />
          <FormInput
            label={contactUsFormLastName}
            name="lastName"
            type="text"
            error={errors.lastName}
            touched={touched.lastName}
          />
          <FormInput
            label={contactUsFormEmail}
            name="email"
            type="email"
            error={errors.email}
            touched={touched.email}
          />
          <FormInput
            label={contactUsFormPhone}
            name="phone"
            type="phone"
            error={errors.phone}
            touched={touched.phone}
          />
          <FormInput
            label={contactUsFormMessage}
            name="more"
            type="text"
            error={errors.more}
            touched={touched.more}
            className="col-span-2"
          />
          <BlueButton className="row-start-4 my-8 text-medium" type="submit">
            {contactUsFormSendButton}
          </BlueButton>
        </form>
      )}
    </Formik>
  )
}
