import {ChakraProvider, theme, ThemeProvider} from '@chakra-ui/react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}
export default MyApp;
