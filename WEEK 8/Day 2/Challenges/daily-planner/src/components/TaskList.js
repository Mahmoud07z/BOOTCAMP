import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';

export default function TaskList({ onEdit }) {
  const { selectedDay, tasksByDay } = useSelector(state => state);
  const tasks = tasksByDay[selectedDay] || [];
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => dispatch(deleteTask(selectedDay, task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
