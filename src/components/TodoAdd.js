import React, { useState, useContext } from 'react';
import { HStack, Input, useColorMode, useToast, IconButton } from '@chakra-ui/react';
import TodoContext from '../context/todo/todoContext';
import { HiPlus } from 'react-icons/hi';
import { nanoid } from 'nanoid';

const TodoAdd = () => {

  const { addTodo } = useContext(TodoContext);
  const [term, setTerm] = useState('');

  const toast = useToast();

  const { colorMode } = useColorMode();

  const onChange = (e) => {
    setTerm(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!term) {
      toast({
        title: "No content",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    addTodo({
      id: nanoid(),
      content: term,
      taskAdded: new Date()
    });
    setTerm('');
  }

  return (
    <form onSubmit={onSubmit}>
      <HStack mt="8" mb="4" >
        <Input
          variant="filled"
          placeholder="Add New Task"
          value={term}
          onChange={onChange}
        />
        <IconButton
          type="submit"
          icon={<HiPlus />}
          isRound="true"
          size="md"
          backgroundColor={colorMode === "dark" ? "whiteAlpha.100" : "gray.400"}
          _hover={{ bg: colorMode === "dark" ? "whiteAlpha.300" : "gray.500" }}
          color="whiteAlpha.800"
        />
      </HStack>
    </form>
  )
}

export default TodoAdd;