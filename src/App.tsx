import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Store';

import ReduxApp from "./containers/App";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxApp/>
            </Provider>
        );
    }
}

export default App;