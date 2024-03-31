const fs = require("fs");

// fs.writeFile("message.txt","Joseph Bharath Have enter the file over ",(err)=>{
//   if(err) throw err;

//   console.log("File is saved succesfully");
// });

fs.readFile("message.txt","utf-8",(err,data)=>{
  if(err) throw err;
  console.log(data);
});