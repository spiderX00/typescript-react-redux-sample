import {Record} from 'immutable';
//import {ThunkAction} from 'redux-thunk';
import {LOAD_COUNTER, LOAD_COUNTER_SUCCESS, LOAD_COUNTER_ERROR} from './constants';
import {Action} from './actions';

interface IStateRecord {
    loading: boolean;
    error: boolean;
    success: boolean;
    maximum: number;
    value: number;
}

class State extends Record<IStateRecord>({
    loading: false,
    error: false,
    success: false,
    maximum: 0,
    value: 0,
}) {}

const initialState = new State();

//export type ThunkResult<R> = ThunkAction<R, State, undefined, Action>;

function AppReducer(state = initialState, action: Action) {
    switch (action.type) {
        case LOAD_COUNTER: {
            return state.set('loading', true).set('error', false).set('success', false)
        }
        case LOAD_COUNTER_SUCCESS: {
            return state.set('maximum', action.maximum).set('loading', false).set('error', false).set('success', true)
        }
        case LOAD_COUNTER_ERROR: {
            return state.set('loading', false).set('error', true).set('success', false)
        }
    }
}

export default AppReducer;