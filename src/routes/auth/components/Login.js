import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.onLoginClick(this.state)
  }

  getButtons () {
    const { email, password } = this.state
    return (
      <div style={styles.loginButtons}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='email'>Email: </label>
          <input
            id='email'
            type='text'
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label htmlFor='password'>Passowrd: </label>
          <input
            type='password'
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }

  render () {
    return (
      <div style={styles.loginContainer}>
        <div className='auth-title' style={styles.authTitle}>
          <h2>Personal Dashboard</h2>
        </div>
        {this.getButtons()}
      </div>
    )
  }
}

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  onLoginClick: PropTypes.func.isRequired
}
export default Login
