// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//console.log("Try programiz.pro");

async function myFunction(){
    const prom=  new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(true) resolve("Fectching data successfully");
            else reject("Fectching data Failed");
        },2000);
    });
    
    console.log("promise :",prom);
    return prom;
}
console.log("start");
myFunction().then((res)=>console.log("resolved : ",res)).catch( (e)=>console.log("rejected : ",e));
console.log("end");

// var x=0,y=x++ + x++;
// console.log(x,y);

//function add(x,y){return x+y;}

// function add(x){
//     return function (y){
//         return x+y;
//     }
// }

// console.log(add(5)(6));
