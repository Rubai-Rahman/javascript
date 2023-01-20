const status = false
console.log("Task 1")
//promise definition
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (status) {
      resolve("Task2")
    } else {
      reject("failed")
    }
  }, 2000)
})
//promise call
promise
  .then(function (value) {
    console.log(value)
  })
  .catch(function (err) {
    console.log(err)
  })
console.log("Task 3")

//
const paymentSuccess = true
const mark = 81

function enroll() {
  console.log("Course Enroll in Progress")
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (paymentSuccess) {
        resolve()
      } else {
        reject("Payment Failed")
      }
    }, 2000)
  })
  return promise
}

function progress() {
  console.log("Course on Progress...")
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (mark >= 80) {
        resolve()
      } else {
        reject("You could not get enough marks to get the certificate")
      }
    }, 3000)
  })
  return promise
}

function getCertificate() {
  console.log("Preparing your certificate!")
  const promise = new Promise(function (resolve) {
    setTimeout(() => {
      resolve("Congrats! YOu got the certificate")
    }, 1000)
  })
  return promise
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function (value) {
    console.log(value)
  })
  .catch(function (err) {
    console.log(err)
  })
