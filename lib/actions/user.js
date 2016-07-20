import fetch from 'isomorphic-fetch'

import { ENDPOINT_BASE, USERS_ENDPOINT} from '../api'

export const REQUEST_USER = `REQUEST_USER`
export const RECEIVE_USER = `RECEIVE_USER`
export const SET_USERNAME = 'SET_USERNAME'

function requestUser(username) {
  return {
    type: REQUEST_USER,
    username
  }
}

function receiveUser(userData) {
  return {
    type: RECEIVE_USER,
    userData,
  }
}

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    username
  }
}

function fetchUserInformation(username) {
  return dispatch => {
    dispatch(requestUser(username));
    return fetch(`${ENDPOINT_BASE}${USERS_ENDPOINT}${username}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)))
  }
}

function shouldFetch(state) {
  return !state.userReducer.isFetching
}

export function fetchUserInformationIfNeeded(username) {
  return (dispatch, getState) => {
    if(shouldFetch(getState())) {
      return dispatch(fetchUserInformation(username))
    }
  }
}
