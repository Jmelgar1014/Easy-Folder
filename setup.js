import os from "os";
import path from "path";
import * as fs from "fs";

const homePath = path.join(os.homedir(), "Desktop");

let pathLocation = path.join(homePath, "path.txt");

const checkFile = () => {
  fs.writeFile(pathLocation, homePath, (err) => {
    if (err) throw err;
    console.log("File created and content written");
  });
};

checkFile();
