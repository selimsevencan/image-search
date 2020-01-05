import React, { useState } from 'react';
import Modal from '../../common/view/Modal';
import './PhotoList.css';

const renderModalContent = (item) => {
  return <div className={'item-modal'}>
    <img className='modal-image' src={item.urls.regular} alt={item.alt_description} />
    <div className={'user'}>
      <img className={'user-image'} src={item.user.profile_image.small} alt={item.user.name} />
      <div className={'user-detail'}>
        <p className={'user-name'}>{item.user.first_name}</p>
        <a 
          className={'user-portfolio'}
          href={item.user.portfolio_url}
          target={'_blank'}
        >
            {item.user.portfolio_url}
        </a>
      </div>
      <a
        href={item.links.download}
        target={'_blank'}
        className={'download'}
      >
        Download
      </a>
    </div>
  </div>
}

export default ({data}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemData, setItem] = useState({});
  const onClick = (item) => {
    setItem(item);
    setModalOpen(true);
  }
  console.log('itemData', itemData);
  return (
    <div className={'listWrapper'}>
      {data.map(item => {
        return (
          <div
            key={item.id}
            onClick={() => onClick(item)}
            className={'list-item'}
          >
            <img src={item.urls.small}  alt={item.alt_description}/>
          </div>
        )
      })}
      {
        isModalOpen && 
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          children={renderModalContent(itemData)}
        />
      }
    </div>
  );
};