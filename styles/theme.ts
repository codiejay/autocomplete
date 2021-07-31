// 1. Import the function `extendTheme`
import { extendTheme, ThemeConfig } from '@chakra-ui/react';


const config : ThemeConfig =  {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
import { mode, transparentize } from '@chakra-ui/theme-tools'
type Dict = Record<string, any>

function selectBttn(props: Dict) {
  const { colorScheme: c } = props
  return {
    bg: 'primary',
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
      color: 'white',
      outline: 'none'
    },
  }
}

export  const myNewTheme = extendTheme({
  colors: { 
    primary: '#2d3748',
    secondary: '#319795',
    highlight: '#00C9A7',
    warning: '#FFC75F',
    danger: '#C34A36',
  },
  components: { 
    Button: {
      variants: {
        selectBttn
      }
    }
  },
  config,
})