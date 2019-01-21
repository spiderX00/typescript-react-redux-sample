import React, {Children} from 'react';
import styled, {theme} from "../../theme"

import Button from "../Button";

import {LargeLogo} from '../Logo/index';

export const StyledHeader = styled.header`
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
   background-color: ${theme.primary};
   min-height: 80px;
   padding: 20px;
   
   .button-group {
     display: flex;
     flex-flow: row wrap;
     justify-content: center;
   }
   
    @media (max-width: 720px) {
       & {
          justify-content: center;  
       }
    }
`;

interface HeaderProps {
    emitCancel: () => any;
    state: any;
}

const Header: React.SFC<HeaderProps> = (props) => {
    return (
        <StyledHeader>
            <LargeLogo/>
            { props.state.LoadingReducer.get('error') || props.state.LoadingReducer.get('loading') || props.state.LoadingReducer.get('cancelled') || props.state.CounterReducer.get('completed') ?
                null : <div className="button-group">
                    <Button onClick={e => props.emitCancel()}>Cancel</Button>
                </div>
            }
        </StyledHeader>
    )
};

export default Header;