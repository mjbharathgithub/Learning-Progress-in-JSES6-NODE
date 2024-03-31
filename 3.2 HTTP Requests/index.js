import express from "express";

const app=express();
const port=3000;

app.get("/",(req,res)=>{
  res.send("<h1>Welcome to the Home page</h1><br><p> thank you for requesting to the ecnf point<p>");
})

app.get("/about",(req,res)=>{
  res.send("<h1>You are cureently accessing the about page from the local host on port 3000</h1>");
})


app.get("/help",(req,res)=>{
  res.send("<h1>keep calm and call BATMAN</h1>");
})


app.listen(port,()=>{
  console.log(`The server is listening in port ${port}`);
})