import React, {Children} from 'react';
import styled from '../../theme'

const StyledH1 = styled.h1`
  font-size: 16px;
  font-family: Arial;
  font-weight: bold;  
  margin-bottom: 0;
`;

const H1: React.SFC = function (props) {
    return <StyledH1>
        {props.children}
    </StyledH1>;
};

export default H1;