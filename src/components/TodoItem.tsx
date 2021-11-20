interface Todo {
  todo: string;
  completed: boolean;
}

interface Props {
  todo: Todo;
}

const Todo: React.FC<Props> = ({ todo }) => {
  return <div>1</div>;
};

export default Todo;
