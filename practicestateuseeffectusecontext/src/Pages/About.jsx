import React, { useContext, useState } from "react";
import { ContextValue } from "../Context/Context";

const About = () => {
  const { setUser, user } = useContext(ContextValue); // Ensure setUser and user are defined in your context
  const [value, setValue] = useState("");

  // Correctly naming the handleChange function
  const handleChange = (e) => {
    e.preventDefault(); // Corrected preventDefault usage
    setValue(e.target.value);
  };

  const handleClick = () => {
    setUser(value);
    setValue("")
     // Update the user in context
  };

  return (
    <div>
      <div style={{ textAlign: "center", fontWeight: "700" }}>
        Welcome to the Login Page
      </div>

      <div>
        <label htmlFor="firstname">Enter Your Name</label>
        <input
          type="text"
          id="firstname" // Added id to match htmlFor
          placeholder="Enter Your Name"
          value={value}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleClick}>Click Me</button>
      <div>Thank You {user || "Guest"}</div> {/* Handle undefined user */}
    </div>
  );
};

export default About;
