const figlet = require("figlet");
const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

let courses = [
  { id: 1, name: "java" },
  { id: 2, name: "Nodejs" },
  { id: 3, name: "javaScript" }
];

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.post("/courses/:name", (req, res) => {
  try{
    courses.push({id:courses.length+1,name:req.params.name});
  res.send(`${req.params.name} is added successfully`);
  }
  catch(error){
    res.send("Joseph we got this "+error);
  } 
  
});

app.put("/courses/:name/:new",(req,res)=>{
  try{
    courses.find((course)=>{
        if(course.name==req.params.name){
          course.name=req.params.new;
        }
      })
    res.send("course data updated successfully");
  }
  catch(error){
    res.send("Joseph we got this "+error);
  }
  
})

app.delete("/courses/:name",(req,res)=>{
  try{
    courses.forEach(course=>{ 
      if(course.name==req.params.name) courses.pop(course);
    })
    res.send(`${req.params.name} is deleted successfully joseph`)
  }catch(err){
    res.send(`we got this \n${err} error Joseph`);
  }
})

figlet("HELLO JOSEPH", (err, data) => {
  if (err) {
    console.log(`Joseph we got this \n${err}\n error `);
  } else {
    console.log(data);
  }
});

app.listen(3000, () => {
  console.log("Joseph server is running on port 3000 successfully");
});
