import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function AddData() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    setTodo([...todo, { id: uuidv4(), title: input }]);
    setInput(input);
  };

  const handleDelete = ({ id }) => {
    setTodo(
      todo.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <>
      <form onSubmit={submit}>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="enter things"
          onChange={onInputChange}
        />
        <button type="submit">Submit</button>

        <h1>
          {todo.map((todo) => (
            <>
              <li key={todo.id}>
                <input
                  type="text"
                  value={todo.title}
                  onchange={(event) => {
                    event.preventDefault();
                  }}
                />

                <div>
                  <button type="submit">Edit</button>
                </div>
                <div>
                  <button type="submit" onClick={() => handleDelete(todo)}>
                    delete
                  </button>
                </div>
              </li>
            </>
          ))}
        </h1>
      </form>
    </>
  );
}
export default AddData;
