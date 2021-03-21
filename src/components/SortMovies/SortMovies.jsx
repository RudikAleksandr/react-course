import React, { useMemo } from 'react';
import { Row, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import cn from './SortMovies.module.css';

const sortTypes = [{
  label: 'genre',
  value: 'genres',
},
{
  label: 'rating',
  value: 'vote_average',
},
{
  label: 'release date',
  value: 'release_date',
}]

const sortTypeItems = sortTypes.map(({ label, value }, index) => (
  <Dropdown.Item
    className={cn.sortTypeItem}
    key={value}
    eventKey={value}>
    {label}
  </Dropdown.Item>
));

const SortMovies = ({ activeType, onSelectSortType }) => {

  const title = useMemo(() => {
    return sortTypes.find(({ value }) => value === activeType).label
  }, [activeType]);

  return (
    <Row className={`align-items-center justify-content-end ${cn.sortMovies}`}>
      <span className={cn.sortByLabel}>sort by</span>
      <DropdownButton
        onSelect={onSelectSortType}
        as={ButtonGroup}
        className={cn.sortTypeDropdown}
        variant=""
        title={title}
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
