import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import FormSelectInput from "./FormSelectInput";
import StatesApi from "./OptionsApi";
import DependentOptions from "./DependenetOptions";

export default function Form({ formData }) {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    cnfPassword: "",
    dob: "",
    gender: "Male",
    state: "",
    city: "",
    pincode: "",
    country: "",
    contact: "",
    hobbies: [],
  });
  const [formError, setFormError] = useState();
  const [country, setCountry] = useState([
    "India",
    "Nepal",
    "Bhutan",
    "Sri Lanks",
    "Bangladesh",
    "Pakistan",
    "China",
  ]);

  function handleChange(ev) {
    const { checked, name, value, id } = ev.target;
    if (name == "hobbies") {
      if (checked) {
        setForm({ ...form, hobbies: [...form.hobbies, id] });
      } else {
        setForm({
          ...form,
          hobbies: form.hobbies.filter((item) => item !== id),
        });
      }
      return;
    }
    setForm({ ...form, [name]: value });
  }

  function handleReset() {
    console.log("i am reset button clicked")
    setForm({
      fName: "",
      lName: "",
      email: "",
      password: "",
      cnfPassword: "",
      dob: "",
      gender: "Male",
      state: "",
      city: "",
      pincode: "",
      country: "",
      contact: "",
      hobbies: [],
    });
    setCountry([
      "India",
      "Nepal",
      "Bhutan",
      "Sri Lanks",
      "Bangladesh",
      "Pakistan",
      "China",
    ]);
  }

  function handleSubmit(e) {
    console.log('im handle submit button clicked')
    e.preventDefault();
    const isValid = validForm();
    if (isValid) {
      formData(form);
      alert("Form is submitted");
      handleReset();
    } else {
        console.log('im clicked')
      alert("Form not validate");
    }
  }

  function validForm() {
    let errorObj = {};
    if (!form.fName) {
      errorObj.fName = "First Name is required";
    }
    if (!form.lName) {
      errorObj.lName = "Last Name is required";
    }
    if (!form.email) {
      errorObj.email = "Email is required";
    } else if (!validEmail(form.email)) {
      errorObj.email = "Please Enter a valid email";
    }
    if (!form.password) {
      errorObj.password = "Password is required";
    } else if (!validPassword(form.password)) {
      errorObj.password =
        "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
    }
    if (!form.cnfPassword) {
      errorObj.cnfPassword = "Confirm password is required";
    } else if (form.password !== form.cnfPassword) {
      errorObj.cnfPassword = "Password doesn't match...";
    }
    if (!form.dob) {
      errorObj.dob = "DOB is required";
    }
    if (!form.state) {
      errorObj.state = "State is required";
    }
    if (!form.city) {
      errorObj.city = "City is required";
    }
    if (!form.pincode) {
      errorObj.pincode = "Pincode is required";
    }
    if (!form.country) {
      errorObj.country = "Country is required";
    }
    if (!form.contact) {
      errorObj.contact = "Contact number is required";
    } else if (!validContact(form.contact)) {
      errorObj.contact = "Number must be 10 digit";
    }
    if (form.hobbies.length === 0) {
      errorObj.hobbies = "Minimum 1 hobbies is required";
    }

    setFormError(errorObj);
    return Object.keys(errorObj).length === 0;
  }

  function validEmail(email) {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
  }

  function validPassword(password) {
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  }

  function validContact(contact) {
    return contact.length === 10;
  }

  return (
    <form action="" className="container">
      <h1>Form in React</h1>
      <div className="row">
        <FormInput
          inputClassname={"inputField"}
          inputType={"text"}
          inputLabel={"First Name"}
          inputName={"fName"}
          inputId={"fName"}
          inputPlaceholder={"Enter your first name"}
          inputError={formError}
          value={form.fName}
          handleChange={handleChange}
        />
        <FormInput
          inputClassname={"inputField"}
          inputType={"text"}
          inputLabel={"Last Name"}
          inputName={"lName"}
          inputId={"lName"}
          inputPlaceholder={"Enter your last name"}
          inputError={formError}
          value={form.lName}
          handleChange={handleChange}
        />
      </div>
      <FormInput
        inputClassname={"inputField"}
        inputType={"email"}
        inputLabel={"Email"}
        inputName={"email"}
        inputId={"email"}
        inputPlaceholder={"example@gmail.com"}
        inputError={formError}
        value={form.email}
        handleChange={handleChange}
      />
      <div className="row">
        <FormInput
          inputClassname={"inputField"}
          inputType={"password"}
          inputLabel={"Password"}
          inputName={"password"}
          inputId={"password"}
          inputPlaceholder={"Enter your password"}
          inputError={formError}
          value={form.password}
          handleChange={handleChange}
        />
        <FormInput
          inputClassname={"inputField"}
          inputType={"password"}
          inputLabel={"Confirm Password"}
          inputName={"cnfPassword"}
          inputId={"cnfPassword"}
          inputPlaceholder={"Cofirm Password"}
          inputError={formError}
          value={form.cnfPassword}
          handleChange={handleChange}
        />
      </div>
      <FormInput
        inputClassname={"inputField"}
        inputType={"date"}
        inputLabel={"Date of Birth"}
        inputName={"dob"}
        inputId={"dob"}
        inputPlaceholder={"Date"}
        inputError={formError}
        value={form.dob}
        handleChange={handleChange}
      />
      <div className="col">
        <p>Gender</p>
        <FormInput
          inputClassname={"inputCheckbox"}
          inputName={"gender"}
          inputType={"radio"}
          checked={form.gender == "Male"}
          inputLabel={"Male"}
          inputId={"male"}
          inputError={formError}
          value={"Male"}
          handleChange={handleChange}
        />
        <FormInput
          inputClassname={"inputCheckbox"}
          inputName={"gender"}
          inputType={"radio"}
          checked={form.gender == "Female"}
          inputLabel={"Female"}
          inputId={"female"}
          inputError={formError}
          value={"Female"}
          handleChange={handleChange}
        />
        <FormInput
          inputClassname={"inputCheckbox"}
          inputName={"gender"}
          inputType={"radio"}
          checked={form.gender == "Transgender"}
          inputLabel={"Transgender"}
          inputId={"transgender"}
          inputError={formError}
          value={"Transgender"}
          handleChange={handleChange}
        />
      </div>
      <h2>Address</h2>
      <DependentOptions form={form} formError={formError} handleChange={handleChange}/>
      <div className="row">
        <FormInput
          inputClassname={"inputField"}
          inputType={"number"}
          inputLabel={"Pin Code"}
          inputName={"pincode"}
          inputId={"pincode"}
          inputPlaceholder={"Enter pincode"}
          inputError={formError}
          value={form.pincode}
          handleChange={handleChange}
        />
        <FormSelectInput
          selectClassName={"inputField"}
          selectLabel={"Country"}
          selectId={"country"}
          selectName={"country"}
          inputError={formError}
          options={country}
          handleChange={handleChange}
        />
      </div>
      <FormInput
        inputClassname={"inputField"}
        inputType={"number"}
        inputLabel={"Contact Number"}
        inputName={"contact"}
        inputId={"contact"}
        inputPlaceholder={"Enter your contact number"}
        inputError={formError}
        value={form.contact}
        handleChange={handleChange}
      />
      <div>
        <p>Hobbies</p>
        <div className="col">
          <FormInput
            inputClassname={"inputCheckbox"}
            inputName={"hobbies"}
            inputType={"checkbox"}
            inputLabel={"Photography"}
            inputId={"Photography"}
            handleChange={handleChange}
          />
          <FormInput
            inputClassname={"inputCheckbox"}
            inputName={"hobbies"}
            inputType={"checkbox"}
            inputLabel={"Video Gaming"}
            inputId={"Video Gaming"}
            handleChange={handleChange}
          />
          <FormInput
            inputClassname={"inputCheckbox"}
            inputName={"hobbies"}
            inputType={"checkbox"}
            inputLabel={"Programming Coding"}
            inputId={"Programming Coding"}
            handleChange={handleChange}
          />
          <FormInput
            inputClassname={"inputCheckbox"}
            inputName={"hobbies"}
            inputType={"checkbox"}
            inputLabel={"Hiking"}
            inputId={"Hiking"}
            handleChange={handleChange}
          />
          <FormInput
            inputClassname={"inputCheckbox"}
            inputName={"hobbies"}
            inputType={"checkbox"}
            inputLabel={"Music"}
            inputId={"Music"}
            handleChange={handleChange}
          />
          <FormInput
            inputClassname={"inputCheckbox"}
            inputName={"hobbies"}
            inputType={"checkbox"}
            inputLabel={"Singing"}
            inputId={"Singing"}
            handleChange={handleChange}
          />
        </div>
        {formError && <p className="error">{formError.hobbies} </p>}
      </div>
      <div className="btns">
        <button className="btn btn-secondary" onClick={handleReset}>
          Clear All
        </button>
        <button className="btn btn-primary" onClick={handleSubmit}> Submit</button>
      </div>
    </form>
  );
}
