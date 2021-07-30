import { Box, Flex, Input, Select, Spacer } from '@chakra-ui/react';
import SearchBox from '../components/SearchBox';

export default function Home() {
  return (
   <Flex bg='#2d3748' alignItems='center' justifyContent='center' p='20% 0'>
     <SearchBox />
   </Flex> 
   
  )
}
