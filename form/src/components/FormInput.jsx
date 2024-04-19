import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function FormInput({
  inputLabel,
  inputType,
  inputId,
  inputPlaceholder,
  inputError,
  value,
  handleChange,
  inputClassname,
  inputName,
  checked,
}) {
  const [isShow, setIsShow] = useState(false);
  function handleChangeType() {
    setIsShow(!isShow);
  }
  console.log(inputType);
  return (
    <div className={inputClassname}>
      <label htmlFor={inputId}>{inputLabel}</label>
      <div style={{ position: "relative" }}>
        <input
          type={inputType == 'password'? isShow? "text" : "password":inputType}
          name={inputName}
          id={inputId}
          title={inputName}
          placeholder={inputPlaceholder}
          value={value}
          checked={checked}
          onChange={handleChange}
        />
        {inputType == "password" ? (
          isShow ? (
            <div onClick={handleChangeType} className="showPassword">
              <FaEyeSlash />
            </div>
          ) : (
            <div onClick={handleChangeType} className="showPassword">
              <FaEye />
            </div>
          )
        ) : null}
      </div>
      {inputError && <p className="error">{inputError[inputId]} </p>}
    </div>
  );
}
