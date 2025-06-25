import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/planner/plannerSlice';

const AddTask = ({ selectedDate }) => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (taskText.trim()) {
      dispatch(addTask({ date: selectedDate, task: taskText }));
      setTaskText('');
    }
  };

  return (
    <div>
      <input value={taskText} onChange={(e) => setTaskText(e.target.value)} />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
