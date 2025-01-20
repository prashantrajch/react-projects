const TodoItem = ({ data, handleDeletePost, handleEditPost }) => {
  const { userId, id, title, body } = data;

  return (
    <li className="bg-gray-600 border-white border-l-2 py-3 px-2 text-white flex flex-col gap-4">
      <div className="font-bold text-amber-500">{id}</div>
      <div className="title">
        <span className="font-bold text-amber-500">Title:- </span>
        {title}
      </div>
      <div className="news">
        <span className="font-bold text-amber-500">News:- </span>
        {body}
      </div>
      <div className="btns flex gap-4 mt-4">
        <button
          className="px-6 py-2 bg-green-500 text-white rounded-md "
          onClick={() => handleEditPost(id)}
        >
          Edit
        </button>
        <button
          className="px-6 py-2 bg-red-500 text-white rounded-md "
          onClick={() => handleDeletePost(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
