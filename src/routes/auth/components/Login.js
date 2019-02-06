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
      <form onSubmit={this.handleSubmit} style={styles.loginForm}>
        <div style={styles.formItem}>
          <label htmlFor='email'>Email </label>
          <input
            id='email'
            type='text'
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div style={styles.formItem}>
          <label htmlFor='password'>Passowrd </label>
          <input
            type='password'
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <span style={styles.forgotPass}>Forgot Password</span>
        <input type='submit' value='Login' style={styles.loginBtn} />
      </form>
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
