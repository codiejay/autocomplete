import { Box, Button, VStack } from '@chakra-ui/react';
import { useState } from 'react';

type SearchResultProps = { 
  resultText: string,
  captureSelect: (text: string) => (void),
};

export const SearchResults = ({resultText, captureSelect}: SearchResultProps) => {
  const [bttnVariant, setBttnVariant] = useState('regular')
  return (
    <VStack>
      <Button 
        variant={bttnVariant} 
        onClick={() => {captureSelect(resultText); bttnVariant === 'regular' ? setBttnVariant('selectedBttn') : setBttnVariant('regular')}}
      >
        {resultText}
      </Button>
    </VStack>
  )
}

export default SearchResults;
