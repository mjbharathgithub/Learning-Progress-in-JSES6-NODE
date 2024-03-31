
// const logger=require("./logger");

// logger.lgr("Its working");
// //keep going forward 

// const os= require("os");

// var tm=os.totalmem();
// var fm=os.freemem();
// console.log(`total memory ${tm}
//  free memory ${fm}`);

const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("message logged",function(){
  console.log("the event have been successfully logged");
});// listener is added

emitter.on("logging Data",(data)=>{
  console.log(`the  has been logging`,data);
})

emitter.emit("message logged");// event is raiesd 

emitter.emit("logging Data",{data:"data rata",id:1234});