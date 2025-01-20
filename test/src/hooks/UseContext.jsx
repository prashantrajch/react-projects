import React, { useCallback, useState } from "react";
import { Button } from "../components";

const UseContext = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    console.log("increment inside");
    setCount((prev) => prev + 1);
  }, []);
  
  const handleDecrement = useCallback(() => {
    console.log("decrement inside");
    setCount((prev) => prev - 1);
  }, []);


  return (
    <div className="p-4 h-lvh flex flex-col justify-center gap-2 m-auto w-[250px]">
      <h1 className="mb-4 text-center">Count:- {count} </h1>
      <Button className="p-4 bg-blue-300 rounded-md" onClick={handleIncrement}>
        Increment
      </Button>
      <Button className="p-4 bg-red-300 rounded-md" onClick={handleDecrement}>
        Decrement
      </Button>
    </div>
  );
};

export default UseContext;
