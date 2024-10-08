import React, { useReducer } from "react";
const SET_USER = "SET_USER";
const ADD_VALUE = "ADD_VALUE";
const UPDATE_VALUE = "UPDATE_VALUE";
const SET_EDIT_INDEX = "SET_EDIT_INDEX";
const DELETE_VALUE = "DELETE_VALUE";

const initialState = {
  user: "",
  values: [],
  editIndex: -1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case ADD_VALUE:
      return { ...state, values: [...state.values, state.user], user: "" };
    case SET_EDIT_INDEX:
      return {
        ...state,
        editIndex: action.payload,
        user: state.values[action.payload],
      };
    case UPDATE_VALUE:
      const updatevalues = [...state.values];
      updatevalues[state.editIndex] = state.user;
      return { ...state, values: updatevalues, user: "", editIndex: -1 };
    case DELETE_VALUE:
      const filteredValues = state.values.filter(
        (_, i) => i !== action.payload
      );
      return { ...state, values: filteredValues, editIndex: -1, user: "" };
    default:
      return state; // Always return the current state
  }
};
const Reucerprac = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: SET_USER, payload: e.target.value });
  };
  const handleClick = () => {
    if (state.user) {
      if (state.editIndex >= 0) {
        dispatch({ type: UPDATE_VALUE });
      } else {
        dispatch({ type: ADD_VALUE });
      }
    }
  };
  const handleEdit = (index) => {
    dispatch({ type: SET_EDIT_INDEX, payload: index });
  };
  const handleDelete = (index) => {
    dispatch({ type: DELETE_VALUE, payload: index });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ color: "red", fontWeight: "700" }}>
        Welcome to UseReducer todo list app
      </div>
      <div>
        <label htmlFor="Firstname" name="fname">
          Enter Your Name
        </label>
        <input
          type="text"
          id="Firstname"
          placeholder="Enter your Name"
          value={state.user}
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          {state.editIndex >= 0 ? "Update" : "Add"}
        </button>
      </div>
      <div>
        <h3>Addedl List of Users</h3>
        {state.values.length > 0 ? (
          state.values.map((value, index) => (
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

export default Reucerprac;
