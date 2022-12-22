import React from "react";
import { useLocation } from "react-router-dom";

function DataReciever() {
  let location = useLocation();

  console.log(location.state.nameOfUser);
  return (
    <div>
      <h1>Hello i am {location.state.nameOfUser}</h1>
    </div>
  );
}
export default DataReciever
