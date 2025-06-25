import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDate: {}  // Example: { '2025-06-25': [{ id, text }] }
};

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasksByDate[date]) state.tasksByDate[date] = [];
      state.tasksByDate[date].push({ id: Date.now(), text: task });
    },
    editTask: (state, action) => {
      const { date, id, newText } = action.payload;
      const taskList = state.tasksByDate[date] || [];
      const task = taskList.find(t => t.id === id);
      if (task) task.text = newText;
    },
    deleteTask: (state, action) => {
      const { date, id } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date]?.filter(t => t.id !== id) || [];
    },
  },
});

export const { addTask, editTask, deleteTask } = plannerSlice.actions;
export default plannerSlice.reducer;
