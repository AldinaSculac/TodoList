import React, { useReducer } from 'react';
import TodoContext from './todoContext';
import TodoReducer from './todoReducer';

import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SET_LOADING
} from '../types';

/*
{
  id: 1,
    content: 'Task 1'
},
{
  id: 2,
    content: 'Task 2'
}
*/

const TodoState = props => {
  const initialState = {
    todos: [
      {
        id: 1,
        content: 'Task 1'
      },
      {
        id: 2,
        content: 'Task 2'
      }
    ],
    todo: {},
    loading: false
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // Add Todo
  const addTodo = (todo) => {
    //setLoading();
    dispatch({
      type: ADD_TODO,
      payload: todo
    });
  }

  // Edit Todo
  const deleteTodo = (id) => {
    console.log(id);
    //setLoading();
    /*
    dispatch({
      type: DELETE_TODO,
      payload: todo
    });
    */
  }

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        todo: state.todo,
        loading: state.loading,
        addTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>)
}

export default TodoState;