import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>

        <p>CURRENT SPEED: {this.props.reduxState.speedReducer}</p>
        <p>PASSENGER COUNT: {this.props.reduxState.passengerReducer.length}</p>
      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(Dashboard);
