import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategorySelector from './components/CategorySelector';
import TaskList from './components/TaskList';
import {
  addCategory,
  addTask,
} from './features/tasks/tasksSlice';
import { selectSelectedCategoryId } from './features/tasks/selectors';

const App = () => {
  const dispatch = useDispatch();
  const selectedCategoryId = useSelector(selectSelectedCategoryId);

  const handleAddCategory = () => {
    const name = prompt('Enter new category name:');
    if (name) {
      dispatch(addCategory(name));
    }
  };

  const handleAddTask = () => {
    const title = prompt('Enter task title:');
    if (title && selectedCategoryId) {
      dispatch(addTask({ title, categoryId: selectedCategoryId }));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🧠 Productivity Tracker</h1>

      <button onClick={handleAddCategory}>Add Category</button>

      <div style={{ marginTop: '10px' }}>
        <CategorySelector />
      </div>

      {selectedCategoryId && (
        <>
          <div style={{ marginTop: '10px' }}>
            <button onClick={handleAddTask}>Add Task</button>
          </div>
          <TaskList />
        </>
      )}
    </div>
  );
};

export default App;
