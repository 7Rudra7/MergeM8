const express = require("express");

const app = express();

//Request handler
app.use("/test", (req, res) => {
  res.send("Hello World 55");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
