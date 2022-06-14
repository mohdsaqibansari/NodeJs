const { fstat } = require("fs");

//File System
const fs = require("fs");
fs.writeFileSync("read.txt", "Hi, This is Saqib.");
fs.appendFileSync("read.txt", " I am Fine.");
const bufData = fs.readFileSync("read.txt");
console.log(bufData);
/*
NodeJs includes an addition data type called Buffer.
Buffer is maily used to store Binary Data.
 */

//It will convert Binary Data to Original data.
const orgData = bufData.toString();
console.log(orgData);

//To Rename the File
fs.renameSync("read.txt", "readwrite.txt");
