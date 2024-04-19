import { useEffect, useState } from "react";
import StatesApi from "./OptionsApi";
import FormSelectInput from "./FormSelectInput";

export default function DependentOptions({ form, formError,handleChange }) {
  const [states, setStates] = useState("");
  const [districts, setDistricts] = useState("");

  useEffect(() => {
    if (form.state) {
      let findDistricts = StatesApi.find((item) => item.state == form.state);
      setDistricts(findDistricts.districts);
    }
  }, [form]);

  useEffect(() => {
    setStates(StatesApi.map((item) => item.state));
  },[])


  return (
    <div className="row">
      <FormSelectInput
        selectClassName={"inputField"}
        selectLabel={"State"}
        selectId={"state"}
        selectName={"state"}
        inputError={formError}
        handleChange={handleChange}
        options={states}
      />
      <FormSelectInput
        selectClassName={"inputField"}
        selectLabel={"City"}
        selectId={"city"}
        selectName={"city"}
        inputError={formError}
        handleChange={handleChange}
        options={form.state && districts}
      />
    </div>
  );
}
