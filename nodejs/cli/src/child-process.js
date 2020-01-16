const childProcess = require("child_process");

const execFile = path => {
  return new Promise((resolve, reject) => {
    childProcess.execFile(path, (error, stdout) => {
      if (error) {
        reject(error);
      }
      stdout && console.log(stdout.trim());
      resolve(stdout);
    });
  });
};

module.exports = {
  execFile
};
