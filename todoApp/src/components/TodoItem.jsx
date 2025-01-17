import React, { useState } from "react";
import { MdDelete, MdEdit, MdSave, MdStar } from "react-icons/md";
import { useTodoContext } from "../context/todoContext";

const TodoItem = ({ data }) => {
  const { handleDelete, toggleComplete, handleEditSubmit, handleImportant } =
    useTodoContext();
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(data?.text);

  const handleToggleEdit = () => setIsEdit(!isEdit);

  const handleSaveEdit = () => {
    handleEditSubmit(data.id, editValue);
    handleToggleEdit();
  };

  return (
    <li className="todo-list">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={data?.isComplete}
        onChange={() => !isEdit && toggleComplete(data.id)}
      />
      {isEdit ? (
        <input
          className={`todo-text ${isEdit && "active"}`}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          disabled={!isEdit}
        />
      ) : (
        <div className={`todo-text ${data.isComplete && "complete"}`}>
          {editValue}
        </div>
      )}
      <div className="action-btns">

        <button
          className={`btn important-btn ${data?.isImportant && "active"}`}
          onClick={() => handleImportant(data?.id)}
        >
          <MdStar />
        </button>
        <button
          className="btn edit-btn"
          onClick={isEdit ? handleSaveEdit : handleToggleEdit}
        >
          {isEdit ? <MdSave /> : <MdEdit />}
        </button>
        <button
          className="btn delete-btn"
          onClick={() => handleDelete(data?.id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
