import React, { useContext, useState } from 'react';
import { 
  Spacer, 
  HStack, 
  IconButton, 
  Text, 
  useColorMode,
} from '@chakra-ui/react';
import TodoContext from '../context/todo/todoContext';
import { BsPencil, BsTrash } from 'react-icons/bs';
import TodoEdit from './TodoEdit';

const f_cleanDate = (date) => {
  if(typeof date === 'string') {
    const newDate = new Date(date);
    const cleanDate = newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear();
    return cleanDate;
  } else {
    const cleanDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    return cleanDate;
  }
}

const TodoItem = (props) => {
  const {itemContent, itemId, itemAdded} = props;
  const { deleteTodo } = useContext(TodoContext);
  const { colorMode } = useColorMode();
  const [showEdit, setShowEdit] = useState(false);

  const activeEdit = () => {
    setShowEdit(false)
  }


  return (
    <HStack>
          {showEdit ? 
          (<TodoEdit 
            inputDefaultValue={itemContent} 
            taskId={itemId}
            activeEdit={activeEdit}
            />) 
          : 
          (<Text style={{fontWeight: 'bold'}}>{itemContent}</Text>)}
          <Text 
            color={colorMode === "dark" ? "whiteAlpha.500" : "gray.500"}
            fontSize='xs'
          >
            {f_cleanDate(itemAdded)}</Text>
          <Spacer />
          { !showEdit ?
            (<IconButton
              icon={<BsPencil />}
              isRound="true"
              onClick={() => setShowEdit(true)}
            />)
            :
            null
          }
          <IconButton
            icon={<BsTrash />}
            isRound="true"
            onClick={() => deleteTodo(itemId)}
          />
        </HStack>
  )
}

export default TodoItem;
