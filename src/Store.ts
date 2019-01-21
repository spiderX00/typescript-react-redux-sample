import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import RootReducer,{initialState} from './containers/App/reducer';

const store = createStore(
    RootReducer,
    applyMiddleware(thunk),
);

export default store;