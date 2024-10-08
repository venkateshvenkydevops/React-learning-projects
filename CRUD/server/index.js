const express = require("express");
const users = require("./sample.json");
const app = express();
app.use(express.json()); //express middleware
const cors = require("cors");
const port = 8000;
const fs = require("fs");
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
); //Middleware

//Display Users
app.get("/users", (req, res) => {
  return res.json(users);
});

//Add New User
app.post("/users", (req, res) => {
  let { name, age, city } = req.body;
  if (!name || !age || !city) {
    res.status(400).send({ message: "All Feild Required" });
  }
  let id = Date.now();
  users.push({ id, name, age, city });
  fs.writeFile("./sample.json", JSON.stringify(users), (err, data) => {
    return res.json({ message: "User detail added succefully" });
  });
});

//Update(Edited) User

app.patch("/users/:id", (req, res) => {
  let id = Number(req.params.id);
  let { name, age, city } = req.body;
  if (!name || !age || !city) {
    res.status(400).send({ message: "All Feild Required" });
  }

  let index = users.findIndex((user) => user.id == id);
  users.splice(index, 1, { ...req.body });
  fs.writeFile("./sample.json", JSON.stringify(users), (err, data) => {
    return res.json({ message: "User detail added succefully" });
  });
});

//Delete User
app.delete("/users/:id", (req, res) => {
  let id = Number(req.params.id);
  let filteredusers = users.filter((user) => user.id !== id);
  fs.writeFile("./sample.json", JSON.stringify(filteredusers), (err, data) => {
    return res.json(filteredusers);
  });
});

//to run the server
app.listen(port, (err) => {
  console.log(`Your app is running in ${port}`);
});
