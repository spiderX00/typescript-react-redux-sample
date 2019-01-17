import React, { Children } from 'react';
import styled from "../../theme";

import LargeLogoPng from "../../assets/images/brand-logo/large.png";
import SmallLogoPng from "../../assets/images/brand-logo/small.png";

export function LargeLogo(){
    const StyledLogo = styled.div`
      background: url(${LargeLogoPng}) no-repeat top left;
      background-size: contain;
      padding: 0;
      width: 200px;
      max-width: 100%; 
      display:block; 
      height: 32px;
      flex: 1 0 auto;
    `;

    return (
        <StyledLogo/>
    )
}

function Logo(){
    const StyledLogo = styled.div`
      background: url(${SmallLogoPng}) no-repeat top left;
      background-size: contain;
      padding: 0;
      max-width: 100%; 
      display:block; 
      height: 32px;
      flex: 1 0 auto;
    `;

    return (
        <StyledLogo/>
    )
}

export default Logo;