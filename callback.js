function display(some) {
  console.log(some)
}
function calculator(num1, num2, callback) {
  let sum = num1 + num2
  callback(sum)
}

const result = calculator(5, 5, display)
