import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const yarg = yargs(hideBin(process.argv));
// --- ADD COMMAND ----
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
    console.log(chalk.green("succesfully created note"));
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
