import React from 'react';
import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Button colorScheme='teal'>aaaaaa</Button>
      </ChakraProvider>
    </div>
  );
}

export default App;
