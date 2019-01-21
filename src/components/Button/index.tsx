import React from 'react';
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
  border: 0;
  margin: 4px;
  color: white;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;  
  
  background-color: ${props => {
    return props.disabled ? theme.gray : theme.primary;
  }}   
   
  border-color: ${props => {
    return props.disabled ? theme.gray : theme.primary;
  }}  
 
  &:focus, &:hover {
      outline: 0;
      box-shadow: none;
        
      background-color: ${props => {
       return props.disabled ? theme.gray : theme.secondary;
      }}   
   
       border-color: ${props => {
       return props.disabled ? theme.gray : theme.secondary;
      }}  
  }`;

interface Props {
    disabled?: boolean,
}

const Button: React.SFC<Props> = (props) => (
    <StyledButton name="" disabled={props.disabled}>
        {props.children}
    </StyledButton>
);

export default Button;