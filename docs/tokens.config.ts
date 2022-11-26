import { defineTheme } from 'pinceau'
import colors from 'tailwindcss/colors'

const rose = colors.rose
const zinc = colors.zinc

export default defineTheme({
  colors: {
    primary: {
      50: rose['50'],
      100: rose['100'],
      200: rose['200'],
      300: rose['300'],
      400: rose['400'],
      500: rose['500'],
      600: rose['600'],
      700: rose['700'],
      800: rose['800'],
      900: rose['900']
    },
    secondary: {
      50: zinc['50'],
      100: zinc['100'],
      200: zinc['200'],
      300: zinc['300'],
      400: zinc['400'],
      500: zinc['500'],
      600: zinc['600'],
      700: zinc['700'],
      800: zinc['800'],
      900: zinc['900']
    }
  },
})