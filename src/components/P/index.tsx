import React, {Children} from 'react';
import styled from '../../theme';

const StyledP = styled.p`
    font-size: 14px;
    font-family: Arial;
`;

interface Props {
    name?: string,
}

function P({name}: Props) {
    return (
        <StyledP>
            {Children.toArray(name)}
        </StyledP>
    )
}

export default P;