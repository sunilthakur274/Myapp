import React, { useState } from "react";

export default function TodoList() {
  
  const [activity, setActivity] = useState("");
  const [datalist, setDataList] = useState([]);

  const handle = () => {
    setDataList((datalist) => {
      const updateList = [...datalist, activity];
      setActivity("");
      return updateList;
    })
  }

  
  function deleteData(i) {
    const del = datalist.filter((elem, id) => {
      return i != id;
    })
    setDataList(del);            
  }

  return (
    <>
      <h1>Todo List</h1>

      <input
        type="text" 
        placeholder="enter things"
        value={activity}
        onChange={(event) => {
          setActivity(event.target.value);
        }}
      />
      <button type="submit" onClick={handle}>
        Submit
      </button>

      {datalist != [] &&
        datalist.map((value, i) => {
          return (
            <>
              <p key={i}></p>
              <p>{value}</p>
              
              <button
                type="submit"
                onClick={() => {
                  deleteData(i);
                }}
              >
                Delete
              </button>
            </>
          );
        })}
    </>
  );
}
