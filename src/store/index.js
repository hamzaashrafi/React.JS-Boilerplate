// create store 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { } from './reducers';

export default createStore(combineReducers({}), {}, applyMiddleware(thunk));