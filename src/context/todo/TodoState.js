import React, { useReducer } from 'react';
import TodoContext from './todoContext';
import TodoReducer from './todoReducer';

import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SET_LOADING
} from '../types';

const TodoState = props => {
  const initialState = {
    todos: [],
    todo: {},
    loading: false
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // Add Todo
  const addTodo = (task) => {
    //setLoading();
    dispatch({
      type: ADD_TODO,
      payload: task
    });
  }

  // Edit Todo
  const deleteTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
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