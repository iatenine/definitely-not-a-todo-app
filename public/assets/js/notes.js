const fs = require("fs");

function readAndAppend(fileName, noteObject) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    notes.push(noteObject);
    fs.writeFile(fileName, JSON.stringify(notes, null, "\t"), (err) => {
      if (err) throw err;
      console.log("Note added!");
    });
  });
}

function deleteAtIndex(fileName, index) {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    notes.splice(index, 1);
    fs.writeFile(fileName, JSON.stringify(notes, null, "\t"), (err) => {
      if (err) throw err;
      console.log("Note deleted!");
    });
  });
}

module.exports = { readAndAppend, deleteAtIndex };
