import fetch from 'isomorphic-fetch'

import { ENDPOINT_BASE, USERS_ENDPOINT} from '../api'

export const REQUEST_USER = `REQUEST_USER`
export const RECEIVE_USER = `RECEIVE_USER`

function requestUser(username) {
  return {
    type: REQUEST_USER,
    username
  }
}

function receiveUser(userData) {
  return {
    type: RECEIVE_USER,
    userData
  }
}

export function fetchUserInformation(username) {
  return (dispatch, getState) => {
    dispatch(requestUser(username));
    return fetch(`${ENDPOINT_BASE}${USERS_ENDPOINT}${username}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)))
  }
}
