import React from 'react';
import './EmptyState.css';

export default ({children}) => {
  return (
    <div className={'empty-state'}>
        {children}
    </div>
  );
};