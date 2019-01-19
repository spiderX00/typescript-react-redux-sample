import React, {Children} from 'react';
import styled, {theme} from "../../theme"

import Button from "../Button";

import {LargeLogo} from '../Logo/index';

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

class Header extends React.Component {
    render() {
        return (
            <StyledHeader>
                <LargeLogo/>
                <Button name="Cancel"/>
            </StyledHeader>
        )
    }
}

export default Header;