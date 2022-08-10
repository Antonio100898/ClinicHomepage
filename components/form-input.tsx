import { Field } from 'formik'
import SmallHeading from './data-components/small-heading-text'

export default function FormInput({
  className,
  label,
  name,
  type,
  error,
  touched,
}: {
  error?: string
  touched?: boolean
  type: string
  name: string
  className?: string
  label: string
}) {
  return (
    <div className={`${name === 'more' && className} flex flex-col`}>
      <label className="my-2" htmlFor={name}>
        <SmallHeading>{label}</SmallHeading>
      </label>
      <Field
        className={`h-1/2 rounded-[8px] px-2 py-4 text-s shadow-4xl ${
          name === 'more' && 'h-[110px]'
        }`}
        name={name}
        type={type}
      />
      <div className="text-red">{error && touched && error}</div>
    </div>
  )
}
