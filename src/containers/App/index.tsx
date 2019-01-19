import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Record} from 'immutable';
import Store from '../../Store';

import {IStateRecord, initialState} from './reducer';

import styled, {theme, GlobalStyle} from "../../theme";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import LoadCounter, {Action} from './actions';
import {LOAD_COUNTER_TYPES} from './constants';

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;     
`;

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <AppWrapper>
                <GlobalStyle/>
                <Header/>
                <Footer/>
            </AppWrapper>
        )
    }
}

const stateToComputed = (state: Record<IStateRecord> = initialState) => {
    return {
        maximum: state.get('maximum'),
    };
};

const dispatchToActions = {
    LoadCounter,
};

export default connect(stateToComputed, dispatchToActions)(App);