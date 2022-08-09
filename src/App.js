import { useState, useEffect } from "react";
import "./App.css";
import Radio from "./radio.js"
function App() {
  const initialValues = { firstname: "", cin: "", lastname: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
   // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "firstname is required!";
    }
    if (!values.cin) {
      errors.cin = "CIN  is required!";
    } 
    else if (values.cin.length < 7) {
      errors.cin = "CIN must be more than 7 characters";
    } else if (values.cin.length > 9) {
      errors.lastname = "CIN cannot exceed more than 10 characters";
    }
    if (!values.lastname) {
      errors.lastname = "lastname is required";
    } 
    return errors;
  };








  

  return (


    <div className="container">
  <div className="contact-box">
  <div className="left"></div>
  
    <div className="right">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      )  : (
        <pre></pre>
      )}




      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
       
        
            
            <input
            className="field"
              type="text"
              name="firstname"
              placeholder="firstname"
              value={formValues.firstname}
              onChange={handleChange}
            />
        
          <p>{formErrors.firstname}</p>
        
          
           
            <input
            className="field"
              type="text"
              name="lastname"
              placeholder="lastname"
              value={formValues.lastname}
              onChange={handleChange}
            />
         
          <p>{formErrors.lastname}</p>
          <div className="">
            
            <input
            className="field"
              type="text"
              name="cin"
              placeholder="CIN"
              value={formValues.cin}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.cin}</p>
<Radio/>  

        
        
      </form>
    </div>
    </div>
   </div>
  
  );

}

export default App;
