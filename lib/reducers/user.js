import { REQUEST_USER, RECEIVE_USER } from './../actions/user'

function userReducer( state = {}, action) {
  switch(action.type) {
    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true,
        username: action.username
      })
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        userData: action.userData
      })
    default:
      state
  }
}

export default userReducer
