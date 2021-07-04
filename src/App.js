import React from 'react';
import { VStack } from '@chakra-ui/react';
import TodoState from './context/todo/TodoState';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

const App = () => {
  return (
    <TodoState>
      <Header />
      <VStack>
        <TodoAdd />
        <TodoList />
      </VStack>
    </TodoState>
  );
}

export default App;