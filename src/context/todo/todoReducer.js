import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload,
        //loading: false
      };
    default:
      return state;
  }
};