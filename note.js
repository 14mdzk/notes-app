import fs from "fs";
import validator from "validator";

const buffer = fs.readFileSync("notes.json");
const notes = JSON.parse(buffer.toString());
const noteTitleIsUsed = (title) => {
  return notes.findIndex(title);
};

export default {
  all: () => {
    return notes;
  },

  search: (title) => {
    return notes.filter((note) => note.title.includes(title));
  },

  read: (title) => {
    const note = notes.find((note) => note.title == title);

    return `${note.title}\n-----------------------\n${note.body}`;
  },

  create: (req) => {
    if (validator.isEmpty(req?.title)) {
      return "Body is required";
    }

    if (validator.isEmpty(req?.body)) {
      return "Body is required";
    }

    return fs.writeFileSync("notes.json", JSON.stringify([...notes, req]));
  },

  update: (req) => {
    let noteIndex = notes.findIndex((note) => note.title === req.title);
    let state = noteIndex > -1 ? true : false;

    if (state) {
      notes[noteIndex] = req;
      fs.writeFileSync("notes.json", JSON.stringify(notes));
    }

    return state;
  },

  delete: (title) => {
    let noteIndex = notes.findIndex((note) => note.title === title);
    let state =
      noteIndex > -1
        ? notes.splice(noteIndex, 1) != []
          ? true
          : false
        : false;

    if (state) {
      fs.writeFileSync("notes.json", JSON.stringify(notes));
    }

    return state;
  },
};
