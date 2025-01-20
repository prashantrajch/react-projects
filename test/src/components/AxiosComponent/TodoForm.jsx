const TodoForm = ({ formData, setFormData, handleSumbit, isEdit }) => {
  return (
    <form onSubmit={handleSumbit} className="max-w-[600px] mx-auto bg-slate-600 flex justify-between items-center md:flex-nowrap flex-wrap gap-4 rounded-md p-3">
      <div className="flex gap-4 md:flex-nowrap flex-wrap">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Add Title"
          className="px-2 w-full py-1 rounded-sm outline-none border-none text-xl "
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          type="text"
          name="add-post"
          id="add-post"
          placeholder="Add Post"
          className="px-2 py-1 w-full rounded-sm outline-none border-none text-xl "
          value={formData.post}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, post: e.target.value }))
          }
        />
      </div>
      <button type="submit" className="bg-lime-600 px-4 py-1 rounded-md text-xl ">
        {isEdit ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
