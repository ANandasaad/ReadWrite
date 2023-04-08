
const fs= require("fs");
//   fs.writeFileSync('read.txt',"Hello my name is Anand Kushwaha");
//  const buf= fs.readFileSync('read.txt');
//  console.log(buf.toString());

 fs.appendFileSync("read.txt","\nI am Loving Node js");
 fs.renameSync('read.txt',"readwrite.txt");




