import React from 'react';
import './Pagination.css';

class Pagination extends React.Component {
  createControls = () => {
    const {
      totalPage,
      activePage,
      onChange,
    } = this.props;
    let controls = [];
    let totalPageCount = totalPage / 10;
    if (totalPageCount > 10) {
      totalPageCount = 10;
    }
    for (let i = 1; i <= totalPageCount; i++) {
      const baseClassName = 'pagination-controls-button';
      const activeClassName = i === activePage ? `${baseClassName}-active` : '';
      controls.push(
        <div
          className={`${baseClassName} ${activeClassName}`}
          onClick={() => onChange(i)}
          key={i}
        >
          {i}
        </div>
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
      <div className='pagination'>
        <div className='pagination-controls'>
          {this.createControls()}
        </div>
      </div>
    );
  }
}

export default Pagination;