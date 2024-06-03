const cp=require("child_process");

cp.execSync('calc');  
//used to open a calc as a sub process


cp.execSync('start chrome https:github.com/mjbharathgithub');
//used to open a my github as a sub process



console.log("output"+cp.execSync("node test.js"));

//used to execute a another node file as a sub process