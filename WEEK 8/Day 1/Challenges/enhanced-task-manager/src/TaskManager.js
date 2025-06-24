import { useReducer, useRef, useState } from "react";
import { taskReducer, initialState } from "./TaskReducer";

export default function TaskManager() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const inputRef = useRef();
  const editRef = useRef();
  const [editingId, setEditingId] = useState(null);

  const handleAddTask = () => {
    const text = inputRef.current.value.trim();
    if (text) {
      dispatch({ type: "ADD_TASK", payload: text });
      inputRef.current.value = "";
    }
  };

  const handleEditSave = (id) => {
    const newText = editRef.current.value.trim();
    if (newText) {
      dispatch({ type: "EDIT_TASK", payload: { id, text: newText } });
      setEditingId(null);
    }
  };

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === "ALL") return true;
    if (state.filter === "ACTIVE") return !task.completed;
    if (state.filter === "COMPLETED") return task.completed;
    return true;
  });

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      <div className="add-task">
        <input ref={inputRef} placeholder="Enter a task..." />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="filters">
        <button onClick={() => dispatch({ type: "SET_FILTER", payload: "ALL" })}>
          All
        </button>
        <button onClick={() => dispatch({ type: "SET_FILTER", payload: "ACTIVE" })}>
          Active
        </button>
        <button onClick={() => dispatch({ type: "SET_FILTER", payload: "COMPLETED" })}>
          Completed
        </button>
      </div>

      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
            />
            {editingId === task.id ? (
              <>
                <input ref={editRef} defaultValue={task.text} />
                <button onClick={() => handleEditSave(task.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <button onClick={() => setEditingId(task.id)}>Edit</button>
              </>
            )}
            <button onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
