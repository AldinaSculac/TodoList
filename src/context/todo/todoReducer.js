import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        action.payload,
        ...state
      ]
    case EDIT_TODO:
      return [...state.map(todo => todo.id === action.payload.id ? {...todo, content:action.payload.task} 
          : todo)
      ]
    case DELETE_TODO:
      return [...state.filter(todo => todo.id !== action.payload)]
    default:
      return state;
  }
};