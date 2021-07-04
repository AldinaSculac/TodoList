import React from 'react';
import { Heading, VStack, IconButton, useColorMode } from '@chakra-ui/react';
import TodoState from './context/todo/TodoState';
import Header from './components/Header';

const App = () => {
  return (
    <TodoState>
      <div>
        <Header />
      </div>
    </TodoState>

  );
}

export default App;