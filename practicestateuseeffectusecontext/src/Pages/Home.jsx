import React, { useContext, useEffect } from "react";
import axios from "axios";
import { ContextValue } from "../Context/Context"; // Ensure this matches your export

const Home = () => {
  const { setData, data } = useContext(ContextValue);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get("https://fakestoreapi.com/products");
        const userList = result.data;
        setData(userList); // Set the fetched data
      } catch (error) {
        console.log("No data found in this product");
      }
    };
    fetchProducts();
  }, [setData]); // Optional: include setData in dependencies if necessary

  console.log("Data at Home Page", data);

  return (
    <div>
      <h1>Products List</h1>
      {data && data.length > 0 ? (
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Home;
