/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
}

// wait(5).then(() => console.log("wait time completed"));
// Above will confirm that the wait time is for 5 seconds .. so that's all with promises..

module.exports = wait;

//Additional  (Resolve and reject with message in response)
/*
function checkCondition(condition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (condition) {
          resolve("Condition is met! Promise resolved.");
        } else {
          reject("Condition is not met. Promise rejected.");
        }
      }, 2000);
    });
  }
  
  // Example usage:
  checkCondition(true)
    .then((message) => {
      console.log(message); // This will log: "Condition is met! Promise resolved."
    })
    .catch((error) => {
      console.error(error); // This won't be called in this example
    });
  
  checkCondition(false)
    .then((message) => {
      console.log(message); // This won't be called in this example
    })
    .catch((error) => {
      console.error(error); // This will log: "Condition is not met. Promise rejected."
    });

    */
