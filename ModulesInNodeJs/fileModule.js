const fs= require("fs");
fs.appendFileSync("text.txt","\nThis is appended using appendFileSync() method and this file too creates a new file if its not present ");
console.log(fs.readFileSync("text.txt"));
// note :<Buffer 54 68 69 73 20 69 73 20 61 20 73 61 6d 70 6c 65 20 66 69 6c 65 20 75 73 65 64 20 74 6f 20 6c 65 61 72 6e 20 66 69 6c 65 73 20 6d 6f 64 75 6c 65 20 69 ... 8 more bytes>  will be the output 
// since in default it returns a buffer

console.log(""+fs.readFileSync("text.txt"));
// This is a sample file used to learn files module in nodejs
//now we get the above output since its casted to string type







// fs.unlinkSync("text.txt");//this method deletes the content in the file
try{
console.log("standard \n",fs.readFileSync("text.txt","utf-8"));

}
catch(err){
console.log(`Joseph there is an error${err}`);
 }; 
 fs.writeFileSync("new.txt","This method creates a new file and writes the message in the file if the file is already created then it overides the data in the file ");