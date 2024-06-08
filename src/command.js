import { updatePath, newProject, checkPath } from "./directory.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "new <project>",
    "Name of new project",
    (yargs) => {
      return yargs.positional("project", {
        type: "string",
        description: "Name of new project",
      });
    },
    (argv) => {
      newProject(argv.project);
      console.log(argv.project);
    }
  )
  .command(
    "update <path>",
    "New path to create projects",
    (yargs) => {
      return yargs.positional("path", {
        type: "string",
        description: "Update path for new projects",
      });
    },
    (argv) => {
      updatePath(argv.path);
    }
  )
  .command(
    "check [check]",
    "Check current file path where projects will be created",
    (yargs) => {
      return yargs.positional("check", {
        type: "string",
        description: "Check current file path where projects will be created",
      });
    },
    () => {
      checkPath();
    }
  )

  .demandCommand(1)
  .parse();
