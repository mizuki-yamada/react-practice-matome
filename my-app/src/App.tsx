import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";

import theme from './theme/theme';
import "./App.css";
import { Router } from './router/Router';

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
