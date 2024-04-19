import { useState } from "react";
import Form from "./components/Form";
import ShowFormData from './components/ShowFormData'
function App() {
  const[formData,setFormData] = useState();
  
  return <div>
  {
    !formData ?
    <Form formData={setFormData}/>:
    <ShowFormData formData={formData} />
  } 
  </div>
}

export default App;
