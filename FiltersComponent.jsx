import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/slices/filtersSlice';

const Filters = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filterType, value) => {
    dispatch(setFilter({ filterType, value }));
  };

  return (
    <div className="filters">
      <label>
        <input
          type="checkbox"
          onChange={(e) => handleFilterChange('vegetarian', e.target.checked)}
        />
        Vegetarian
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(e) => handleFilterChange('glutenFree', e.target.checked)}
        />
        Gluten-Free
      </label>
    </div>
  );
};

export default Filters;