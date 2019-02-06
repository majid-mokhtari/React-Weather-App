import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

class HomeHeader extends Component {
  constructor () {
    super()
    this.onLogoutClick = this.onLogoutClick.bind(this)
  }

  onLogoutClick () {
    const { logoutUser } = this.props
    logoutUser()
  }

  render () {
    return (
      <div style={styles.main}>
        <div style={styles.userDropdown} className='header-dropdown' />
        <span onClick={this.onLogoutClick}>Log Out</span>
      </div>
    )
  }
}

HomeHeader.propTypes = {
  logoutUser: PropTypes.func.isRequired
}
export default HomeHeader
