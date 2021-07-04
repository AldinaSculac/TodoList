import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColoMode: false
}

const theme = extendTheme({
  config,
})

//<ColorModeScript initialColorMode="light" /> 
ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);