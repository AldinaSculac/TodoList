import React, { useContext } from 'react';
import { Spacer, VStack, HStack, IconButton, Text, StackDivider, Badge, useColorMode } from '@chakra-ui/react';
import TodoContext from '../context/todo/todoContext';
import { FcFullTrash } from 'react-icons/fc';

const TodoList = () => {

  const { todos, deleteTodo } = useContext(TodoContext);
  const { colorMode } = useColorMode();

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
        return <HStack key={item.id}>
          <Text>{item.content}</Text>
          <Spacer />
          <IconButton
            icon={<FcFullTrash />}
            isRound="true"
            onClick={() => deleteTodo(item.id)}
          />
        </HStack>
      })}
    </VStack>
  )
}

export default TodoList;