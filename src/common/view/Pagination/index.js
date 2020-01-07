import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: inline-flex;
  margin: 0 auto;
`;
const PaginationButton = styled.div`
  background-color: white;
  border-radius: 0.15em;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  cursor: default;
  margin: 0.25em 0.25em;
  padding: 0.5em 0.75em;
  cursor: pointer;
  &:hover {
    filter: brightness(50%);
  }
  ${({ active }) => active && `
    background-color: #4D7EA8;
    color: white;
  `}
`;

class Pagination extends React.Component {
  createControls = () => {
    const {
      totalPage,
      activePage,
      onChange,
    } = this.props;
    let controls = [];
    let totalPageCount = totalPage / 10;
    if (totalPageCount > 11) {
      totalPageCount = 11;
    }
    for (let i = 1; i <= totalPageCount; i++) {
      const isActive = i === activePage;
      controls.push(
        <PaginationButton
          active={isActive}
          onClick={() => onChange(i)}
          key={i}
        >
          {i}
        </PaginationButton>
      );
    }
    return controls;
  }

  render() {
    const {
      totalPage
    } = this.props;
    if (totalPage < 20) return null;
    return (
      <PaginationWrapper>
        {this.createControls()}
      </PaginationWrapper>
    );
  }
}

export default Pagination;