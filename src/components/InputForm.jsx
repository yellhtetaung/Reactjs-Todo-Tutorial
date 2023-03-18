import React from "react";

const InputForm = ({ task, setTask, addTodo }) => {
  return (
    <form
      onSubmit={(event) => addTodo(event)}
      className="mt-3 text-center w-9/12 mx-auto"
    >
      <label className="text-lg block text-start mb-3" htmlFor="todo">
        Task
      </label>
      <input
        type="text"
        id="todo"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        className="bg-slate-200 w-full h-12 rounded-md pl-4 shadow-sm"
        placeholder="Enter New Todo"
        autoComplete="off"
      />
      <button
        type="submit"
        className=" bg-blue-600 text-white text-lg px-10 py-3 my-3 rounded-md shadow-lg bg-opacity-100 transition  hover:bg-opacity-90 active:bg-opacity-50"
      >
        Add
      </button>
    </form>
  );
};

export default InputForm;
