// With the call () method , we can write a method that can be used on different objects.
//Methods like call(), apply(), and bind() can refer this to any object.
//The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// With call(), an object can use a method belonging to another object.
// We can use call to define which object will this related 
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName
  },
}
const person1 = {
  firstName: "John",
  lastName: "Doe",
}
const person2 = {
  firstName: "Mary",
  lastName: "Jett",
}
console.log(person.fullName.call(person2))
