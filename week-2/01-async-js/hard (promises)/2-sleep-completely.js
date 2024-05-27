/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function waitTill(milliseconds) {
  const startDate = Date.now();
  while (Date.now() - startDate < milliseconds) {           //thread is blocked till the milliseconds time.(However we should not block the thread.)
    //busy wait         
  }
}

function sleep(milliseconds) {
  return new Promise(function (resolve) {
    waitTill(milliseconds);
    resolve();
  });
}

module.exports = sleep;
