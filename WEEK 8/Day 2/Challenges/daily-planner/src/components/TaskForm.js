import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../redux/actions';

export default function TaskForm({ editingTask, clearEdit }) {
  const [text, setText] = useState(editingTask ? editingTask.text : '');
  const selectedDay = useSelector(state => state.selectedDay);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (text.trim() === '') return;

    if (editingTask) {
      dispatch(editTask(selectedDay, editingTask.id, text));
      clearEdit();
    } else {
      dispatch(addTask(selectedDay, text));
    }

    setText('');
  };

  return (
    <div>
      <input
        placeholder="Enter task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>{editingTask ? 'Update' : 'Add'}</button>
      {editingTask && <button onClick={clearEdit}>Cancel</button>}
    </div>
  );
}
