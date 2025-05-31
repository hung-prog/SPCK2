const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("navbar-items");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
const navbar = document.getElementById('navbar');
    let isScrolling;

    window.addEventListener('scroll', () => {
      navbar.classList.add('scrolling');

      // Xóa hiệu ứng nếu không cuộn trong 500ms
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        navbar.classList.remove('scrolling');
      }, 500);
    });
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
