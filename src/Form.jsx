import { useState } from "react";

function Form() {
    const[input, setInput] = useState("");
    const[input1, setInput1] = useState("");
    const[input2, setInput2] = useState("");
    const[input3, setInput3] = useState("");

    let details ={Firstname:input, LastName:input1, Location:input2, Year:input3};

    function ClearFormInputs(event) {
      Array.from(event.target).forEach((e) => (e.value="") );
    }

    function handleSubmit(event) {
      event.preventDefault();
      console.log(details);
      ClearFormInputs(event);
      setInput("");
      setInput1("");
      setInput2("");
      setInput3("");
  
    }

     console.log(event.target.value);
  return (
    <div className="clearForm">
      <h1>Form two, 2</h1>
      <p>Please, carefully fill in the provided fields below.</p>
      <p>Submit form and it will clear automatically the form fields after submit:</p>
      <hr />
      <form onSubmit={handleSubmit} className="myForm">
        <div className="input">
        <labe htmlFor="fname" >Enter First Name</labe>
        <input type="text" name="fname" placeholder="Enter your first name" required value={input} onChange={(e)=>{
            setInput(e.target.value)
        }}></input>
        </div>

        <div className="input">
        <labe htmlFor="fname" >Enter Last Name</labe>
        <input type="text" name="lname" placeholder="Enter your last name" required value={input1} onChange={(event)=>{
            setInput1(event.target.value)
        }} />
        </div>

        <div className="input">
        <labe htmlFor="locname" >Location</labe>
        <input type="text" name="locname" placeholder="Enter your location name" rel="" value={input2} onChange={(event)=>{
            setInput2(event.target.value)
        }} />
        </div>

        <div className="input">
          <label htmlFor="years">Years</label>
        <input type="number" name="years" max={64} value={input3.value} onChange={(event)=>{
            setInput3(+event.target.value)
        }} required/>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;