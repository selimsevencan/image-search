import React, { useContext } from 'react';
import { Context } from '../../Store';
import styled from 'styled-components';

const LoadingComponent = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 100;
  display: inline-block;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 24% 48%;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default () => {
  const [{isLoading} ] = useContext(Context);
  return (isLoading ? <LoadingComponent /> : null);
};
