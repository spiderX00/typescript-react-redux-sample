import React from 'react';
import styled from "../../theme"

import Card from '../../components/Card';
import Button from '../../components/Button';
import H1 from '../../components/H1';
import P from '../../components/P';
import QRChainsidepay from '../../components/QRchainsidepay';

const StyledElements = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`;

interface Props {
    props: any;
}

export class Panel extends React.Component<any, any> {

    constructor(props:Props) {
        super(props);
    }

    render() {
        const props = this.props.props;

        let elementsTemplate = [
            <Card>
                <H1>Click plus and reach {props.state.LoadingReducer.get('maximum')} before time
                    expires!</H1>
                <Button disabled={props.state.CounterReducer.get('value') <= 0}
                        onClick={e => props.DecreaseCounter()}>-</Button>
                <Button disabled={true}>{props.state.CounterReducer.get('value')}</Button>
                <Button disabled={props.state.CounterReducer.get('completed')}
                        onClick={e => props.IncrementCounter()}>+</Button>
                <P>Time left: {props.state.TimerReducer.get('timer')} seconds</P>
            </Card>, <QRChainsidepay/>
        ];

        return (
            <StyledElements>
                {elementsTemplate.map((element, index) => React.cloneElement(element, {key: index.toString()}))}
            </StyledElements>
        )
    }
}

export default Panel;