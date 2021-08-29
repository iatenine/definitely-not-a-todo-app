// Set up Express server
const express = require("express");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("/ triggered");
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/notes", (req, res) => {
  console.log("Why are you here?");
  res.sendFile(__dirname + "public/nots.html");
});

app.get("/api/notes", (req, res) => {
  res.sendFile(__dirname + "/db/db.json");
});

app.post("/api/notes", (req, res) => {
  console.log("hello");
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
