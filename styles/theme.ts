// 1. Import the function `extendTheme`
import { extendTheme, ThemeConfig } from '@chakra-ui/react';


const config : ThemeConfig =  {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
import { mode, transparentize } from '@chakra-ui/theme-tools'
type Dict = Record<string, any>

function regular(props: Dict) {
  const { colorScheme: c } = props
  return {
    mb:'1rem',
    bg: 'primary',
    padding: '22px',
    textAlign: 'left',
    height: 'auto',
    width: '100%',
    lineHeight: 'normal',
    color: 'white',
    justifyContent: 'end',
    _hover: {
      bg: 'highlight'
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props),
      outline: 'none'
    },
  }
}

function selectedBttn(props: Dict) {
  const { colorScheme: c } = props
  return {
    mb:'1rem',
    bg: 'secondary',
    padding: '22px',
    textAlign: 'left',
    height: 'auto',
    width: '100%',
    lineHeight: 'normal',
    color: 'white',
    justifyContent: 'end',
    _hover: {
      bg: 'secondary'
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props),
      outline: 'none'
    },
  }
}

export  const myNewTheme = extendTheme({
  colors: { 
    primary: '#475367',
    secondary: '#319795',
    highlight: '#1d2635',
    warning: '#FFC75F',
    danger: '#C34A36',
  },
  components: { 
    Button: {
      variants: {
        regular,
        selectedBttn
      }
    }
  },
  config,
})