const readline = require('readline');

// Function to get user input
function getUserInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Function to place the order
function placeOrder(order) {
  return new Promise((resolve, reject) => {
    console.log("Please wait, it will take 5 seconds to create a token...");
    setTimeout(() => {
      if (order === "coffee") {
        resolve();
      } else {
        reject(`Sir, this is a coffee shop. No token for ${order}`);
      }
    }, 2000);
  });
}

// Function to create the coffee
function createCoffee() {
  return new Promise((resolve, reject) => {
    console.log("Your token has been created. Please wait, it will take 15 seconds to create your coffee...");
    setTimeout(() => {
      resolve("Your coffee is ready, sir.");
    }, 8000);
  });
}

// Function to handle rejection and check user's age
function handleRejection(message) {
  console.log(message);
  return getUserInput("Please enter your age: ").then((age) => {
    if (parseInt(age) < 5) {
      console.log("Here is a chocolate for you.");
    }
    return Promise.reject(message);
  });
}

// Main function to run the program
async function main() {
  try {
    const order = await getUserInput("Please place your order: ");
    await placeOrder(order);
    const result = await createCoffee();
    console.log(result);
  } catch (error) {
    await handleRejection(error);
  }
}

main();
