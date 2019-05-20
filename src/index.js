import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// put your reducers here!
const speedReducer = (state = 0, action) => {
  if (action.type === 'DECREASE_SPEED'){
    const newState = state - 1;
    return newState;
  } else if (action.type === 'INCREASE_SPEED'){
    const newState = state + 1;
    return newState
  }
  return state;
}

const passengerReducer = (state = ['Austin'], action) => {
  if (action.type === 'ADD_PASSENGER'){
    return [...state, action.payload]
  }
  return state;
}

// be sure to combine your reducers!
const storeInstance = createStore(
  combineReducers({
      speedReducer,
      passengerReducer,
  }),
  applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
