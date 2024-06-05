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
  const course = courses.find(c => c.name === req.params.name);
  if (course) {
    res.send(course);
  } else {
    res.status(404).send('Course not found');
  }
});

app.put("/courses/:name/:new",(req,res)=>{
  courses.
  res.send("course data updated successfully");
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
