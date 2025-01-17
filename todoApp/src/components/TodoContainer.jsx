import { useTodoContext } from "../context/todoContext";
import TodoItem from "./TodoItem";

const TodoContainer = ({ todos }) => {
  const { handleClearAll } = useTodoContext();

  return (
    <div className="container">
      <ul className="todo-container">
        {todos && todos?.map((todo) => <TodoItem key={todo.id} data={todo} />)}
      </ul>
      {todos.length  !== 0 && (
        <button
          className="btn clear-btn"
          onClick={handleClearAll}
          disabled={todos.length === 0}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default TodoContainer;
