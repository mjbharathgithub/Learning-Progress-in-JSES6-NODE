import express from "express"

const app= express();

function messenger(req,res,next){
  console.log("application-level MM : this is a customised middelware");
  next();
}

app.use(messenger);
app.use('/',(req,res)=>{
  console.log('router-level MM : this is a customised middelware');
  throw new Error("this is a test error");
});

app.use((err,req,res,next)=>{
  console.error("this is error middleware\n",err.stack);
});

app.listen(3000,()=>console.log("listening on port 3000 joseph"));