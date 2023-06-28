import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import './App.css';

export default function App() {
  const [list, setList] = useState(["Dinesh", "Kumar"]);
  console.log(list);

  const addElementsToArray = (newValue) => {
    const newElement = [...list, newValue];
    setList(newElement);
  };
  return (
    <div className="app-container">
      <div>
        <ChildComponent getvalueFromInput={addElementsToArray} />
      </div>
      <div className="list-container">
        {list.map((x) => (
          <li className="list-item"  key={x}>{x}</li>
        ))}
      </div>
    </div>
  );
}