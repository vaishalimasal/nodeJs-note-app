const express = require("express");
const bodyPasrser = require ("body-parser");

const app = express(); //instatious express server
app.use(bodyPasrser.json())

const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Running on ", PORT);
});
