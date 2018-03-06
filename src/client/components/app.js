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

/*
Specs:
- as a user I should be able to select a restaurant
- once I select a restaurant I should see the details of the restaurant
- as a user, I should no see a restaurant more than once

App's state - you should be able to look at state and see that each spec can be met
{
  restaurantSeenIds: [abc, def, ghi....]
  CurrentRestaurant: {}
  RestToBeSeen: []
  RestaurantSelected: {}

}
 */
