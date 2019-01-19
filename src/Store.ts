import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {configureStore} from 'redux-starter-kit';

import AppReducer from './containers/App/reducer';

const store = createStore(
    AppReducer,
    applyMiddleware(thunk),
);


//const store = configureStore(AppReducer);

export default store;