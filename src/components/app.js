import React, { Component } from 'react';
import Restaurant from './restaurant'
import RestaurantSelectButtons from '.restaurant_select_buttons'

export default class App extends Component {
  render() {
    return (
      <div>
        <Restaurant />
        <RestaurantSelectButtons /> 
      </div>
    );
  }
}
