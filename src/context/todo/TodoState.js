import React, { useReducer, useEffect } from 'react';
import TodoContext from './todoContext';
import TodoReducer from './todoReducer';

import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from '../types';

const TodoState = props => {
  const initialState = {
    todos: [],
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // Add Todo
  const addTodo = (task) => {
    dispatch({
      type: ADD_TODO,
      payload: task
    });
  }

  // Edit Todo
  const editTodo = (task, id) => {
    dispatch({
      type: EDIT_TODO,
      payload: {task, id}
    });
  }

  // Delete Todo
  const deleteTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  }


  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        editTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>)
}

export default TodoState;