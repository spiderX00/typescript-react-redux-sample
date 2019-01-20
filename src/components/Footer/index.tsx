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
   
   .button-group > button {
     border: 0;
   }
`;

class Footer extends React.Component {
    render() {
        return (
            <StyledFooter>
                <Logo/>
                <div className="button-group">
                    <Button name="Terms"/>
                    <Button name="Privacy"/>
                    <Button name="Cookie Policy"/>
                    <Button name="Help"/>
                    <Button name="FAQ"/>
                </div>
            </StyledFooter>
        )
    }
}

export default Footer;