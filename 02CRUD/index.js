const fs = require("fs");
//fs.mkdirSync("firstChallenge");

fs.writeFileSync("F:/NodeJs/firstChallenge/bio.txt", "Hi, I am Saqib");
fs.appendFileSync("F:/NodeJs/firstChallenge/bio.txt", " How are you.");

//By adding UTF-8, it will provide String rather than Binary
const data = fs.readFileSync("F:/NodeJs/firstChallenge/bio.txt", "utf-8");
console.log(data);

//To Rename
fs.renameSync(
  "F:/NodeJs/firstChallenge/bio.txt",
  "F:/NodeJs/firstChallenge/myBio.txt"
);

//To Delete
fs.unlinkSync("F:/NodeJs/firstChallenge/myBio.txt");
