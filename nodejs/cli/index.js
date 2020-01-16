const { Command } = require("commander");
const inquirer = require("inquirer");
const path = require("path");
const shell = require("shelljs");

const { required } = require("./src/validations");
const { execFile } = require("./src/child-process");

const program = new Command();

program
  .command("build")
  .description("Build base image")
  .action(async () => {
    try {
      await execFile(path.join(__dirname, "scripts", "build.sh"));
    } catch (error) {
      console.log(error);
    }
  });

program
  .command("install")
  .description("Install new project")
  .action(async () => {
    try {
      const answer = await inquirer.prompt([
        {
          name: "projectName",
          message: "Project name (*)",
          validate: required("Project name is required")
        },
        {
          name: "branch",
          message: "Branch (*)",
          validate: required("Branch name is required")
        }
      ]);
      console.log("Your choice: ", answer);
      shell.exec(
        `${path.join(__dirname, "scripts", "clone.sh")} ${answer.branch}`
      );
    } catch (error) {
      console.log(error);
    }
  });

program.version("0.0.1").parse(process.argv);
