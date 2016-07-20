import { REQUEST_USER, RECEIVE_USER, SET_USERNAME } from './../actions/user'

function userReducer( state = {
  userData: {
    login: 'sircelsius'
  },
  isFetching: false
}, action) {
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
    case SET_USERNAME:
      return Object.assign({}, state, {
        username: action.username
      })
    default:
      return state
  }
}

export default userReducer
