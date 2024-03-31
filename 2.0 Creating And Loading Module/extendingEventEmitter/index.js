const Logger=require("./logger");
const logger= new Logger();
logger.on('message Logged',(message)=>{
  console.log("Listerners are called :",message);
})


logger.log("execute Excommunicado");