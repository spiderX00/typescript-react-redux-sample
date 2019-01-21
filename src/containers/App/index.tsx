import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Record} from 'immutable';

import {IStateRecord, initialState} from './reducer';
import AppWrapper from './wrapper';

import {GlobalStyle} from "../../theme";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import conditionalRendering from './conditionalRendering';

import {TimerCountdown, LoadCounter, LoadingAction} from './actions';

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        this.props.LoadCounter();
        if (!this.props.state.LoadingReducer.get('loading'))
            this.props.TimerCountdown();
    }

    render() {
        return (
            <AppWrapper>
                <GlobalStyle/>
                <Header/>
                {conditionalRendering(this.props.state)}
                <Footer/>
            </AppWrapper>
        );
    }
}

const stateToComputed = (state: Record<IStateRecord> = initialState) => {
    return {
        state,
    };
};

const dispatchToActions = {
    LoadCounter,
    TimerCountdown,
};

export default connect(stateToComputed, dispatchToActions)(App);