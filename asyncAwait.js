async function hello() {
  return 'hello';
}
console.log(hello());


//
const paymentSuccess = true
const mark = 78

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
  const promise = Promise.resolve("Congrats! YOu got the certificate")
  return promise
}

async function course() {
  try {
    await enroll()
  await progress()
  const message = await getCertificate()

  console.log(message)
  }
  catch (err) {
    console.log(err)
  }
  
}
course()

// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then(function (value) {
//     console.log(value)
//   })
//   .catch(function (err) {
//     console.log(err)
//   })
