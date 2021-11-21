import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const initialTodos: Array<Todo> = [
  { text: "buy food", complete: true },
  { text: "cook food", complete: false },
  { text: "eat food", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleComplete: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div>
      <div>date-time</div>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <Form addTodo={addTodo} />
    </div>
  );
};

export default App;
