import React, { Component } from "react";

class Weather extends Component {
  componentWillMount() {
    this.props.actions.getWeather();
  }
  render() {
    const { weather } = this.props;
    return <div>{weather}</div>;
  }
}

export default Weather;
