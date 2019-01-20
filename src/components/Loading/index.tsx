import React, {Children} from 'react';
import styled, {keyframes} from "../../theme";

import LoadingIcon from '../../assets/images/loading.png';

import P from '../P';

const rotate = keyframes`
    to {transform: rotate(360deg);}
`;

export const StyledLoading = styled.div`
  background: url(${LoadingIcon}) no-repeat;
  animation: ${rotate} .75s linear infinite;
  height: 32px;
  width: 32px;
  background-size: contain;
  display: inline-block;
`;

function Loading(): any {
    return [
        <StyledLoading/>,
        <P name="Loading"/>,
    ]
}

export default Loading;



