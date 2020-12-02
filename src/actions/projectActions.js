import * as types from './types';
import { baseURL } from '../conf';

export function getProjects(){
  return (dispatch, getState) => {
    return fetch(`${baseURL}/projects`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getState().auth.token
      }
    }).then((r)=> {
      return r.json()
    }).then((r) => {
      dispatch({type: types.SET_PROJECTS, projects: r})
    })
  }
}
