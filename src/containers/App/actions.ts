import {ThunkDispatch} from 'redux-thunk';
import * as redux from 'redux';
import {getNumber} from "../../sdk/sdk";

import {LOAD_COUNTER, LOAD_COUNTER_SUCCESS, LOAD_COUNTER_ERROR} from './constants';

export type Action =
    { type: LOAD_COUNTER }
    | { type: LOAD_COUNTER_SUCCESS, maximum: number }
    | { type: LOAD_COUNTER_ERROR };

export const LoadCounter = () => (dispatch: ThunkDispatch<{}, undefined, Action>) => getNumber()
    .then(maximum => dispatch({type: LOAD_COUNTER_SUCCESS, maximum}))
    .catch(error => dispatch({type: LOAD_COUNTER_ERROR}));

export default LoadCounter;