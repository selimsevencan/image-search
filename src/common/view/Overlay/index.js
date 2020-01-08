import React from 'react'
import styled from 'styled-components';

const Overlay = styled.div`
  background: rgba(5, 4, 23, 0.8);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
`;

export default (props) => {
  const onClose = (e) => {
    if (e.target.className.includes('overlay')) {
      props.onClose();
    }
  }
  return (<Overlay
    onClick={onClose}
    className={'overlay'}
  >
    {props.children}
  </Overlay>);
};
