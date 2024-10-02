// function sum(...rest){
//     console.log(rest);
// }
let list= [1,2,3,4,5];
let odd=list.filter(ele=>ele%2==0);
let sliced=list.slice(-3,-2);
// console.log(list,'\n',odd);
//console.log(sliced);
list.splice(1,2,11,12,13);
console.log(list);
const obj={name:'Joseph',age:21,dep:'EEE'}

Object.keys(obj).forEach((key)=>console.log(obj[key]));

function sum(a){
    return function (b,c){
        return a+b+c;
    }
}

function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(sum(1)(2,3));
console.log(add(10)(20)(30));

function objMethod(greeting1,greeting2){
    console.log(`Hi ${this.name} ${greeting1} ${greeting2}`);
}

objMethod.call(obj,'have a great day','Goodnight');
objMethod.apply(obj,['have a great day','Goodnight']);
const bindId=objMethod.bind(obj);
bindId('hi','nice to meet you');
