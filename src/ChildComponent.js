import React, { useState } from "react";

function ChildComponent({ getvalueFromInput }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getvalueFromInput(value);
    console.log(value);
    setValue("");
  };
  return (
    <div className="child-container">
      <h2>Child</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter a value you need to the array</label>
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ChildComponent;
