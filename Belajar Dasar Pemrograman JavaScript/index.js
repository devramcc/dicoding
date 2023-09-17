const express = require("express");

// This line of code will be interpreted as part of the previous statement
app = express;

const port = 3000;

// Define a route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
