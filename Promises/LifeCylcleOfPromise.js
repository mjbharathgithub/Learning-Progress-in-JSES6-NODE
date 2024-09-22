const promiseExample = new Promise((resolve, reject) => {
  console.log("1. Promise is pending...");

  setTimeout(() => {
    const success = true; // Change this to false to simulate rejection

    if (success) {
      resolve("2. Promise fulfilled with success!");
    } else {
      reject("2. Promise rejected with error.");
    }
  }, 2000); // Simulate a delay of 2 seconds
});

// Handling the result
promiseExample
  .then((result) => {
    console.log(result); // This runs if the promise is fulfilled
  }).catch((error) => {
    console.error(error); // This runs if the promise is rejected
  })
  .finally(() => {
    console.log("3. Promise settled.");
  });

  // promiseExample
  // .then((result) => {
  //   console.log(result); // This runs if the promise is fulfilled
  // },(error) => {
  //   console.error(error); // This runs if the promise is rejected
  // })
  // .finally(() => {
  //   console.log("3. Promise settled.");
  // });