import { useState } from "react"
import "./App.css";


function App() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 1969,
    color: "red"
    });

    const {brand, model, year, color} = car;
    console.log(car);

    function handleBrandChange(event) {
      setCar( c => ( {...c, brand: event.target.value}) );
    };
    function handleModelChange(event) {
      setCar( c => ( {...c, model: event.target.value}) );
    };
    function handleYearChange(event) {
      setCar( c => ( {...c, year: event.target.value}) );
    }
   function handleColorChange(event) {
     setCar( c => ( {...c, color: event.target.value}) );
    }

  return (
    <div className="objects">
     <h1>Hello, World! Have you ever haerd of  {car.model} car? <br /> Type in your car brand below</h1> <hr />

     <p>My car is a {car.brand} {car.model} from {car.year} and it is {car.color} </p>

     <div>
       <label htmlFor="carBrand">Car Brand
       <input type="text" name="carBrand" value={car.brand} onChange={handleBrandChange} />
       </label>

       <label htmlFor="carModel">Car Model
       <input type="text" name="carModel" value={car.model} onChange={handleModelChange} />
       </label>

       <label htmlFor="carYear">Car Year
       <input type="number" name="carYear" max ="2024"value={car.year} onChange={handleYearChange} />
       </label>
 
       <label htmlFor="carColor">Car Color
       <input type="text" name="carColor" value={car.color} onChange={handleColorChange} />
       </label>

       <button type="submit">Submit</button>

     </div>
    </div>
  );
}

export default App;
