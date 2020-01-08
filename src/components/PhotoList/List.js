import React from 'react';
import styled from 'styled-components';
import Modal from '../../common/view/Modal';
import downloadSvg from '../../common/view/Icon/download.svg';

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

const ModalImage = styled.img`
  width: auto;
  max-width: 100%;
  height: 70vh;
  @media only screen and (max-width: 950px) {
    height: 60vh;
  }
  @media only screen and (max-width: 500px) {
    height: 40vh;
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
`;

const UserDetail = styled.div`
  margin-left: 10px;
`;

const UserName = styled.p`
  color: #000000;
  font-weight: bold;
  font-size: 20px;
  line-height: 0.1;
  text-align: left;
  @media only screen and (max-width: 950px) {
    line-height: 5px;
    text-align: center;
  }
`;

const UserInstagram = styled.a`
  color: #2A2B8D;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  @media only screen and (max-width: 780px) {
    font-size: 10px;
  }
`;

const DownloadButtonWrapper = styled.div`
  margin-left: auto;
  align-items: center;
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
  &:hover {
    background: #efefef;
    filter: brightness(100%);
  }
  @media only screen and (max-width: 950px) {
    display: inline-flex;
  }

  @media only screen and (max-width: 780px) {
    width: 140px;
    padding: 10px;
  }
`;

const DownloadIcon = styled.img`
  margin-right: auto;
  vertical-align: middle;
`;

const DownloadText = styled.span`
  margin-left: auto;
  font-size: 18px;
  font-weight: bold;
  vertical-align: middle;
  @media only screen and (max-width: 425px) {
    margin-left: 5px;
    margin-top: 5px;
  }
`;

const PhotoListWrapper = styled.div`
  margin-top: 120px;
  column-count: 3;
  column-gap: 1em;
  padding: 20px;

  @media only screen and (max-width: 1355px) and (min-width: 1100px) {
    margin-top: 130px;
    column-count: 2;
  }

  @media only screen and (max-width: 1100px) and (min-width: 930px) {
    margin-top: 400px;
    column-count: 2;
  }

  @media only screen and (max-width: 950px) {
    margin-top: 400px;
    column-count: 1;
  }
  @media only screen and (max-width: 780px) {
    margin-top: 350px;
    padding: 0;
  }
  @media only screen and (max-width: 500px) {
    margin-top: 0px;
    padding: 0px;
  }
`;

const ListItem = styled.div`
  display: inline-block;
  margin: 10px;
  width: 100%;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    margin: 10px 0;
    height: auto;
    img {
      width: 100%;
    }
  }
`;

 class PhotoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      itemData: {},
    }
  }

  onClick = (item) => {
    this.setState({
      itemData: item,
      isModalOpen: true,
    })
  }

  onClose = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  renderModalContent = (item) => {
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
            download={`${item.links.download}?force=true`}
            href={`${item.links.download}?force=true`}
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

  render() {
    const {
      isModalOpen,
      itemData
    } = this.state;
    const {
      data
    } = this.props;
    return (
      <>
        <PhotoListWrapper>
          {data.map(item => {
            return (
              <ListItem
                key={item.id}
                onClick={() => this.onClick(item)}
              >
                <img src={item.urls.small}  alt={item.alt_description}/>
              </ListItem>
            )
          })}
          {
            isModalOpen && 
            <Modal
              isOpen={isModalOpen}
              onClose={this.onClose}
              children={this.renderModalContent(itemData)}
            />
          }
        </PhotoListWrapper>
      </>
    );
  }
};

export default PhotoList;