import React, {Children} from 'react';
import styled, {theme} from '../../theme'

const StyledH1 = styled.h1`
  font-size: 16px;
  font-family: Arial;
  font-weight: bold;  
  margin-bottom: 0;
`;

interface Props {
    color?: string;
}

const H1: React.SFC<Props> = function (props) {
    return <StyledH1 style={{color: props.color || theme.base}}>
        {props.children}
    </StyledH1>;
};

export default H1;