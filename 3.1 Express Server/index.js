import express from "express";
const app=express();
const port=3000;

app.get("/",(req,res)=>{
  res.send("Hello nate how are you");
})

app.listen(port,()=>{
  console.log(`Sercver running on port ${port}`);
});