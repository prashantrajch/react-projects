import { useTodoContext } from "../context/todoContext";
import { TodoContainer } from "../components";
import { DisplayFilterData } from "../utils/DisplayFilterData";

const Completed = () => {
  const { completedData, searchTodos,isSearch } = useTodoContext();
  const data = DisplayFilterData(searchTodos, completedData);
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

export default Completed;
