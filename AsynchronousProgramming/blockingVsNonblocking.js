const { resolve } = require("path");

function blockingMessenger(data){
 for(let i=0;i<300000000;i++);
    console.log(`Blocking messenger\nmessage : ${data}`);
 
}

async function nonBlockingMessenger(data){
  const result=await new Promise((resolve)=>{
    for(let i=0;i<300000000;i++);
    resolve(`Non-Blocking messenger\nmessage : ${data}`);
  });

  console.log(result);
}

console.log("start");
blockingMessenger("Good morning Joseph");
nonBlockingMessenger("Good morning Joseph");
console.log("End");