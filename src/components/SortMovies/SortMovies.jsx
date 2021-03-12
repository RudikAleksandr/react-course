import React from 'react';
import { Row, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import cn from './SortMovies.module.css';

const sortTypes = ['name', 'rating', 'release date'];

const SortMovies = ({ activeType = 'name', onSelectSortType }) => {

  const sortTypeItems = sortTypes.map((sortType, index) => (
    <Dropdown.Item
      className={cn.sortTypeItem}
      key={index}
      eventKey={sortType}>
      {sortType}
    </Dropdown.Item>
  ));

  return (
    <Row className={`align-items-center justify-content-end ${cn.sortMovies}`}>
      <span className={cn.sortByLabel}>sort by</span>
      <DropdownButton
        onSelect={onSelectSortType}
        as={ButtonGroup}
        className={cn.sortTypeDropdown}
        variant=""
        title={activeType}
      >
        {sortTypeItems}
      </DropdownButton>
    </Row>
  );
}

SortMovies.propTypes = {
  activeType: PropTypes.string,
  onSelectSortType: PropTypes.func.isRequired
};

export default SortMovies;
