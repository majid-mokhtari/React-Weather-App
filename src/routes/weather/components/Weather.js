import React, { Component } from 'react'

class Weather extends Component {
  componentWillMount () {
    this.props.actions.getWeather()
    this.props.actions.getTodos()
  }
  render () {
    const { weather } = this.props
    return (
      <div>
        <button onClick={() => this.props.actions.deleteAllTodos()}>
          Delete All Todos
        </button>
        <button onClick={() => this.props.actions.addTodo()}>
          Add new Todo
        </button>
        <div>{weather}</div>
      </div>
    )
  }
}

export default Weather
