import React, {Children} from 'react';
import styled from '../../theme'

const StyledH1 = styled.h1`
  font-size: 16px;
  font-family: Arial;
  font-weight: bold;  
`;

interface Props {
    name?: string,
}

function H1({name}: Props) {
    return (
        <StyledH1>
            {Children.toArray(name)}
        </StyledH1>
    )
}

export default H1;