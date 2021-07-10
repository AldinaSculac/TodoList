import React, { useState, useContext } from 'react';
import { HStack, Input, useColorMode, useToast, IconButton } from '@chakra-ui/react';
import TodoContext from '../context/todo/todoContext';
import { HiCheck} from 'react-icons/hi';

const TodoEdit = (props) => {
  const {inputDefaultValue, taskId, activeEdit} = props;
  const { editTodo } = useContext(TodoContext);
  const [term, setTerm] = useState(inputDefaultValue);
  const [closeEdit, setCloseEdit] = useState(false);

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

    editTodo(term, taskId);
    //setTerm('');
    setCloseEdit(true);
    activeEdit();
  }

  return (
    <form onSubmit={onSubmit}>
      <HStack>
        <Input
          variant="filled"
          value={term}
          onChange={onChange}
        />
        <IconButton
          type="submit"
          icon={<HiCheck />}
          isRound="true"
          size="xs"
          backgroundColor={colorMode === "dark" ? "whiteAlpha.100" : "gray.400"}
          _hover={{ bg: colorMode === "dark" ? "whiteAlpha.300" : "gray.500" }}
          color="whiteAlpha.800"
        />
      </HStack>
    </form>
  )
}

export default TodoEdit;