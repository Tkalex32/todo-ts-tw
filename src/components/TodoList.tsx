import TodoItem from "./TodoItem";

interface Props {
  todos: Array<Todo>;
  toggleComplete: ToggleTodo;
}

const TodoList: React.FC<Props> = ({ todos, toggleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.text}
            todo={todo}
            toggleComplete={toggleComplete}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
