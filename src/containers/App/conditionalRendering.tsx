import React from 'react';

import Card from '../../components/Card';
import Button from '../../components/Button';
import H1 from '../../components/H1';
import P from '../../components/P';

import Loading from '../../components/Loading';
import {AlertExpired} from '../../components/Alert';

function conditionalRendering(props: any) {
    let template = null;

    if (props.state.LoadingReducer.get('loading')) {
        template = <Loading/>
    }

    if (!props.state.LoadingReducer.get('loading') && !props.state.TimerReducer.get('timerExpired')) {
        template =
            <Card>
                <H1>Click plus and reach {props.state.LoadingReducer.get('maximum')} before time
                    expires!</H1>
                <Button disabled={props.state.CounterReducer.get('value') <= 0} onClick={e => props.DecreaseCounter()}>-</Button>
                <Button disabled={true}>{props.state.CounterReducer.get('value')}</Button>
                <Button disabled={props.state.CounterReducer.get('completed')} onClick={e => props.IncrementCounter()}>+</Button>
                <P>Time left: {props.state.TimerReducer.get('timer')} seconds</P>
            </Card>
    }

    if(props.state.TimerReducer.get('timerExpired')) {
       template = <AlertExpired/>
    }

    return (
        <div className="main-content">
            {template}
        </div>
    );
}

export default conditionalRendering;