import { Box, Flex, Input, Select, Spacer } from '@chakra-ui/react';
import SearchBox from '../components/SearchBox';
export const getStaticProps = async () => {
  
  let data = await fetch('http://localhost:8080/api/countries');
  let result = await data.json();
  return { 
    props: {countries: result}
  }
}


export default function Home({countries}: {countries: Array<any>}){
  console.log(countries);
  
  return (
   <Flex alignItems='center' justifyContent='center' p='15% 0 25% 0'>
     <SearchBox data={countries} />
   </Flex> 
   
  )
}
