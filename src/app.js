const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send("User route");
});

app.post("/user", (req, res) => {
  console.log("Data saved to db");
  res.send("Data saved sucessfully to db");
});

app.use("/hello", (req, res) => {
  res.send("Hello route");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
