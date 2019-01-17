import React, { Children } from 'react';
import styled, {theme} from "../../theme";

export const StyledButton = styled.button`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  height: 36px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  outline: 0;
  color: white;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;  
  
  background-color: ${props => {
    return props.disabled? props.theme.gray : props.theme.primary;
  }}   
   
  border-color: ${props => {
    return props.disabled? props.theme.gray : props.theme.primary;
  }}  
 
  &:focus, &:hover {
      outline: 0;
      box-shadow: none;
        
      background-color: ${props => {
        return props.disabled? props.theme.gray : props.theme.secondary;
      }}   
   
      border-color: ${props => {
       return props.disabled? props.theme.gray : props.theme.secondary;
      }}  
  }
  
`;

export interface Props {
    name: string,
    disabled?: boolean,
}

function Button({name, disabled}: Props) {
    return (
        <StyledButton name="" theme={theme} disabled={disabled}>
            {Children.toArray(name)}
        </StyledButton>
    );
}

export default Button;