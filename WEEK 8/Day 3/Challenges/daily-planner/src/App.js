import React, { useState } from 'react';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Daily Planner</h1>
      <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <AddTask selectedDate={selectedDate} />
      <TaskList selectedDate={selectedDate} />
    </div>
  );
}

export default App;
