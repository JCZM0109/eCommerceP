
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
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: '0 2.5rem',
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
      100: '#f1f1f1',
      200: '#d4d4d4',
      300: '#b8b8b8',
      400: '#9c9c9c',
      500: '#808080',
      600: '#636363',
      700: '#474747',
      800: '#2a2a2a',
      900: '#121212',
    }
  }
})




export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
