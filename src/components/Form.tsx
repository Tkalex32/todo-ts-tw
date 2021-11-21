import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  addTodo: AddTodo;
}

const Form: React.FC<Props> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="flex">
      <input
        type="text"
        placeholder="add new todo"
        value={newTodo}
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="rounded-full bg-gray-500 h-8 w-8 flex items-center justify-center text-white"
      >
        +
      </button>
    </form>
  );
};

export default Form;
