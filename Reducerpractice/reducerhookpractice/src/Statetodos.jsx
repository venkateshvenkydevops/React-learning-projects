import React, { useState } from "react";

const Statetodos = () => {
  const [user, setUser] = useState("");
  const [value, setValue] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  const handleClick = () => {
    if (user) {
      if (editIndex >= 0) {
        const updateValue = [...value];
        updateValue[editIndex] = user; // Update existing name
        setValue(updateValue);
        setEditIndex(-1); // Reset edit index
      } else {
        setValue([...value, user]); // Add new name
      }
      setUser(""); // Clear input
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setUser(value[index]);
  };

  const handleDelete = (index) => {
    const updatedValues = value.filter((_, i) => i !== index);
    setValue(updatedValues);
    if (editIndex === index) {
      setEditIndex(-1); // Reset edit index if the deleted name was being edited
      setUser(""); // Clear the input if the edited name was deleted
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ color: "red", fontWeight: "700" }}>
        Welcome to state todo list app
      </div>
      <div>
        <label htmlFor="Firstname" name="fname">
          Enter Your Name
        </label>
        <input
          type="text"
          id="Firstname"
          placeholder="Enter your Name"
          value={user}
          onChange={handleChange}
        />
        <button onClick={handleClick}>{editIndex >= 0 ? "Update" : "Add"}</button>
      </div>
      <div>
        <h3>ADDED List Of Users</h3>
        {value.length > 0 ? (
          value.map((value, index) => (
            <div key={index}>
              <span>{value}</span>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))
        ) : (
          <p>Guest</p>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Statetodos;
