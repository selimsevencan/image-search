import React from 'react';
import styled from 'styled-components'

import Portal from '../Portal';

const ModalContainer = styled.div`
  background: rgba(5, 4, 23, 0.8);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

export default (props) => {
  const onClose = (e) => {
    if (e.target.className.includes('modal')) {
      props.onClose();
    }
  }
  if (!props.isOpen) return null;
  return (
    <Portal>
      <ModalContainer 
        onClick={onClose}
        className={'modal'}
      >
        {props.children}
      </ModalContainer>
    </Portal>
  )
}