
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

import '@fontsource/spartan/400.css'
import '@fontsource/spartan/700.css'

export const buttonTheme = defineStyleConfig({
  defaultProps: {
    colorScheme: 'brand',
  },
})

const theme = extendTheme({
  fonts: {
    heading: `'Spartan', sans-serif`,
    body: `'Spartan', sans-serif`,
  },
  components: {
    Button: buttonTheme
  },
  colors: {
    brand:{
      100: '#000',
      200: '#000',
      300: '#000',
      400: '#000',
      500: '#000',
      600: '#000',
      700: '#000',
      800: '#000',
      900: '#000',
    }
  },
})




export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
