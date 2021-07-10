import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SET_LOADING
} from '../types';
import { nanoid } from 'nanoid';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
        {
          id: nanoid(),
          content: action.payload
        },
        ...state.todos
        ]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};