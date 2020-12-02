import * as types from '../actions/types';

const INIT = {
  list: []
}

export default function projectReducer(state = INIT, action={}){
  switch(action.type){
    case types.SET_PROJECTS:
      return {
        ...state,
        list: action.projects
      }
    default:
      return state;
  }
}
