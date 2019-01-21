import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Record} from 'immutable';

import {IStateRecord, initialState} from './reducer';
import AppWrapper from './wrapper';

import {GlobalStyle} from "../../theme";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from '../../components/Card';
import Button from '../../components/Button';
import H1 from '../../components/H1';
import P from '../../components/P';

import Loading from '../../components/Loading';

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

        let condRendering = null;

        if (this.props.state.LoadingReducer.get('loading')) {
            condRendering =
                <div className="main-content">
                    <Loading/>
                </div>
        }
        else {
            condRendering =
                <div className="main-content">
                    <Card>
                        <H1>Click plus and reach {this.props.state.LoadingReducer.get('maximum')} before time
                            expires!</H1>
                        <Button>-</Button>
                        <Button disabled={true}>{this.props.state.LoadingReducer.get('value')}</Button>
                        <Button>+</Button>
                        <P>Time left: {this.props.state.TimerReducer.get('timer')} seconds</P>
                    </Card>
                </div>
        }

        return (
            <AppWrapper>
                <GlobalStyle/>
                <Header/>
                {condRendering}
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