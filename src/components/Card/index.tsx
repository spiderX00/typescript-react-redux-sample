import React, {Children} from 'react';
import styled, {theme} from "../../theme";
import {func} from "prop-types";

export const StyledCard = styled.div`
  display: block;
  border: 2px solid ${theme.grey};
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  flex: 1 0 auto;
`;

function Card() {
    return (
        <StyledCard/>
    )
}

export default Card;