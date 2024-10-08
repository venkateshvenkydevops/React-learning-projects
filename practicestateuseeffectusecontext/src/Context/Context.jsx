import React, { createContext, useState } from "react";

// Create the context
export const ContextValue = createContext();

const ContextPage = ({ children }) => {
  const [data, setData] = useState([]);
  const[user,setUser] = useState("")

  console.log("Data at ContextPage", data);

  return (
    <ContextValue.Provider value={{ data, setData,setUser,user}}>
      {children}
    </ContextValue.Provider>
  );
};

export default ContextPage;
