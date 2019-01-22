import * as React from "react";
import QRCode from 'qrcode.react';
import Card from '../Card';

const QRValue = 'chainsidepay';

function QRchainsidepay() {
    return (
        <Card>
            <QRCode value={QRValue}/>
        </Card>
    )
}

export default QRchainsidepay;