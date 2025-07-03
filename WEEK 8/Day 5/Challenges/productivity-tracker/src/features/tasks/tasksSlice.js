import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  categories: [],
  selectedCategoryId: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push({ id: nanoid(), name: action.payload });
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: nanoid(),
        title: action.payload.title,
        completed: false,
        categoryId: action.payload.categoryId,
      });
    },
    toggleTaskCompleted: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const {
  addCategory,
  setSelectedCategory,
  addTask,
  toggleTaskCompleted,
} = tasksSlice.actions;

export default tasksSlice.reducer;
