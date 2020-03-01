const fs = require("fs");
const https = require("https");
// const ncp = require("ncp").ncp;
const unzipper = require("unzipper");

const zip_source_file =
  "https://raw.githubusercontent.com/mazyar/cli-rx/master/rx-panel.zip";

module.exports = ({ proj_name }) => {
  console.log(proj_name);
  const file = fs.createWriteStream(`${proj_name}.zip`);
  https.get(zip_source_file, response => {
    response.pipe(file);
    fs.createReadStream(`${proj_name}.zip`).pipe(
      unzipper.Extract({ path:proj_name })
    );
  });

  // const dir = `./${proj_name}`;
  // const source = "./rx-panel/";
  // if (!fs.existsSync(dir)) {
  //   fs.mkdirSync(dir);
  // }

  // ncp(source, dir, err => {
  //   if (err) {
  //     return log(err);
  //   }
  //   log("create rx-panel done");
  // });
};
