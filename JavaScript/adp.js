//Interview Experience

// Closure and Lexical Environment:

function printNumbers(let num){
    for(let i=1;i<=num;i++){
        setTimeout(()=>{
            console.log(i);
        },i*1000);
    }
}

printNumbers(10);
// In JavaScript, let has block scope. Within the for loop, i is declared with let, giving it a new scope in each iteration.
// However, the setTimeout function creates a closure. A closure remembers the variables from the environment where it was created.
// In the first snippet, i*1000 is used as the delay for setTimeout. Since i is captured by the closure, each iteration creates a separate closure with its own value of i.
