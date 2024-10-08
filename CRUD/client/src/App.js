import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [filterusers, setfilterusers] = useState([]);
  const [isModalopen, setModelopen] = useState(false);
  const [messages, setmessage] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    city: "",
  });
  const getAllusers = async () => {
    await axios.get("http://localhost:8000/users").then((res) => {
      setUser(res.data);
      setfilterusers(res.data);
    });
  };
  useEffect(() => {
    getAllusers();
  }, []);

  const handlesearch = (e) => {
    const searchtext = e.target.value.toLowerCase();
    const filterusers = user.filter(
      (value) =>
        value.name.toLowerCase().includes(searchtext) ||
        value.city.toLowerCase().includes(searchtext)
    );
    setfilterusers(filterusers);
  };

  const handleDelete = async (id) => {
    const isConfiremed = window.confirm("Are You Sure You want to delete");
    if (isConfiremed) {
      await axios.delete(`http://localhost:8000/users/${id}`).then((res) => {
        setUser(res.data);
        setfilterusers(res.data);
      });
    }
  };

  const handleAddRecord = () => {
    setUserData({
      name: "",
      age: "",
      city: "",
    });
    setModelopen(true);
  };
  const closemodal = () => {
    setModelopen(false);
    getAllusers();
  };
  const handleData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (userData.id) {
      await axios
        .patch(`http://localhost:8000/users/${userData.id}`, userData)
        .then((res) => {
          console.log("res", res.data);
        });
    } else {
      await axios.post("http://localhost:8000/users", userData).then((res) => {
        console.log("res", res.data);
      });
    }
    closemodal();
    setUserData({
      name: "",
      age: "",
      city: "",
    });

    setTimeout(() => {
      setmessage(true);
    }, 1000);
    setmessage(false);
  };

  const handleupdateRecord = (user) => {
    setUserData(user);
    setModelopen(true);
  };
  return (
    <div className="container">
      <h3> CRUD Application with React js Frontend and Node js Backensd</h3>
      <div className="input-search">
        <input
          type="text"
          placeholder="Search Text Here"
          onChange={handlesearch}
        />
        <button className="btn green" onClick={handleAddRecord}>
          Add Record
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filterusers &&
            filterusers.map((value, index) => (
              <tr key={value.id}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.city}</td>
                <td>
                  <button
                    className="btn green"
                    onClick={() => handleupdateRecord(value)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn red"
                    onClick={() => handleDelete(value.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isModalopen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closemodal}>
              &times;
            </span>
            <h2>{userData.id ? "Update Record" : "Add User"}</h2>
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={userData.name}
                onChange={handleData}
              />
            </div>
            <div className="input-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                name="age"
                id="age"
                value={userData.age}
                onChange={handleData}
              />
            </div>
            <div className="input-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={userData.city}
                onChange={handleData}
              />
            </div>
            <button className="btn green" onClick={handlesubmit}>
              {userData.id ? "Update Record" : "Add User"}
            </button>
            <p
              style={{
                textAlign: "center",
                color: "red",
                padding: "10px",
                fontWeight: "bold",
              }}
            >
              {messages ? "Click the close to see the add" : ""}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
