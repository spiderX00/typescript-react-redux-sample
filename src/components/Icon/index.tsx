import React from 'react';
import styled, {theme} from "../../theme";

import errorIcon from '../../assets/images/error.png';
import successIcon from '../../assets/images/success.png';
import alertIcon from '../../assets/images/alert.png';

const ERROR = 'error';
const CANCELLED = 'cancelled';
const COMPLETED = 'completed';
const EXPIRED = 'expired';

const Icon: React.SFC = () => {
    const StyledIcon = styled.div`
      background: url(${successIcon}) no-repeat;
      background-size: contain;
      padding: 0;
      max-width: 100%; 
      display:block; 
      height: 32px;
      width: 32px;
    `;

    return (
        <StyledIcon/>
    )
};

export const ErrorIcon: React.SFC = () => {
    const StyledIcon = styled.div`
      background: url(${errorIcon}) no-repeat;
      background-size: contain;
      padding: 0;
      max-width: 100%; 
      display:block; 
      height: 32px;
      width: 32px;
    `;
    return (
        <StyledIcon/>
    );
};

export const AlertIcon: React.SFC = () => {
    const StyledIcon = styled.div`
      background: url(${alertIcon}) no-repeat;
      background-size: contain;
      padding: 0;
      max-width: 100%; 
      display:block; 
      height: 32px;
      width: 32px;
    `;
    return (
        <StyledIcon/>
    );
};

export default Icon;
