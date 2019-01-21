import React, {ReactNode} from 'react';

import Card from '../../components/Card';
import Button from '../../components/Button';
import H1 from '../../components/H1';
import P from '../../components/P';

import {GlobalStyle} from "../../theme";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Loading from '../../components/Loading';
import Alert, {AlertExpired, AlertError, AlertCancelled} from '../../components/Alert';

function renderMainContent(template: ReactNode, props: any) {
    const elementsTemplate = [
        <GlobalStyle/>,
        <Header emitCancel={props.EmitCancel} state={props.state}/>,
        <div className="main-content">
            {template}
        </div>,
        <Footer/>,
    ];

    return elementsTemplate.map((element, index) => {
        return React.cloneElement(element, {key: index.toString()});
    });
}

function conditionalRendering(parameters: { props: any }) {
    let props = parameters.props;

    if (props.state.LoadingReducer.get('error')) {
        return renderMainContent(<AlertError/> , props);
    }

    if (props.state.LoadingReducer.get('cancelled')) {
        return renderMainContent(<AlertCancelled/> , props);
    }

    if (props.state.LoadingReducer.get('loading')) {
        return renderMainContent(<Loading/> , props);
    }

    if (!props.state.LoadingReducer.get('loading') && !props.state.TimerReducer.get('timerExpired')) {
        return renderMainContent(<Card>
            <H1>Click plus and reach {props.state.LoadingReducer.get('maximum')} before time
                expires!</H1>
            <Button disabled={props.state.CounterReducer.get('value') <= 0}
                    onClick={e => props.DecreaseCounter()}>-</Button>
            <Button disabled={true}>{props.state.CounterReducer.get('value')}</Button>
            <Button disabled={props.state.CounterReducer.get('completed')}
                    onClick={e => props.IncrementCounter()}>+</Button>
            <P>Time left: {props.state.TimerReducer.get('timer')} seconds</P>
        </Card> , props);
    }

    if (props.state.CounterReducer.get('completed')) {
        return renderMainContent(<Alert/>, props);
    }

    if (props.state.TimerReducer.get('timerExpired')) {
        return renderMainContent(<AlertExpired/>, props);
    }
}

export default conditionalRendering;