// const http= require("http");

// http.createServer((req,res)=>{
//   res.writeHead(200,{"content-type":"text/html"});
//   res.write("Hello world");
//   res.end();
// }).listen(3000);

// Load the http module to create an HTTP server
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1'; // or 'localhost'
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response body
  res.end('Hello, World!\n');
});

// Make the server listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
