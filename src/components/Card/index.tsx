import React from 'react';
import styled, {theme} from "../../theme";
import {func} from "prop-types";

const StyledCard = styled.div`
  display: block;
  border: 2px solid ${theme.grey};
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  flex: 1 0 auto;
  text-align: center;
  line-height: 2;
`;

const Card: React.SFC = (props) => (
    <StyledCard>
        {props.children}
    </StyledCard>
);

export default Card;