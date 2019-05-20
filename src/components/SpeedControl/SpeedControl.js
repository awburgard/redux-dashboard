import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {
  render() {

    const increaseSpeed = (event) => {
      this.props.dispatch({
        type: 'INCREASE_SPEED'
      })
    }

    const decreaseSpeed = (event) => {
      this.props.dispatch({
        type: 'DECREASE_SPEED'
      })
    }

    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={increaseSpeed}>Increase Speed</button>
        <p>SPEED: {this.props.reduxState.speedReducer}</p>
        <button onClick={decreaseSpeed}>Decrease Speed</button>
      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(SpeedControl);
