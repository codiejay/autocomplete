import { Box, Flex, Grid, HStack, Input, Tag} from '@chakra-ui/react';
import SearchResults from './SearchResults';
import {useState} from 'react';

//Interfaces and annotations
interface SearchBoxProps { 
  data: Array<any>,
}


export const SearchBox = ({data}: SearchBoxProps) => {
  const [selectedCountry, setSelectedCountry] = useState<Array<any>>([]);
  const [searchedCountry, setSearchedCountry] = useState<Array<any>>([]);
  const [searchText, setSearchText] = useState('');

  const accpetCaptures = (text:string) => {
    let newArr = selectedCountry; 
    newArr.includes(text) ?  newArr.splice(newArr.indexOf(text), 1) : newArr.push(text);
    setSelectedCountry([...newArr]);
  }

  const updateSearch = (searchedWord:String) => {
    let newArr: Array<any> = [];
    data.map(item => {
      let itemName = item.name;
      item.name.split('').map((letters:String) => {
        if(itemName.substring(0,searchedWord.length).toLowerCase() === searchedWord.toLowerCase()) { 
          newArr.push(item.name)
        }
        itemName = itemName.substring(1)
      })
    });
    setSearchedCountry(newArr);
    return newArr;
  }

  return (
    <Flex direction='column' w='40%' maxW='400px'>
      <Grid templateColumns='repeat(3, 1fr)' gap={2}>
        {
          selectedCountry.map((item, index) => {          
            return ( 
              <Tag colorScheme="teal" key={index}>{item}</Tag>
            )
          })
        }
      </Grid>
      <Input  
        color='white'
        m='1rem auto'
        placeholder='Search for a country'
        onChange={(event) => {
          setSearchText(event.target.value)
          updateSearch(event.target.value)
        }
        } 
      />
      <Box display={searchText ? 'block' : 'none'}>
        { 
          searchedCountry.map((item, index) => {
            return ( 
              <SearchResults 
                key={index}
                resultText={item}
                captureSelect={(text) => {accpetCaptures(text)}}
              />
            )
          })
        }
      </Box>
    </Flex>
    
  )
}

export default SearchBox;