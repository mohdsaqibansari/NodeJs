const fs = require("fs");
fs.writeFile(
  "F:/NodeJs/03Asynchronous File System/read.txt",
  "Today is a Good Day.",
  (err) => {
    console.log("File is Created.");
    console.log(err);
  }
);
/*
We have to pass a call back fxn whenever we use Asynchronous File System
The call back has an argument that tells if the task has been completed successfully.

 */

fs.appendFile(
  "F:/NodeJs/03Asynchronous File System/read.txt",
  " How are you?",
  (err) => {
    console.log("Task Completed");
    console.log(err);
  }
);

//To Read Data
fs.readFile(
  "F:/NodeJs/03Asynchronous File System/read.txt",
  "utf-8",
  (err, data) => {
    console.log(data);
  }
);
