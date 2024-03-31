// const http=require('http');

// const server=http.createServer((re,res)=>{
//   if(re==='/'){
//     console.log("working");
//     res.write("Working fine");
//     res.end;
//   }
// });

// server.listen(3000);
// console.log("listening");


const ser=require("http");
ser.createServer((req,res)=>{
  res.write("Listening on port 3000");
  
  res.end();
}).listen(3000);

