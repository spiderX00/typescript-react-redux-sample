import React, {Children} from 'react';
import styled, {keyframes} from "../../theme";

import LoadingIcon from '../../assets/images/loading.png';

import P from '../P';

const rotate = keyframes`
    to {transform: rotate(360deg);}
`;

const StyledElements = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
`;

const StyledLoading = styled.div`
  background: url(${LoadingIcon}) no-repeat;
  animation: ${rotate} .75s linear infinite;
  height: 32px;
  width: 32px;
  background-size: contain;
  display: inline-block;
`;

const elements = [
    <StyledLoading/>,
    <P>Loading</P>,
].map((element, index) =>
    React.cloneElement(element, {key: index.toString()})
);

const Loading: React.SFC = (): any => <StyledElements>{elements}</StyledElements>

export default Loading;



