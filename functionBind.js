//With the bind() method, an object can borrow a method from another object.

//When a function is used as a callback, this is lost.

// This example will try to display the person name after 3 seconds, but it will display undefined instead:
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    return this.firstName + " " + this.lastName
  },
}

console.log(person.display())
setTimeout(person.display, 3000)
//with bind method this problem is solved
let display = person.display.bind(person)
setTimeout(display, 3000)

//bind is similar to apply but difference is that bind can not directly call the object . And bind is used to store the value of this.