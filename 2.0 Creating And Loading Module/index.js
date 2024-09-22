
// const logger=require("./logger");

// logger.lgr("Its working");
// //keep going forward 

// const os= require("os");

// var tm=os.totalmem();
// var fm=os.freemem();
// console.log(`total memory ${tm}
//  free memory ${fm}`);

const ee = require("events");
const { emitWarning } = require("process");
const emitter = new ee();
emitter.on("message logged",function(){
  console.log("the event have been successfully logged");
});// listener is added

emitter.on("logging Data",(data)=>{
  console.log(`the  has been logging`,data);
})

emitter.emit("message logged");// event is raiesd 

emitter.emit("logging Data",{data:"data rata",id:1234});

emitter.on('callme',(data)=>{
  console.log(`${data} have called me`);
});

emitter.emit('callme','joseph');