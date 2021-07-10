import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
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
          content: action.payload,
          taskAdded: new Date()
        },
        ...state.todos
        ]
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, content:action.payload.task} 
          : todo)
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};