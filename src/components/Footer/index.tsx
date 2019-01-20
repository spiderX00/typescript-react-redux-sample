import React, {Children} from 'react';
import styled, {theme} from "../../theme";

import Button from "../Button";

import Logo from '../Logo/index';

export const StyledFooter = styled.footer`
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
   background-color: ${theme.primary};
   height: 200px;
   padding: 20px;
   
   button {
     border: 0;
   }
`;

class Footer extends React.Component {
    render() {
        return (
            <StyledFooter>
                <Logo/>
                <div>
                    <Button name="Cancel"/>
                    <Button name="Cancel"/>
                    <Button name="Cancel"/>
                    <Button name="Cancel"/>
                    <Button name="Cancel"/>
                </div>
            </StyledFooter>
        )
    }
}

export default Footer;