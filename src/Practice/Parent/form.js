import { useEffect, useState } from "react";

import axios from "axios";
export default function Form() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    gender: "",
    dropdown: "",
  });
  const [button, setButton] = useState("");

  const a = (event) => {
    return setButton((prevdata) => {
      return { ...prevdata, [event.target.name]: event.target.value };
    });
  };

  const submit = (event) => {
    event.preventDefault();
    setData(button);
  };

  return (
    <>
      <form onSubmit={submit}>
        <input type="text" onChange={a} name="firstName" placeholder="name" />
        <br />
        <br />
        <input
          type="text"
          onChange={a}
          name="lastName"
          placeholder="lastname"
        />
        <br />
        <br />
        <input type="text" onChange={a} name="Email" placeholder="email" />
        <br />
        <br />
        <input type="radio" onChange={a} name="gender" value="male" /> Male
        <input
          type="radio"
          onChange={a}
          name="gender"
          value="Female"
        /> Female <br />
        <br />
        <select onChange={a} name="dropdown">
          <option onChange={a} name="hi">
            hello
          </option>
          <option onChange={a} name="j">
            hiii
          </option>
        </select>
        <br />
        <br />
        <button type="submit">submit </button>
        <h1>
          firstName<label style={{ color: "red" }}> {data.firstName} </label>
        </h1>
        <h1>
          lastName <label style={{ color: "red" }}>{data.lastName}</label>
        </h1>
        <h1>
          Email <label style={{ color: "red" }}>{data.Email}</label>
        </h1>
        <h1>
          Gender <label style={{ color: "red" }}>{data.gender}</label>
        </h1>
        <h1>
          dropdown <label style={{ color: "red" }}>{data.dropdown}</label>
        </h1>
      </form>
    </>
  );
}
