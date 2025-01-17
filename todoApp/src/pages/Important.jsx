import React from "react";
import { TodoContainer } from "../components";
import { useTodoContext } from "../context/todoContext";
import { DisplayFilterData } from "../utils/DisplayFilterData";

const Important = () => {
  const { importantData, searchTodos,isSearch } = useTodoContext();

  const data = DisplayFilterData(searchTodos, importantData);

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

export default Important;
