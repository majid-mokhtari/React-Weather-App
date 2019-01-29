import React, { Component } from 'react'

class Weather extends Component {
  componentWillMount () {
    this.props.actions.getWeather()
    this.props.actions.addTodo()
    this.props.actions.getTodos()
    this.props.actions.deleteAllTodos()
  }
  render () {
    const { weather } = this.props
    return <div>{weather}</div>
  }
}

export default Weather
