import {ChakraProvider, theme, ThemeProvider} from '@chakra-ui/react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { myNewTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={myNewTheme}>
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}
export default MyApp;
