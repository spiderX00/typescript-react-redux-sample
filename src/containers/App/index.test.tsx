import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {render, cleanup} from 'react-testing-library';

import AppWrapper from './index';
import RootReducer from './reducer';

function renderWithRedux(
    ui,
    {initialState, store = createStore(RootReducer,applyMiddleware(thunk))} = {},
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    }
}

afterEach(cleanup);

test('renders app container without crashing', () => {
    const {getByTestId, getByText} = renderWithRedux(<AppWrapper/>);
});
