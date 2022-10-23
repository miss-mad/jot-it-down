const notes = require("express").Router();

// GET /api/notes should read the db.json file and return all saved notes as JSON.
notes.get("/", (req, res) => {
    // read the db.json file
    // return all saved notes as JSON
});

notes.post("/", (req, res) => {
    // receive a new note to save on the req.body
    // add new note to the db.json file
    // give the new note a unique id when it's saved
    // then return the new note to the client (front end)
});

// delete note by its id
notes.delete("/:id", (req, res) => {
    // read all notes from the db.json file
    // remove the note with the given id property
    // rewrite the notes to the db.json file
});
