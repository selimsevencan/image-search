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
    background: #2A2B8D;
  }
  ${({ active }) => active && `
    background-color: #2A2B8D;
    color: white;
  `}
`;

class Pagination extends React.Component {
  createControls = () => {
    const {
      total,
      activePage,
      onChange,
    } = this.props;
    let controls = [];
    let totalCount = total;
    if (totalCount > 11) {
      totalCount = 11;
    }
    for (let i = 1; i <= totalCount; i++) {
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
      total
    } = this.props;
    if (total < 10) return null;
    return (
      <PaginationWrapper>
        {this.createControls()}
      </PaginationWrapper>
    );
  }
}

export default Pagination;