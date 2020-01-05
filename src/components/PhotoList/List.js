import React, { useState } from 'react';
import Modal from '../../common/view/Modal';
import downloadSvg from '../../common/view/Icon/download.svg';

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
        <img className={'download-svg'} src={downloadSvg} alt={item.alt_description} />
        <span className={'download-text'}>Download</span>
      </a>
    </div>
  </div>
}

export default ({data, totalPage}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemData, setItem] = useState({});
  const onClick = (item) => {
    setItem(item);
    setModalOpen(true);
  }
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