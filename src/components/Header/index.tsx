import React, { Children } from 'react';
import styled, {theme} from "../../theme"

import Button from "../Button";

import LargeLogoPng from "../../assets/images/brand-logo/large.png";

export const StyledHeader = styled.header`
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
   background-color: ${theme.primary};
   height: 80px;
   padding: 20px;
   
   button {
     border: 0;
   }
`;

export const LargeLogo = styled.div`
    background: url(${LargeLogoPng}) no-repeat top left;
    background-size: contain;
    padding: 0;
    width: 300px;
    max-width: 100%; 
    display:block; 
    height: 32px;
`;

class Header extends React.Component {
    render() {
        return (
            <StyledHeader>
                <LargeLogo/>
                <Button name="Cancel" />
            </StyledHeader>
        )
    }
}

export default Header;