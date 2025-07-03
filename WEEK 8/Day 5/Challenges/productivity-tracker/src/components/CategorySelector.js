import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectSelectedCategoryId
} from '../features/tasks/selectors';
import { setSelectedCategory } from '../features/tasks/tasksSlice';

const CategorySelector = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const selectedId = useSelector(selectSelectedCategoryId);

  return (
    <select
      value={selectedId || ''}
      onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
    >
      <option value="" disabled>Select a category</option>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>{cat.name}</option>
      ))}
    </select>
  );
};

export default CategorySelector;
