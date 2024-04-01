import React from 'react';
import './selectVehiclePage.css'

export const  SelectVehiclePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div class="container">
        <div class="hero-section">
          <h1>Select Your Vehicle type</h1>
          <h6>this helps us tailor your experience</h6>
        </div>

        <form action="#" method="post">
          <div class="micro">
            <input type="checkbox" name="micro" id="micro"></input>
            <label for="micro"> Micro </label>
            <span></span>
          </div>

          <div class="coupe">
            <input type="checkbox" name="coupe" id="coupe"></input>
            <label for="coupe"> Coupe </label>
          </div>

          <div class="hatchback">
            <input type="checkbox" name="hatchback" id="hatcback"></input>
            <label for="hatcback"> Hatchback </label>
          </div>

          <div class="sedan">
            <input type="checkbox" name="sedan" id="sedan"></input>
            <label for="sedan">Sedan</label>
          </div>

          <div class="minivan">
            <input type="checkbox" name="minivan" id="minivan"></input>
            <label for="minivan"> Minivan </label>
          </div>

          <div class="truck">
            <input type="checkbox" name="truck" id="truck"></input>
            <label for="truck"> Truck </label>
          </div>

          <div class="btn-submit">
            <button type="submit" class="submit"> Next</button>
          </div>
        </form>

      </div>
    </div>

  );
}

export default SelectVehiclePage();
