import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasksByCategory } from '../features/tasks/selectors';
import {
  toggleTaskCompleted,
} from '../features/tasks/tasksSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasksByCategory);

  const handleToggle = useCallback((id) => {
    dispatch(toggleTaskCompleted(id));
  }, [dispatch]);

  if (!tasks.length) return <p>No tasks for this category.</p>;

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
            {task.title}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
