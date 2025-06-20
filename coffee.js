import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC0OPVi9giNxcKOmm_2OiNPuGxIBCTpTyE",
    authDomain: "coffee-shop-39965.firebaseapp.com",
    projectId: "coffee-shop-39965",
    storageBucket: "coffee-shop-39965.firebasestorage.app",
    messagingSenderId: "179220694821",
    appId: "1:179220694821:web:18d2eaddbf86a2c4437ccc"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  
  let btn = document.querySelector("button")
  btn.addEventListener("click", function(){
    signInWithPopup(auth, provider)
        .then((result)=>{
            const user = result.user
            console.log(user)
            alert("Login success")
         })
  })
const showPassword = document.querySelector("#show-password")
const passwordField = document.querySelector("#password")
showPassword.addEventListener("click", function(){
  this.classList.toggle("bi-eye-fill")
  const type = passwordField.getAttribute("type")
  === "password" ? "text" : "password"
})