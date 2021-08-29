// Set up Express server
const express = require("express");
const Notes = require("./public/assets/js/notes");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/notes", (req, res) => {
  res.sendFile(__dirname + "/public/notes.html");
});

app.get("/api/notes", (req, res) => {
  res.sendFile(__dirname + "/db/db.json");
});

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  Notes.deleteAtIndex(__dirname + "/db/db.json", id);
  res.send("Note deleted!");
});

app.post("/api/notes", async (req, res) => {
  console.log(req.body);
  Notes.readAndAppend(__dirname + "/db/db.json", req.body);
  res.send("Note Added!");
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
