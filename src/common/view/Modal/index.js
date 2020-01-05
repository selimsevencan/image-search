import React from 'react';
import './Modal.css';

import Portal from '../Portal';

export default (props) => {
  const onClose = (e) => {
    if (e.target.className === 'modal') {
      props.onClose();
    }
  }
  if (!props.isOpen) return null;
  return (
    <Portal>
      <div 
        className={'modal'}
        onClick={onClose}
      >
        {props.children}
      </div>
    </Portal>
  )
}