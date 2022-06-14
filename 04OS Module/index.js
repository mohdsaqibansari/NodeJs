const os = require("os");
console.log(os.arch()); //tells the architecture of your OS
console.log(os.freemem() / 1024 ** 3); //Telss the free Memory in GB
console.log(os.totalmem() / 1024 ** 3); // RAM
console.log(os.hostname());
console.log(os.platform());
console.log(os.type());
