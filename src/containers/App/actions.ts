import {ThunkDispatch} from 'redux-thunk';
import {getNumber} from "../../sdk/sdk";

import {
    LOAD_COUNTER,
    LOAD_COUNTER_SUCCESS,
    LOAD_COUNTER_ERROR,
    TIMER_START,
    TIMER_TICK,
    TIMER_STOP,
    TIME_INTERVAL,
    INCREMENT_COUNTER,
    DECREASE_COUNTER,
    COUNTER_TO_MAXIMUM
} from './constants';

export type LoadingAction =
    { type: LOAD_COUNTER }
    | { type: LOAD_COUNTER_SUCCESS, maximum: number }
    | { type: LOAD_COUNTER_ERROR };

export type TimerAction =
    { type: TIMER_START }
    | { type: TIMER_TICK, timerId: number }
    | { type: TIMER_STOP };

export type CounterAction =
    { type: INCREMENT_COUNTER }
    | { type: DECREASE_COUNTER }
    | { type: COUNTER_TO_MAXIMUM }

export const LoadCounter = () => (dispatch: ThunkDispatch<{}, undefined, LoadingAction>) => {
    dispatch({type: LOAD_COUNTER});
    return getNumber()
        .then(maximum => dispatch({type: LOAD_COUNTER_SUCCESS, maximum}))
        .catch(error => dispatch({type: LOAD_COUNTER_ERROR}));
};

const tick = (timerId: number) => ({type: TIMER_TICK, timerId});
const stop = () => ({type: TIMER_STOP});

export const TimerCountdown = () => (dispatch: ThunkDispatch<{}, undefined, TimerAction>, getState: () => any) => {
    let state = getState();
    let timerId: number = -1;
    clearInterval(timerId);

    timerId = window.setInterval(() => {
        dispatch(tick(timerId));
        state = getState();
        if (state.TimerReducer.get('timer') <= 0) {
            clearInterval(timerId);
            dispatch(stop());
        }
    }, TIME_INTERVAL);

};

export const IncrementCounter = () => (dispatch: ThunkDispatch<{}, undefined, CounterAction>, getState: () => any) => {
    let state = getState();
    let maximum: number = state.LoadingReducer.get('maximum');
    let counter: number = state.CounterReducer.get('value');
    const minimum: number = 0;

    if (counter < maximum && counter >= minimum) {
        return dispatch({type: INCREMENT_COUNTER});
    }

    if (counter >= maximum) {
        return dispatch({type: COUNTER_TO_MAXIMUM})
    }
};

export const DecreaseCounter = () => (dispatch: ThunkDispatch<{}, undefined, CounterAction>, getState: () => any) => {
    const state = getState();
    const minimum: number = 0;
    if (state.CounterReducer.get('value') > minimum) {
        return dispatch({type: DECREASE_COUNTER});
    }
};

export default LoadCounter;