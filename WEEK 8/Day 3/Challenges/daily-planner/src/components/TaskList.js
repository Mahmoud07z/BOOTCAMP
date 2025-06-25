import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../features/planner/plannerSlice';

const TaskList = ({ selectedDate }) => {
  const tasks = useSelector((state) => state.planner.tasksByDate[selectedDate] || []);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState('');

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editId === task.id ? (
            <>
              <input value={newText} onChange={(e) => setNewText(e.target.value)} />
              <button
                onClick={() => {
                  dispatch(editTask({ date: selectedDate, id: task.id, newText }));
                  setEditId(null);
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <button onClick={() => { setEditId(task.id); setNewText(task.text); }}>Edit</button>
              <button onClick={() => dispatch(deleteTask({ date: selectedDate, id: task.id }))}>
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
