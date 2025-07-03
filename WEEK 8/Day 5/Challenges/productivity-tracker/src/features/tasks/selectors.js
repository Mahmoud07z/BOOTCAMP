import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state) => state.tasks.tasks;
export const selectCategories = (state) => state.tasks.categories;
export const selectSelectedCategoryId = (state) => state.tasks.selectedCategoryId;

export const selectTasksByCategory = createSelector(
  [selectTasks, selectSelectedCategoryId],
  (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
);
