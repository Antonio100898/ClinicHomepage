import preval from 'next-plugin-preval'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'

async function getTheme() {
  const fullConfig = resolveConfig(tailwindConfig)
  return fullConfig.theme
}

export default preval(getTheme())
