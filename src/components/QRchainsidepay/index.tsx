import * as React from "react";
import QRCode from 'qrcode.react';
import styled, {theme} from '../../theme'

import H1 from '../H1';
import Button from '../Button';
import Card from '../Card';

const QRValue = 'chainsidepay';

class QRchainsidepay extends React.Component {

    private hideQR: boolean = true;

    switchState() {
        this.hideQR = !this.hideQR;
    };

    render() {
        return (
            <Card>
                {this.hideQR ? [
                    <H1>QRC codes are cool.
                        Want to see one?</H1>,
                    <Button onClick={e => this.switchState()}>Show QR Code</Button>
                ] : [
                    <H1>Here a nice QR code!</H1>,
                    <QRCode value={QRValue}/>,
                    <Button onClick={e => this.switchState()}>Hide QR Code</Button>,
                ]
                }
            </Card>
        )
    }
}

export default QRchainsidepay;