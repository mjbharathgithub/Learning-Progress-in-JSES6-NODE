function add(a,b){
  console.log(a+b);
}

function sub(a,b){
  console.log(a-b);
}

function mul(a,b){
  console.log(a*b);
}

function div(a,b){
  console.log(a/b);
}

// module.exports= {
// addition:add,
// subtraction:sub 
// }
//Using common.js

export default {add,sub,mul,div};