import React, { useEffect, useState } from "react";

const NameForm = () => {
  const [name, setName] = useState('');
  const [mark, setMark] = useState(false);

  useEffect(() => {
    console.log("Component is loaded");

    return () => {
      console.log("Component is unloaded.....!`");
    };
  });

  return (
    <div>
      <input type="text" name="name" id="name" placeholder="Enter you name" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setMark(!mark)}>Save</button>
      <div>
        <p>Name: {name} </p>
        <p>Mark: {mark? 'Yes' : "Noe"} </p>
      </div>
    </div>
  );
};

export default NameForm;
