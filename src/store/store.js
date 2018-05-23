import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
export default createStore(
  combineReducer,
  applyMiddleware(thunk)
);
