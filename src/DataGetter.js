import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataReciever from "./DataReciever";

function DataGetter() {
  const [name, setName] = useState("");
  let navigate = useNavigate();
  function handleOnChange(event) {
    setName(event.target.value);
  }
  
  function handleSubmit(ev) {
    ev.preventDefault();
    name && navigate("/DataReciever",{ state: { nameOfUser: name } });
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Please enter your Name"
          onChange={handleOnChange}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DataGetter;
