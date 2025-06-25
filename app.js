import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, getDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
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
  const db = getFirestore(app)
  let button=document.querySelector("button")
button.addEventListener("click",async()=>{
    let name=document.getElementById("name").value;
    let price=document.getElementById("price").value;
    let img=document.getElementById("img").value

    const docRef = await addDoc(collection(db,"coffee"),{
        name:name,
        price:price,
        img:img
    })
    alert("TC")
})