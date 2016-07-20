import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import  { setUsername, fetchUserInformationIfNeeded } from './../actions/user'

class User extends Component {
  constructor(props) {
    super(props)
    this.fetchInfo = this.fetchInfo.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
  }

  render() {
    const { userData, username } = this.props
    return (
      <div>
        <input type="text" defaultValue={username} onBlur={this.handleUsernameChange} />
        <button onClick={this.fetchInfo} >Get User Info</button>

        <div>
          <img src={userData.avatar_url}/>
          {userData.login || 'ERROR'}
        </div>
      </div>
    )
  }

  fetchInfo(e) {
    e.preventDefault()

    const { dispatch, username } = this.props
    dispatch(fetchUserInformationIfNeeded(username))
  }

  handleUsernameChange(e) {
    e.preventDefault()

    const { dispatch } = this.props
    const username = e.target.value

    dispatch(setUsername(username))
  }
}

User.propTypes = {
  userData: PropTypes.object.isRequired,
  username: PropTypes.string,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { userData, username } = state.userReducer

  return {
    userData,
    username
  }
}

export default connect(mapStateToProps)(User)


