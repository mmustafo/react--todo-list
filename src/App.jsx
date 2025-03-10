import { useState } from "react";

function TodoList() {
  const [inputV, setInputV] = useState("");
  const [items, setItems] = useState([]);

  const getinputV = (e) => {
    setInputV(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (inputV.trim() === "") return;

    const newItem = {
      id: Date.now(), 
      text: inputV,
    };

    setItems([...items, newItem]);
    setInputV("");
  };
  const trashsh = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };
  return (
    <div className="container">
      <form className="todo-form" onSubmit={submit}>
        <input
          type="text"
          className="todoInput"
          value={inputV}
          onChange={getinputV}
        />
        <button type="submit" className="btnSubmit">
          Submit
        </button>
      </form>
      <ul className="todo-ul">
        {items.map((itm) => (
          <li key={itm.id} className="todo-li">
            <h4>{itm.text}</h4>
            <i
              onClick={() => trashsh(itm.id)}
              className="fa-solid fa-trash"
              id="delete"
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
