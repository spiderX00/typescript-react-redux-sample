import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './containers/App/reducer';

const store = createStore(
    AppReducer,
    applyMiddleware(thunk),
);

export default store;