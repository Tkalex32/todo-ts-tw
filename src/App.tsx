import Form from "./components/Form";
import TodoList from "./components/TodoList";

const todos: Array<Todo> = [
  { text: "buy food", complete: true },
  { text: "cook food", complete: false },
  { text: "eat food", complete: false },
];

const App: React.FC = () => {
  return (
    <div>
      <div>date-time</div>
      <TodoList todo={todos[0]} />
      <Form />
    </div>
  );
};

export default App;
