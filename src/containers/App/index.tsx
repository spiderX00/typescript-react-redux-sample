import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Record} from 'immutable';
import Store from '../../Store';

import {IStateRecord, initialState} from './reducer';

import styled, {theme, GlobalStyle} from "../../theme";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from '../../components/Loading';

import LoadCounter, {Action} from './actions';
import {LOAD_COUNTER_TYPES} from './constants';

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh; 
        
    .main-content {
      display: flex;
      flex-flow: column wrap;
      align-items: center;    
    }
`;

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.props.LoadCounter();
    }

    render() {
        return (
            <AppWrapper>
                <GlobalStyle/>
                <Header/>
                <div className="main-content">
                    { this.props.state.get('loading') ? <Loading/> : this.props.state.get('maximum') }
                </div>
                <Footer/>
            </AppWrapper>
        )
    }
}

const stateToComputed = (state: Record<IStateRecord> = initialState) => {
    return {
        //maximum: state.get('maximum'),
        state,
    };
};

const dispatchToActions = {
    LoadCounter,
};

export default connect(stateToComputed, dispatchToActions)(App);