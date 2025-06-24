import { useState } from 'react';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="App">
      <h2>Daily Planner</h2>
      <DatePicker />
      <TaskForm editingTask={editingTask} clearEdit={() => setEditingTask(null)} />
      <TaskList onEdit={setEditingTask} />
    </div>
  );
}

export default App;
