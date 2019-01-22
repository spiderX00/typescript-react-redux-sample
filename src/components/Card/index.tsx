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
  margin: 2px auto;
  max-width: 250px;
  height: auto;
`;

const Card: React.SFC = (props) => (
    <StyledCard className="card">
        {props.children}
    </StyledCard>
);

export default Card;