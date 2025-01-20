import React, { useState } from "react";
import { NameForm } from "../components";

const UseEffect = () => {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div className="text-center mt04">
      <button
        className="bg-blue-800 p-2"
        onClick={() => setToggleForm(!toggleForm)}
      >
        Enter Name
      </button>
      {toggleForm && <NameForm />}
    </div>
  );
};

export default UseEffect;
