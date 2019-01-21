import {Record} from 'immutable';
import {combineReducers} from 'redux';

import {
    LOAD_COUNTER,
    LOAD_COUNTER_SUCCESS,
    LOAD_COUNTER_ERROR,
    LOAD_COUNTER_CANCELLED,
    TIMER_START,
    TIMER_TICK,
    TIMER_STOP,
    INCREMENT_COUNTER,
    DECREASE_COUNTER,
    COUNTER_TO_MAXIMUM,
} from './constants';

import {LoadingAction, TimerAction, CounterAction} from './actions';

export interface IStateRecord {
    loading: boolean;
    error: boolean;
    success: boolean;
    cancelled: boolean,
    completed: boolean,
    maximum: number;
    value: number;
    timer: number;
    timerOn: boolean;
    timerExpired: boolean;
    timerId: number;
}

class State extends Record<IStateRecord>({
    loading: false,
    error: false,
    success: false,
    cancelled: false,
    completed: false,
    maximum: 0,
    value: 0,
    timer: 60,
    timerOn: false,
    timerExpired: false,
    timerId: -1,
}) {
}

export const initialState = new State();

export function LoadingReducer(state = initialState, action: LoadingAction) {
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
        case LOAD_COUNTER_CANCELLED: {
            return state.set('cancelled', true).set('error', false);
        }
        default:
            return state;
    }
}

export function TimerReducer(state = initialState, action: TimerAction) {
    switch (action.type) {
        case TIMER_START: {
            return state.set('timerOn', true).set('timerExpired', false);
        }
        case TIMER_TICK: {
            return state.set('timerId', action.timerId).update('timer', timer => timer > 0 ? timer - 1 : timer);
        }
        case TIMER_STOP: {
            return state.set('timerId', -1).set('timerOn', false).set('timerExpired', true);
        }
        default:
            return state;
    }
}

export function CounterReducer(state = initialState, action: CounterAction) {
    switch (action.type) {
        case INCREMENT_COUNTER: {
            return state.update('value', counter => counter + 1);
        }
        case DECREASE_COUNTER: {
            return state.update('value', counter => counter - 1).set('completed', false);
        }
        case COUNTER_TO_MAXIMUM: {
            return state.set('completed', true);
        }
        default:
            return state;
    }
}

export default combineReducers({LoadingReducer, TimerReducer, CounterReducer});