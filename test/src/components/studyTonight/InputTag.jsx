import React from "react";

const InputTag = ({ data, error }) => {
  const { label, placeholder, type = "text", id, name } = data;

//   console.log(name,error[name])

  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={placeholder}
      />
      {error[name] && (
        <p className="text-red-700 text-sm mt-0.5 ml-1"> {error[name]} </p>
      )}
    </div>
  );
};

export default InputTag;
