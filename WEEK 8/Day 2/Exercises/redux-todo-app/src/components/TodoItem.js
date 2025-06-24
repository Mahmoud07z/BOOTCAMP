import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.completed ? "Undo" : "Done"}
      </button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  );
}
