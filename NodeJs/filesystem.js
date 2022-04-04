const fs = require("fs");

fs.copyFileSync("test.txt", "copy.txt")

var text = fs.readFileSync("copy.txt",'utf8')
console.log (text)

fs.unlinkSync("copy.txt");
