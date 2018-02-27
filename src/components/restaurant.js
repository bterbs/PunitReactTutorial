import React, { Component } from 'react'

export default class Restaurant extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name} </p>
        <p>Rating: {this.props.location}</p>
        <p>Location: {this.props.location}</p>
        <p>Cost: {this.props.cost}</p>
      </div>
    )
  }
}
