import { FaPlus } from "react-icons/fa";
export default function Header({ value, setValue, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        name="newTodos"
        id="newTodos"
        placeholder="Add new Tasks"
        className="w-full px-2 outline-none"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
      <button className="p-2 px-4 bg-[#023047] text-white hover:bg-[#034363]">
        <FaPlus />
      </button>
    </form>
  );
}
