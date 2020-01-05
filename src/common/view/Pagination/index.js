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
    if (totalPageCount > 15) {
      totalPageCount = 15;
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