const fs = require("fs");
const ncp = require("ncp").ncp;

module.exports = ({ proj_name, log }) => {
  const dir = `./${proj_name}`;
  const source = "./rx-panel/";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);   
  }  


  ncp(source, dir, err => {
    if (err) {
      return log(err);
    }
    log("create rx-panel done");
  });

};
