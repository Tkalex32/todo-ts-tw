interface Props {
  todo: Todo;
  toggleComplete: ToggleTodo;
}

const TodoItem: React.FC<Props> = ({ todo, toggleComplete }) => {
  return (
    <li className="list-none">
      <label className={todo.complete ? "line-through" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleComplete(todo)}
        />
        <span>{todo.text}</span>
      </label>
    </li>
  );
};

export default TodoItem;
