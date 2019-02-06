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
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleLogin (e) {
    e.preventDefault()
    console.log('login')
    this.props.onLoginClick(this.state)
  }

  handleSignUp (e) {
    e.preventDefault()
    this.props.onSignUpClick(this.state)
  }

  getButtons () {
    const { email, password } = this.state
    return (
      <form style={styles.loginForm}>
        <div style={styles.formItem}>
          <label htmlFor='email'>Email </label>
          <input
            id='email'
            type='text'
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            style={styles.formInput}
          />
        </div>
        <div style={styles.formItem}>
          <label htmlFor='password'>Passowrd </label>
          <input
            type='password'
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            style={styles.formInput}
          />
        </div>
        <span style={styles.forgotPass}>Forgot Password?</span>
        <button style={styles.loginBtn} onClick={this.handleLogin}>
          Login
        </button>
        <button style={styles.signUpBtn} onClick={this.handleSignUp}>
          Sign Up
        </button>
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
