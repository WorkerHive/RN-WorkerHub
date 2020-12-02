import * as types from './types';
import { baseURL } from '../conf'

export function auth(username, password, cb){
  return (dispatch, getState) => {
    console.log("AUTH")
  return fetch(`${baseURL}/auth`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then((r) =>r.json()).then((r) => {
    console.log("AUTH", r)
    if(r.token){
      dispatch({type: types.SET_TOKEN, token: r.token})
      cb()
    }
  })    
  }
}
