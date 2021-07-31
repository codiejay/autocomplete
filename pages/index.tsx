import { Box, Flex, Input, Select, Spacer } from '@chakra-ui/react';
import SearchBox from '../components/SearchBox';

export default function Home() {
  return (
   <Flex alignItems='center' justifyContent='center' p='15% 0 25% 0'>
     <SearchBox />
   </Flex> 
   
  )
}
