import React, {Children} from 'react';
import styled, {theme} from '../../theme';

const StyledP = styled.p`
    font-size: 14px;
    font-family: Arial;
`;

interface Props {
    color?: string;
}

const P: React.SFC<Props> = (props) => (
    <StyledP style={{color: props.color || theme.base}}>
        {props.children}
    </StyledP>
);

export default P;