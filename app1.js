const firebaseConfig = {
    apiKey: "AIzaSyBKfDDf8g_Xww1UKkNyzyiA3tF_vk5l8LQ",
    authDomain: "client-website-dc243.firebaseapp.com",
    databaseURL: "https://client-website-dc243-default-rtdb.firebaseio.com",
    projectId: "client-website-dc243",
    storageBucket: "client-website-dc243.appspot.com",
    messagingSenderId: "120837722064",
    appId: "1:120837722064:web:a919ba8eb94e17caab73d5",
    measurementId: "G-93TDEXSNX8"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  function signup(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
});
setTimeout(function () {
    window.location.href = "index.html";
  }, 3000);
}
