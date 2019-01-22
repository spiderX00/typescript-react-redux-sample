import React, {ReactNode} from 'react';
import Panel from '../../components/Panel';

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
        return renderMainContent(<AlertError/>, props);
    }

    if (props.state.LoadingReducer.get('cancelled')) {
        return renderMainContent(<AlertCancelled/>, props);
    }

    if (props.state.LoadingReducer.get('loading')) {
        return renderMainContent(<Loading/>, props);
    }

    if (!props.state.LoadingReducer.get('loading') && !props.state.TimerReducer.get('timerExpired') && !props.state.CounterReducer.get('completed')) {
        return renderMainContent(<Panel props={props}/>, props);
    }

    if (props.state.CounterReducer.get('completed')) {
        return renderMainContent(<Alert/>, props);
    }

    if (props.state.TimerReducer.get('timerExpired')) {
        return renderMainContent(<AlertExpired/>, props);
    }
}

export default conditionalRendering;