import React, { useState } from "react";
import InputTag from "./InputTag";

// label, placeholder, type = "text", id, name

const input = [
  {
    label: "Name",
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Enter you name",
  },
  {
    label: "Branch",
    type: "text",
    id: "branch",
    name: "branch",
    placeholder: "Enter you branch",
  },
];

const HandleForm = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const [student, setStudent] = useState([
    {
      name: "Prashant Raj",
      branch: "BCA",
      gender: "male",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());

    setError({});
    if (formObj.name === "") {
      console.log("I am run in name id");
      // errors = {...error,name: "Name is required"};
      setError((prevError) => ({ ...prevError, name: "Name is required" }));
    }
    if (formObj.branch === "") {
      console.log("I am run in branch");
      // errors = {...error,branch: "Branch is required"};
      setError((prevError) => ({ ...prevError, branch: "Branch is required" }));
    }

    console.log(formObj.gender === undefined);
    if (formObj?.gender === undefined) {
      // errors = {...error,gender: 'Gender is required'}
      setError((prevError) => ({ ...prevError, gender: "Gender is required" }));
    }
    setForm(formObj);
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-24 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-3" onSubmit={handleSubmit}>
        {input.map((inputElm) => (
          <InputTag key={inputElm.id} data={inputElm} error={error} />
        ))}
        <div>
          <div className="flex gap-4 items-center">
            <span htmlFor="gender">Gender</span>
            <label htmlFor="male" className="">
              <input type="radio" name="gender" value="male" id="male" />
              &nbsp;Male
            </label>
            <label htmlFor="female">
              <input type="radio" name="gender" value="female" id="female" />
              &nbsp;Female
            </label>
          </div>
          {error.gender && (
            <p className="text-red-700 text-sm mt-0.5 ml-1"> {error.gender} </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 w-full text-center p-2 bg-blue-500 rounded-md text-white"
          >
            Submit
          </button>
        </div>
      </form>
      <hr className="mt-5" />
      <h1>hell</h1>
    </div>
  );
};

export default HandleForm;
