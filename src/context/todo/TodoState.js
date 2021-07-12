import React, { useReducer, useEffect } from 'react';
import TodoContext from './todoContext';
import TodoReducer from './todoReducer';

import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from '../types';

const TodoState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(TodoReducer, initialState, () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  // Fetch Todos from localStorage


  // Save Todos to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

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
        todos: state,
        addTodo,
        editTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>)
}

export default TodoState;