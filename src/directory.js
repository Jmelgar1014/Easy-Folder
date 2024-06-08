import os from "os";
import path from "path";
import * as fs from "fs";

const homePath = path.join(os.homedir(), "Desktop");

let pathLocation = path.join(homePath, "path.txt");

export const newProject = (project) => {
  let newPath;
  fs.readFile(pathLocation, "utf8", (err, data) => {
    if (err) {
      console.error(`An error occurred:${err}`);
      return;
    }

    newPath = path.join(data + "/" + project);

    fs.mkdir(newPath, { recursive: true }, (err, data) => {
      if (err) {
        return console.error("An error occurred:", err);
      }
      console.log("Project was created successfully");
    });
  });
};

export const updatePath = (newPath) => {
  fs.writeFile(pathLocation, newPath, (err) => {
    if (err) throw err;
    console.log("File content overwritten");
  });
};

export const checkPath = () => {
  fs.readFile(pathLocation, "utf8", (err, data) => {
    if (err) {
      console.error(`An error occurred:${err}`);
      return;
    }
    console.log(data);
  });
};
