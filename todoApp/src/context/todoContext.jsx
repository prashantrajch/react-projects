import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

export const TodoContext = createContext(null);

const getLocalStorageData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (data) {
    return data;
  }
  return [];
};

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState(getLocalStorageData());
  const [searchTodos, setSearchTodos] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const pendingData = useMemo(
    () => todos && todos.filter((todo) => !todo.isComplete),
    [todos]
  );
  const completedData = useMemo(
    () => todos && todos.filter((todo) => todo.isComplete),
    [todos]
  );
  const importantData = useMemo(
    () => todos && todos.filter((todo) => todo.isImportant),
    [todos]
  );

  const handleSearch = (value, currentPage) => {
    console.log("i am called be handleSearch function:- ", value);
    if (!value) {
      setIsSearch(false);
      setSearchTodos([]); // Clear search results when input is empty
      return;
    }
    let dataToSearch;

    switch (currentPage) {
      case "/pending":
        dataToSearch = pendingData;
        break;
      case "/completed":
        dataToSearch = completedData;
        break;
      case "/important":
        dataToSearch = importantData;
        break;
      default:
        dataToSearch = todos;
        break;
    }

    const searchValue =
      dataToSearch &&
      dataToSearch.filter((todo) =>
        todo.text.toLowerCase().includes(value.toLowerCase())
      );
    setSearchTodos(searchValue);
    setIsSearch(true);
  };

  const handleSubmit = (todoInput) => {
    if (!todoInput) {
      toast.error("You must enter todo...!");
      return;
    }

    for (let todo of todos) {
      if (todo.text.toLowerCase().includes(todoInput.toLowerCase())) {
        toast.warn("This task is already in your list..!");
        return;
      }
    }

    let newTodo = {
      id: new Date().getTime().toString(),
      text: todoInput.trim(),
      isComplete: false,
      isImportant: false,
    };
    setTodos((prevTodo) => [...prevTodo, newTodo]);

    toast.success("Todo add Successfully...!");
  };

  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todoElm) =>
        todoElm.id === id
          ? { ...todoElm, isComplete: !todoElm.isComplete }
          : todoElm
      )
    );
  };

  const handleEditSubmit = (id, value) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, text: value, isComplete: false } : todo
      )
    );
    toast.success("you have edit successful...! ");
  };

  const handleDelete = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
    toast.warn("Your todo deleted successfully...");
  };

  const handleImportant = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, isImportant: !todo.isImportant } : todo
      )
    );
  };

  const handleClearAll = () => {
    setTodos("");
    toast.success("Delete all todos successfull");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    if (pendingData.length) {
      document.title = `(${pendingData.length}) Todo App`;
    } else {
      document.title = `Todo App`;
    }
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        handleSubmit,
        toggleComplete,
        handleEditSubmit,
        handleDelete,
        pendingData,
        completedData,
        handleImportant,
        handleClearAll,
        importantData,
        handleSearch,
        searchTodos,
        isSearch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);
