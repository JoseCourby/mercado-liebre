const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3001, () => {
  console.log("Se prendió");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/registro.html"));
});

app.post("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/login.html"));
});
