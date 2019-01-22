import React from 'react';
import styled, {theme} from "../../theme";
import {func} from "prop-types";

const StyledCard = styled.div`
  display: block;
  border: 1px solid ${theme.grey};
  background-color: white;
  border-radius: 4px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  line-height: 1.1;
  margin: 10px;
  max-width: 280px;
  flex: 1 0 auto;
  height: auto;
`;

const Card: React.SFC = (props) => (
    <StyledCard className="card">
        {props.children}
    </StyledCard>
);

export default Card;