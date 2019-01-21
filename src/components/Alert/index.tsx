import React from 'react';
import styled, {theme} from "../../theme";

import Button from '../Button';
import P from '../P';
import H1 from '../H1';
import Icon, {AlertIcon, ErrorIcon} from '../Icon';

import {URL_REDIRECT} from './constants';

const StyledAlert = styled.div`
    display: block;
    border: 0;
    background: white;
    flex: 1 0 auto;
    text-align: center;
    line-height: 2;
`;

interface Props {
    alertType: string;
}

const alertErrorElements = [
    <ErrorIcon/>,
    <H1 color={theme.error}>An error occured</H1>,
    <P>Ah error occured</P>,
    <Button onClick={e => location.reload()}>Reset</Button>
];

export class AlertError extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return alertErrorElements.map((element, index) => React.cloneElement(element, {key: index.toString()}));
    }
}

const alertCancelledElements = [
    <ErrorIcon/>,
    <H1 color={theme.error}>Cancelled</H1>,
    <P>Nothing to do here anymore</P>,
    <Button onClick={e => location.reload()}>Reset</Button>
];

export class AlertCancelled extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return alertCancelledElements.map((element, index) => React.cloneElement(element, {key: index.toString()}));
    }
}

const alertElements = [
    <Icon/>,
    <H1 color={theme.success}>Completed</H1>,
    <P>Oh yeah</P>,
    <Button onClick={e => location.href = URL_REDIRECT}>Continue</Button>,
];

class Alert extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return alertElements.map((element, index) => React.cloneElement(element, {key: index.toString()}));
    }
}

const alertExpiredElements = [
    <AlertIcon/>,
    <H1 color={theme.alert}>Expired</H1>,
    <P>Time's up</P>,
    <Button onClick={e => location.reload()}>Reset</Button>,
];

export class AlertExpired extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return alertExpiredElements.map((element, index) => React.cloneElement(element, {key: index.toString()}));
    }
}

export default Alert;