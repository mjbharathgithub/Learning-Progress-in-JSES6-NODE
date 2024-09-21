const fs=require("fs");

//used to create a directory
//fs.mkdirSync("sampleDirectory");


//used to find the files inside the directory
console.log(fs.readdirSync("C:\\Users\\mjbha\\OneDrive\\Desktop\\Web dev\\webdevelopment\\BACK_END\\NODE\\ModulesInNodeJs"));

//check if the directory exists
console.log(fs.existsSync("sampleDirectory"));

//used to remove a directory
//fs.rmdirSync("sampleDirectory");