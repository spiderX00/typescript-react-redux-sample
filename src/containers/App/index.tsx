import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Record} from 'immutable';

import {IStateRecord, initialState} from './reducer';
import AppWrapper from './wrapper';

import conditionalRendering from './conditionalRendering';

import {TimerCountdown, LoadCounter, IncrementCounter, DecreaseCounter, EmitCancel} from './actions';

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        this.props.LoadCounter();
        if (!this.props.state.LoadingReducer.get('loading')) {
            this.props.TimerCountdown();
        }
    }

    render() {
        return (
            <AppWrapper>
                {conditionalRendering({props: this.props})}
            </AppWrapper>
        );
    }
}

const stateToComputed = (state: Record<IStateRecord>) => {
    return {
        state,
    };
};

const dispatchToActions = {
    LoadCounter,
    TimerCountdown,
    IncrementCounter,
    DecreaseCounter,
    EmitCancel,
};

export default connect(stateToComputed, dispatchToActions)(App);