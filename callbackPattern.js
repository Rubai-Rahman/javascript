const paymentSuccess = true
const mark = 70

function enroll(callback) {
  console.log("Course Enroll in Progress")
  setTimeout(() => {
    if (paymentSuccess) {
      callback()
    } else {
      console.log("Payment Failed")
    }
  }, 2000)
}

function progress(callback) {
  console.log("Course on Progress...")
  setTimeout(() => {
    if (mark >= 80) {
      callback()
    } else {
      console.log("You could not get enough marks to get the certificate")
    }
  }, 3000)
}

function getCertificate() {
  console.log("Preparing your certificate!")
  setTimeout(() => {
    console.log("Congrats! YOu got the certificate")
  }, 1000)
}

enroll(function () {
  progress(getCertificate)
})
