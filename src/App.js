import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ModalBox from "./components/ModalBox";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  const addTodo = (event) => {
    event.preventDefault();
    if (task.length < 3) {
      setVisibleModal(true);
    } else {
      setTodo([...todo, { title: task, id: Math.random().toString() }]);
      setTask("");
    }
  };

  const deleteTodo = (id) => {
    const resultTodo = todo.filter((item) => item.id !== id);
    setTodo(resultTodo);
  };

  return (
    <div className="container mx-auto mt-10">
      {/* Header */}
      <h1 className="text-4xl font-semibold tracking-wide text-center">
        React Todo App
      </h1>

      {/* Input Form */}
      <InputForm task={task} setTask={setTask} addTodo={addTodo} />

      {/* Todo List Item */}
      <TodoList todo={todo} deleteTodo={deleteTodo} />

      {/* Modal Box */}
      <ModalBox visibleModal={visibleModal} setVisibleModal={setVisibleModal} />
    </div>
  );
}

export default App;
