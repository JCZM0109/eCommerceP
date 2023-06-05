
import { Box, ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

import '@fontsource/spartan/400.css'
import '@fontsource/spartan/700.css'
import { TopBar } from '@/components/TopBar'
import { Header } from '@/components/Header'


export const buttonTheme = defineStyleConfig({
  defaultProps: {
    variant: 'primary',
  },
  baseStyle: {
    fontWeight: 'normal',
    textTransform: 'uppercase',
    borderRadius: 'none',
    paddinX: '1.5rem',
    _hover: {
      bgColor: 'brand.800',
    },
  },
  sizes: {
    sm: {
      fontSize: '0.75rem',
    },
    md: {
      fontSize: '0.8125rem',
    },
    lg: {
      fontSize: '0.8125rem',
    },
    xl: {
      fontSize: '1rem',
      height: '3.5556rem',
      paddingX: '3rem',
    },
  },
  variants: {
    primary: {
      bgColor: 'brand.900',
      color: 'white',
    },
    danger: {
      bgColor: 'red.500',
    },
  },
})


const theme = extendTheme({
  fonts: {
    heading: `'Spartan', sans-serif`,
    body: `'Spartan', sans-serif`,
  },
  components: {
    Button: buttonTheme,
    Container: {
      baseStyle: {
        maxW: '71.375rem',
      }
    }
  },
  colors: {
    brand: {
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
      <TopBar />
      <Box marginBottom={{ base: "0", lg: "32px" }}>
        <Header />
      </Box>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
