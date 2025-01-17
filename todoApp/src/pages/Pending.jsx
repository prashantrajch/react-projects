import React from "react";
import TodoItem from "../components/TodoItem";
import { useTodoContext } from "../context/todoContext";
import { TodoContainer } from "../components";
import { DisplayFilterData } from "../utils/DisplayFilterData";

const Pending = () => {
  const { pendingData, searchTodos,isSearch } = useTodoContext();
  const data = DisplayFilterData(searchTodos, pendingData);

  return (
    <>
      {isSearch && searchTodos.length == 0 ? (
        <h1 className="no-data">No data found</h1>
      ) : (
        <TodoContainer todos={data} />
      )}
    </>
  );
};

export default Pending;
