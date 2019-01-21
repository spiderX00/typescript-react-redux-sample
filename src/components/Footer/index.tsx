import React from 'react';
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
   
   .button-group {
     display: flex;
     flex-flow: row wrap;
     justify-content: space-between;
   }
   
    @media (max-width: 720px) {
       .button-group {
          justify-content: center;  
       }
    }
  
`;

class Footer extends React.Component {
    render() {
        return (
            <StyledFooter>
                <Logo/>
                <div className="button-group">
                    <Button>Terms</Button>
                    <Button>Privacy</Button>
                    <Button>Cookie Policy</Button>
                    <Button>Help</Button>
                    <Button>FAQ</Button>
                </div>
            </StyledFooter>
        )
    }
}

export default Footer;