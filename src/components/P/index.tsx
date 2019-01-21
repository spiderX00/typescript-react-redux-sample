import React, {Children} from 'react';
import styled from '../../theme';

const StyledP = styled.p`
    font-size: 14px;
    font-family: Arial;
`;

const P: React.SFC = (props) => (
    <StyledP>
        {props.children}
    </StyledP>
);

export default P;