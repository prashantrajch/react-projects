import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoItems from "./components/TodoItem";
import { v4 as uuidv4 } from "uuid";

function getLocalStorage() {
  let todos = localStorage.getItem("todos");
  if (todos && todos.length > 0) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
}

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState("");

  function handleSubmit(e, id) {
    e.preventDefault();
    if (isEdit != "") {
      let filterTodo = todos.find((todo) => isEdit == todo.id);
      filterTodo.todo = value;
      filterTodo.check = false;
      setTodos((prevTodo) =>
        prevTodo.map((todo) => (todo.id == isEdit ? filterTodo : todo))
      );
      setIsEdit("");
    } else {
      let newObj = {
        id: uuidv4(),
        todo: value,
        check: false,
      };
      setTodos([...todos, newObj]);
    }
    setValue("");
  }

  function handleCheckTodo(id) {
    let filterTodo = todos.find((todo) => id == todo.id);
    filterTodo.check = !filterTodo.check;
    setTodos((prevTodo) =>
      prevTodo.map((todo) => (todo.id == id ? filterTodo : todo))
    );
  }
  function handleEditTodo(id) {
    let newTodo = todos.find((todo) => todo.id == id);
    setValue(newTodo.todo);
    setIsEdit(id);
  }
  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-full md:w-[60%] mx-auto bg-[#219ebc] p-4">
      <h1 className="text-3xl font-extrabold mb-3 ">Todo App</h1>
      <Header value={value} setValue={setValue} handleSubmit={handleSubmit} />
      <div className="h-1 my-4 bg-[#023047]"></div>
      <ul className="flex flex-col gap-2 list-none">
        {todos && todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItems
              key={todo.id}
              todo={todo}
              handleCheckTodo={handleCheckTodo}
              handleEditTodo={handleEditTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))
        ) : (
          <li className="text-center text-2xl font-bold">
            Todo is not Available
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
