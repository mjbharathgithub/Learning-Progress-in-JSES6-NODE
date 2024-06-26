import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname= dirname(fileURLToPath(import.meta.url));

const app= express();
const port =3000;
const password="IAmBatman";
let flag=false;
app.use(bodyParser.urlencoded({extended:true}));

function secret(req,res,next){
  const ps=req.body["password"];
  if(ps===password) flag=true;
  next();
}
app.use(secret);

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});

app.post("/check",(req,res)=>{
  if(flag) res.sendFile(__dirname+"/public/secret.html");
  
  else  res.sendFile(__dirname+"/public/index.html");
   
});

app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
})