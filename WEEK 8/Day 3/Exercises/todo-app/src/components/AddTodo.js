import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === '') return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="New todo" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
