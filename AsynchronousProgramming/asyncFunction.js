async function af(){
   for(let i=1;i<=300000000;i++);
  console.log("async function is called");

}

console.log('start');
af();
console.log('end');