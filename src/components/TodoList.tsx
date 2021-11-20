import TodoItem from "./TodoItem";

interface TodoListProps {
  todo: Todo;
}

const TodoList: React.FC<TodoListProps> = ({ todo }) => {
  return (
    <li className="list-none">
      <label className={todo.complete ? "line-through" : ""}>
        <input type="checkbox" checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoList;
