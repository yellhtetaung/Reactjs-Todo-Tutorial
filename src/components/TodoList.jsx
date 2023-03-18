const TodoList = ({ todo, deleteTodo }) => {
  return (
    <div className="w-9/12 mx-auto">
      {todo.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-slate-200 p-4 rounded-md shadow-lg my-4 flex flex-row justify-between items-center"
          >
            <p className="text-black text-lg font-bold">{item.title}</p>

            <button
              className="bg-red-600 px-5 py-2 text-white rounded-md shadow-md active:bg-opacity-30"
              onClick={() => deleteTodo(item.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
