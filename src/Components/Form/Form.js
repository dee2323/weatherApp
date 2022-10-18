import React, { Component } from 'react'
import '../../index.css'
export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" placeholder='City...' name="city"/>
        <input type='text' placeholder='Country...' name="country"/>
        <button type='submit'>Get Weather</button>
      </form>
    )
  }
}
