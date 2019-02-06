import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getCurrentUser } from './util'
import Login from './Login'
import styles from './styles'

class Auth extends Component {
  constructor () {
    super()
    this.state = {
      loading: false
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentWillMount () {
    const { history } = this.props
    if (getCurrentUser()) {
      history.push('/app')
    }
  }

  componentWillReceiveProps () {
    const { history } = this.props
    if (getCurrentUser()) {
      history.push('/app')
    }
  }

  handleLogin (values) {
    const { actions } = this.props
    actions.loginRequest(values)
  }

  render () {
    const { loading } = this.state
    return (
      <div style={styles.authContainer} className='auth-container'>
        <Login onLoginClick={this.handleLogin} loading={loading} />
      </div>
    )
  }
}

Auth.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  history: PropTypes.object.isRequired
}

export default Auth
