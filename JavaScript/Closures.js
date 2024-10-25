//Closure Application
function printer(){
    for(var i=1;i<=5;i++){
        setTimeout(()=>{
            console.log(i);
        },i*1000);
    }
}

function printer(){
    for(let i=1;i<=5;i++){
        setTimeout(()=>{
            console.log(i);
        },i*1000);
    }
}

function printer(){
    function close(x){
        setTimeout(()=>{
                console.log(x);
            },x*1000);
    }
    
    for(var i=1;i<=5;i++)
    {
        close(i);
    }
}

printer();






//call vs apply vs bind

console.log("Try programiz.pro");

const person={name:"Joseph",age:21,dep:"EEE"};
console.log(person);


function specificContext(message1,message2){
    console.log(`hello ${this.name} You are studying in ${this.dep} department and ${this.age} years old\n${message1}\n${message2}`);
}

specificContext.call(person,"Happy learning","Have a great day");

specificContext.apply(person,["Happy learning","Have a great day"]);

const objDisplayer= specificContext.bind(person);

objDisplayer("Happy learning","Have a great day");
console.log(objDisplayer);

