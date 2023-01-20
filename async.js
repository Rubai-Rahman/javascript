// In the real world, callbacks are most often used with asynchronous functions.

// A typical example is JavaScript setTimeout().
console.log("line1")
setTimeout(() => {
  console.log("line Two")
}, 2000)
console.log("line3")
//When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval
setInterval(() => {
  console.log("this is setTimeout")
}, 2000);

//set Interval execute code the function repeatedly after that specific time.