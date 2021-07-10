import React, { useContext } from 'react';
import { 
  VStack, 
  StackDivider, 
  Badge, 
  useColorMode,
} from '@chakra-ui/react';
import TodoContext from '../context/todo/todoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, deleteTodo } = useContext(TodoContext);
  const { colorMode } = useColorMode();

  console.log(todos);

  if (!todos.length) {
    return (
      <Badge
        colorScheme={colorMode === "dark" ? "whiteAlpha.100" : "purple"}
        p="4"
        m="4"
        borderRadius="lg"
        color="gray.600"
        fontSize="sm"
        fontWeight="medium"
        onClick={deleteTodo}
      >
        No Todos!
      </Badge>)
  }


  return (
    <VStack
      divider={<StackDivider />}
      borderColor={colorMode === "dark" ? "whiteAlpha.100" : "gray.100"}
      borderWidth="2px"
      borderRadius="lg"
      padding="4"
      width="100%" // or w
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems="stretch"
      mt={8}
    >
      {todos.map(item => {
        return <TodoItem 
          key={item.id}
          itemContent={item.content}
          itemId={item.id}
          itemAdded={item.taskAdded}
        />
      })}
    </VStack>
  )
}

export default TodoList;