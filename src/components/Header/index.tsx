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
`;

class Header extends React.Component {
    render() {
        return (
            <StyledHeader>
                <LargeLogo/>
            </StyledHeader>
        )
    }
}

export default Header;