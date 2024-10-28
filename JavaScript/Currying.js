// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

function multiply(a){
    return function(b){
        return a*b;
    }
}

const calc=a=>b=>a*b;

const icecream=type=>
                    flavour=>
                        extra=>
                            quantity=>
                                `Here is your ${quantity} ${flavour} ${type} with extra ${extra}.`;


    



// const first=multiply(10);
// const second=first(20);
// console.log(first,second,calc(3)(2));

const type=icecream('cup');
const flavour=type('vanilla');
const extra=flavour('cherry');
const quantity=extra('cup');

console.log(quantity);


const myicecream=icecream('corneto')('choclate')('choco')('chips');
console.log(myicecream);

function infinite(a){
    return function(b){
        if(arguments.length==0) return a;
        return infinite(a+b);
    }
}

console.log(infinite(5)(3)(2)(1)());
