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
  async function getProduct() {
    const result = await getDocs(collection(db,"coffee"));
    const products = [];
    console.log(result)
    result.forEach((doc) => {
        products.push({ id : doc.id, ...doc.data()});
    });
    return products;
  }
  console.log(getProduct());

  async function displayProducts(){
    const produclist = document.getElementById("product-list");
    
    const products = await getProduct();

    products.forEach((product) =>{
        const productDiv = document.createElement("div");
        productDiv.classList.add("border")
        productDiv.innerHTML = `
        <div class="product-item">
          <img class="img" src="${product.img}">
          <h2 class="name" >${product.name}</h2>
          <p class="price" ><strong>Price:</strong> ${product.price} VND</p>
        </div>
        `
        
          let btndelete = document.createElement("div"); 
          btndelete.innerHTML = `
          <button class="delete" data-id='${product.id}'>Delete</button>
          `
        productDiv.addEventListener("click",function(){
          window.location.href=`detail.html?id=${product.id}`;
        })
        const deleteButton = btndelete.querySelector(".delete")
        deleteButton.addEventListener("click",function(){
          const productId = deleteButton.getAttribute("data-id")
          deleteProduct(productId)
        })
        produclist.appendChild(productDiv);
        produclist.appendChild(btndelete);
    });
  }
  displayProducts()
  async function  deleteProduct(productId) {
    await deleteDoc(doc(db,"coffee",productId))
    alert("Product deleted successfully")
    window.location.reload()
  }
  displayProducts()