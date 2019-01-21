import React from 'react';
import {Record} from 'immutable';

import Card from '../../components/Card';
import Button from '../../components/Button';
import H1 from '../../components/H1';
import P from '../../components/P';

import Loading from '../../components/Loading';
import {IStateRecord} from "./reducer";

interface Props {
    LoadingReducer: Record<IStateRecord>;
    TimerReducer: Record<IStateRecord>;
}

function conditionalRendering(state: Props) {
    
    let template = null;
    
    if (state.LoadingReducer.get('loading')) {
        template =
            <div className="main-content">
                <Loading/>
            </div>
    }
    else {
        template =
            <div className="main-content">
                <Card>
                    <H1>Click plus and reach {state.LoadingReducer.get('maximum')} before time
                        expires!</H1>
                    <Button>-</Button>
                    <Button disabled={true}>{state.LoadingReducer.get('value')}</Button>
                    <Button>+</Button>
                    <P>Time left: {state.TimerReducer.get('timer')} seconds</P>
                </Card>
            </div>
    }

    return (
        template
    );
}

export default conditionalRendering;