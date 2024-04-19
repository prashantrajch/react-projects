import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function TodoItems({ todo,handleCheckTodo,handleEditTodo,handleDeleteTodo }) {
  return (
    <li
      className={`p-2 rounded-md flex gap-5 items-center justify-between ${
        todo.check ? "bg-green-500" : "bg-[#ffb703]"
      }`}
    >
      <label htmlFor={todo.id} className="w-full cursor-pointer">
        <input
          type="checkbox"
          name="check"
          id={todo.id}
          className="mr-1"
          checked={todo.check}
          onChange={()=> handleCheckTodo(todo.id)}
        />
        <span className={todo.check ? "line-through" : ""}>{todo.todo}</span>
      </label>
      <div className="flex gap-2">
        <button className="p-1 px-2 pr-1.5 rounded-md bg-blue-500 text-white hover:bg-blue-700" onClick={()=> handleEditTodo(todo.id)}>
          <FaEdit />
        </button>
        <button className="p-1 rounded-md bg-red-500 text-white hover:bg-red-700" onClick={() => handleDeleteTodo(todo.id)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
}
