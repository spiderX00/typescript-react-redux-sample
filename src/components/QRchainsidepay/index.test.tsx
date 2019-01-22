import React from 'react';
import {render, cleanup, fireEvent, wait} from 'react-testing-library';

import QRchainsidepay from './';

afterEach(cleanup);

test('renders qrcode component without crashing', () => {
    const {getByTestId, getByText} = render(<QRchainsidepay/>);
});

test('show qrcode', async () => {
    const {getByTestId, getByText} = render(<QRchainsidepay/>);
    fireEvent.click(getByText('Show QR Code'));
    const qrCodeTextNode = await wait(() =>{});
});

