import React, { Component } from 'react';
import Restaurant from './restaurant'
import RestaurantSelectButtons from './restaurant_select_buttons'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Restaurant  name="Burma Superstar" rating="5 stars" location="Alameda" cost="$$"/>
        <RestaurantSelectButtons />
      </div>
    );
  }
}
