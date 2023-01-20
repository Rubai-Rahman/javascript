//The code inside a JavaScript function will execute when "something" invokes it.

//JavaScript function can be invoked without being called.
// In javaScript refers to an object.
//Invoking a Function as a Method
const myObject = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this
  },
}
myObject.fullName()
//here this will return whole object
//Invoking a Function with a Function Constructor
//If a function invocation is preceded with the new keyword, it is a constructor invocation.

// It looks like you create a new function, but since JavaScript functions are objects you actually create a new object
//A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.