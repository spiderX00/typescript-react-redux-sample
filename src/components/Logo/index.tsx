import React, {Children} from 'react';
import styled, {keyframes} from "../../theme";

import LargeLogoPng from "../../assets/images/brand-logo/large.png";
import SmallLogoPng from "../../assets/images/brand-logo/small.png";

const rotate = keyframes`
    to {transform: rotate(360deg);}
`;

const StyledLargeLogo = styled.div`
      background: url(${LargeLogoPng}) no-repeat;
      background-size: contain;
      padding: 0;
      width: 200px;
      max-width: 100%; 
      display:block; 
      height: 32px;
    `;

export function LargeLogo() {
    return (
        <StyledLargeLogo/>
    )
}

const StyledLogo = styled.div`
      background: url(${SmallLogoPng}) no-repeat;
      background-size: contain;
      padding: 0;
      max-width: 100%; 
      display:block; 
      height: 32px;
      width: 32px;
    `;

function Logo() {
    return (
        <StyledLogo/>
    )
}

export default Logo;