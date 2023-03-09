// Your web app's Firebase configuration

// initialize firebase
firebase.initializeApp(firebaseConfig)

// reference your database
const contactformDB = firebase.database().ref("contactForm")

document.getElementById("contactForm").addEventListener("submit", submitForm)

function submitForm(e) {
  e.preventDefault()

  let name = getElementVal("name")
  let emailid = getElementVal("emailid")
  let msgContent = getElementVal("msgContent")

  saveMessages(name, emailid, msgContent)

  //   enable alert
  document.querySelector(".alert").style.display = "block"

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none"
  }, 3000)

  //   reset the form
  document.getElementById("contactForm").reset()
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactformDB.push()

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  })
}

const getElementVal = (id) => {
  return document.getElementById(id).value
}
