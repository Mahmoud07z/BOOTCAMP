import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h2>Redux Todo List</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
