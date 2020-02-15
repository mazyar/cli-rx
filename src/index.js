// const fs = require("fs-extra");
// const path = require("path");
const { Command, flags } = require("@oclif/command");
const createProject = require("./create");

class CliRxCommand extends Command {
  async run() {
    const { flags, args } = this.parse(CliRxCommand);
    const { create, proj_name } = args;

    switch(create) {
      case "create":
        createProject({proj_name, log:this.log})
        break;
      default:
        this.log("Invalid args cli-rx")
    }    
    
//     this.log(
//       `---------------------------------
// --- CLI RX ---
// args:${args.create} 
// flag: from .\\src\\index.js
// ---------------------------------`
//     );
  }
}

CliRxCommand.description = `Describe the command here
...
Extra documentation goes here
`;

CliRxCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: "v" }),
  // add --help flag to show CLI version
  help: flags.help({ char: "h" }),
  name: flags.string({ char: "n", description: "name to print" }),
  create: flags.string({
    char: "c",
    name: "create panel",
    description: "create rx-panel m1-framework reactJs rx panel"
  })
};

CliRxCommand.args = [
  { name: "create", require: false, description: "create rx panel" },
  { name: "proj_name", require: false, description: "create rx panel" }
];

module.exports = CliRxCommand;
