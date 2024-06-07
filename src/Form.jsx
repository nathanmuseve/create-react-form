import { useState } from "react"

function Form() {
    const[input, setInput] = useState("");
    const[input1, setInput1] = useState("");
    const[input2, setInput2] = useState("");
    const[input3, setInput3] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
      
    }

    // function handleFirstNameChange(event) {
    // }

    // function handleLastNameChange(event) {
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   setInput1(values => ({[name]:value}));
    // }

    // function handleLocationChange(event) {
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   setInput2(values => ({[name]:value}));
    // }

    // function handleYearChange(event) {
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   setInput3(values => ({[name]:value}));
    // }
     console.log(event.target.value);
  return (
    <div>
      <form onSubmit={handleSubmit} className="myForm">
        <div className="input">
        <labe htmlFor="fname" >Enter First Name</labe>
        <input type="text" name="fname" placeholder="Enter your first name" required value={input} onChange={(e)=>{
            setInput(e.target.value)
        }}></input>
        </div>

        <div className="input">
        <labe htmlFor="fname" >Enter Last Name</labe>
        <input type="text" name="lname" placeholder="Enter your last name" required value={input1} onChange={(e)=>{
            setInput1(e.target.value)
        }} />
        </div>

        <div className="input">
        <labe htmlFor="locname" >Location</labe>
        <input type="text" name="locname" placeholder="Enter your location name" rel="" value={input2} onChange={(e)=>{
            setInput2(e.target.value)
        }} />
        </div>

        <div className="input">
          <label htmlFor="years">Years</label>
        <input type="number" name="years" max={64} value={input3.value} onChange={(e)=>{
            setInput3(e.target.value)
        }} required/>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;