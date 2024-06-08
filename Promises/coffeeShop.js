function placeOrder(order){
  return new Promise((resolved,rejected)=>{
    console.log("Please wait it will take 2 sec to create token");
    setTimeout(()=>{
      if(order=="coffee"){
      resolved();
    }else{
      rejected(`Sir this is a coffee shop no token for ${order}`);
    }
    },5000);
    
  });
}

function createCoffee(isProblem){
  return new Promise((resolved,rejected)=>{
    console.log("Your token have been created \nPlease wait it will take 15 sec to create your coffee");
    setTimeout(()=>{
      if(!isProblem){
        resolved("Your coffee is ready sir");
      }else{
        rejected(`Due to some Technical problem your coffee can't be processed sir`);
      }
    },10000);
  })
}
placeOrder("coke").then(createCoffee(false)
).then(acc => {
  console.log(acc);
}).catch(err => {
  console.log(err);
});
