import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../../common/view/Modal';
import downloadSvg from '../../common/view/Icon/download.svg';

const ModalContent = styled.div`
  width: 50%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
`;

const ModalImage = styled.img`
  text-align: center;
  width: 100%;
  height: 70vh;
  @media only screen and (max-width: 950px) {
    height: 60vh;
  }
`;

const User = styled.div`
  display: flex;
  margin-top: 10px;
  @media only screen and (max-width: 950px) { 
    display: block;
  }
`;

const UserDetailWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 950px) {
    display: block;
    text-align: center;
  }
`;

const UserProfileImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 40px;
  margin-top: 8px;
`;

const UserDetail = styled.div`
  margin-left: 10px;
  margin-top: -10px;
`;

const UserName = styled.p`
  color: #000000;
  font-weight: bold;
  font-size: 20px;
  @media only screen and (max-width: 950px) {
    line-height: 5px;
  }
`;

const UserInstagram = styled.a`
  color: #2A2B8D;
  font-weight: bold;
  font-size: 15px;
  @media only screen and (max-width: 780px) {
    font-size: 10px;
  }
`;

const DownloadButtonWrapper = styled.div`
  margin-left: auto;
  @media only screen and (max-width: 950px) {
    text-align: center;
    margin-top: 15px;
  }
`;

const DownloadButton = styled.a`
  margin-left: auto;
  background: #FFFFFF;
  border: 2px solid #2A2B8D;
  box-sizing: border-box;
  border-radius: 10px;
  width: 200px;
  height: 60px;
  color: #2A2B8D;
  padding: 20px;
  display: flex;
  cursor: pointer;
  text-decoration: none;

  @media only screen and (max-width: 950px) {
    display: inline-flex;
  }
`;

const DownloadIcon = styled.img`
  margin-right: auto;
`;

const DownloadText = styled.span`
  margin-left: auto;
  font-size: 18px;
  font-weight: bold;
  line-height: 13px;
`;

const PhotoListWrapper = styled.div`
  margin-top: 160px;
  column-count: 3;
  column-gap: 1em;
  padding: 20px;

  @media only screen and (max-width: 1355px) and (min-width: 930px) {
    margin-top: 400px;
    column-count: 2;
  }

  @media only screen and (max-width: 1100px) and (min-width: 930px) {
    margin-top: 400px;
  }

  @media only screen and (max-width: 950px) {
    margin-top: 400px;
    column-count: 1;
  }

`;

const ListItem = styled.div`
  display: inline-block;
  margin: 10px;
  width: 100%;
`;


const renderModalContent = (item) => {
  const hasInstagram = !!item.user.instagram_username;
  return <ModalContent>
    <ModalImage src={item.urls.regular} alt={item.alt_description} />
    <User>
      <UserDetailWrapper>
        <UserProfileImage src={item.user.profile_image.large} alt={item.user.name} />
        <UserDetail>
          <UserName>{item.user.first_name}</UserName>
          { 
            hasInstagram &&
            <UserInstagram
              className={'user-portfolio'}
              href={`https://instagram.com/${item.user.instagram_username}`}
              target={'_blank'}
              title={item.user.name}
            >
                @{item.user.instagram_username}
            </UserInstagram>
          }
        </UserDetail>
      </UserDetailWrapper>
      <DownloadButtonWrapper>
        <DownloadButton
          download={item.urls.raw}
          href={item.urls.raw}
          target={'_blank'}
          title={item.alt_description}
        >
          <DownloadIcon src={downloadSvg} alt={item.alt_description} />
          <DownloadText className={'download-text'}>Download</DownloadText>
        </DownloadButton>
      </DownloadButtonWrapper>
    </User>
  </ModalContent>
}

export default ({data, totalPage}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemData, setItem] = useState({});
  const onClick = (item) => {
    setItem(item);
    setModalOpen(true);
  }
  return (
    <PhotoListWrapper>
      {data.map(item => {
        return (
          <ListItem
            key={item.id}
            onClick={() => onClick(item)}
          >
            <img src={item.urls.small}  alt={item.alt_description}/>
          </ListItem>
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
    </PhotoListWrapper>
  );
};