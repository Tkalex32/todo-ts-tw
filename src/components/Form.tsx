interface Props {}

const Form = (props: Props) => {
  return (
    <div className="flex">
      <input type="text" placeholder="add new todo" />
      <button className="rounded-full bg-gray-500 h-8 w-8 flex items-center justify-center text-white">
        +
      </button>
    </div>
  );
};

export default Form;
