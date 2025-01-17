import { useState } from "react";
import { TodoContainer } from "../components";
import { useTodoContext } from "../context/todoContext";
import { DisplayFilterData } from "../utils/DisplayFilterData";

const Home = () => {
  const { handleSubmit, todos, searchTodos, isSearch } = useTodoContext();
  const [todoInput, setTodoInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(todoInput.trim());
    setTodoInput("");
  };

  const data = DisplayFilterData(searchTodos, todos);

  return (
    <div className="container">
      <form className="todo-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="todo-input"
          id="todo-input"
          className="todo-input"
          placeholder="Enter your todo"
          autoComplete="off"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button type="submit" className="add-btn btn">
          Add
        </button>
      </form>
      {isSearch && searchTodos.length == 0 ? (
        <h1 className="no-data">No data found</h1>
      ) : (
        <TodoContainer todos={data} />
      )}
    </div>
  );
};

export default Home;
