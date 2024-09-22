const promise=new Promise((resolve,reject)=>{
  let a=4,b=46;
  setTimeout(()=>{
    if(a===b){
      resolve("The promise is fullfilled(resolved)");
    }else{
      reject("The promises is broken (rejected)");
    }

  },3000);
});//promise created
console.log(promise);//promis 

promise.then((fullfilledPromis)=>{console.log(fullfilledPromis)});//promised resolved

promise.catch(rejectedPromis=>{console.log(rejectedPromis)});//promise rejected state

//promise settled state

let pm = new Promise((res,rej)=>{
  let a=4,b=5;
  if(a==b){
    res("its resolved");
  }else {
    rej("Its rejected");
  }
});

pm.then(dat=>console.log(dat)).catch(rej=>console.log(rej));