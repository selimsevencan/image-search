import React from 'react';
import Overlay from '../Overlay';
import styled from 'styled-components'

import Portal from '../Portal';

const ModalContainer = styled.div`
  margin: 20px;
`;

export default (props) => {
  if (!props.isOpen) return null;
  return (
    <Portal>
      <Overlay
        onClose={props.onClose}
      >
        <ModalContainer>
          {props.children}
        </ModalContainer>
      </Overlay>
    </Portal>
  )
}