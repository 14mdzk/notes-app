import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import note from "./note.js";

// console.log(note.delete("Learn Node JS"));

const yarg = yargs(hideBin(process.argv));
const pick =
  (...items) =>
  (o) =>
    items.reduce((a, e) => ({ ...a, [e]: o[e] }), {});

yarg.command({
  command: "list",
  describe: "Reading/Searching list of notes ",
  builder: {
    title: {
      describe: "note title",
      type: "string",
    },
  },
  handler(argv) {
    if (!argv.hasOwnProperty("title") || argv?.title == "") {
      console.log(note.all());
    } else {
      console.log(note.search(argv.title));
    }
  },
});

yarg.command({
  command: "read",
  describe: "Reading a note",
  builder: {
    title: {
      describe: "note title",
      type: "string",
    },
  },
  handler(argv) {
    console.log(note.read(argv.title));
  },
});

yarg.command({
  command: "create",
  describe: "Creating a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    note.create(pick("title", "body")(argv));

    console.log(chalk.green("succesfully created note"));
  },
});

yarg.command({
  command: "update",
  describe: "Removing respective note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    note.update(pick("title", "body")(argv));
    console.log(chalk.green("note has been updated"));
  },
});

yarg.command({
  command: "remove",
  describe: "Removing respective note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log(chalk.yellow("note has been removed"));
  },
});

yarg.parse();
