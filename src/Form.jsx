import { useState } from "react"

function Form() {
    const[input, setInputs] = useState();

    function handleSubmit(event) {
      event.PreventDefault();
    }

    function handleChange(event) {
      setInputs(event => (event.target.value) );
    }
     
  return (
    <div>
      <form onSubmit={handleSubmit} className="myForm">
        <div className="input">
        <labe htmlFor="fname" >Enter First Name</labe>
        <input type="text" name="fname" placeholder="Enter your first name" value={input} onChange={handleChange}></input>
        </div>

        <div className="input">
        <labe htmlFor="fname" >Enter Last Name</labe>
        <input type="text" name="lname" placeholder="Enter your last name" value={input} onChange={handleChange} />
        </div>

        <div className="input">
        <labe htmlFor="locname" >Location</labe>
        <input type="text" name="locname" placeholder="Enter your location name" value={input} onChange={handleChange} />
        </div>

        <div className="input">
          <label htmlFor="years">Years</label>
        <input type="number" name="years" max={64} value={input} onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;