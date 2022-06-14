const path = require("path");
console.log(path.dirname("F:/NodeJs/05Path Module/index.js"));
console.log(path.extname("F:/NodeJs/05Path Module/index.js"));
console.log(path.basename("F:/NodeJs/05Path Module/index.js"));

console.log(path.parse("F:/NodeJs/05Path Module/index.js"));
console.log(path.parse("F:/NodeJs/05Path Module/index.js").name);

//OR
const myPath = path.parse("F:/NodeJs/05Path Module/index.js");
console.log(myPath.name);
