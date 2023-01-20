//Apply is similar to call but call takes arguments separately while apply takes arguments as an array
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
console.log(person.fullName.call(person2,["Dhaka","Bangladesh"]))