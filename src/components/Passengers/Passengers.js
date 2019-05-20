import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      passengers: '',
    }
  }
  changePassenger = (event) => {
    const inputValue = event.target.value;
    this.setState({
      passengers: inputValue,
    });
  }

  addPassenger = (event) => {
    this.props.dispatch({
      type: 'ADD_PASSENGER',
      payload: this.state.passengers,
    })
  }

  render() {
    const passengersHTML = this.props.reduxState.passengerReducer.map((passenger, index) => {
      return (
        <div key={index}>
          <p>{passenger}</p>
        </div>
      )
    })

    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name" onChange={this.changePassenger} />
        <button onClick={this.addPassenger}>Add Passenger</button>

        <div>
          {passengersHTML}
        </div>

      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(Passengers);
