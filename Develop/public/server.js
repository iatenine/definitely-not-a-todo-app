// Set up Express server
const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/notes", (req, res) => {
  res.sendFile(__dirname + "/notes.html");
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
