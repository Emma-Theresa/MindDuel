import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// Replace the following with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGta_2ADMxFobVAvLQehXIJjAtCgPs8d4",
  authDomain: "mindduel-dd969.firebaseapp.com",
  projectId: "mindduel-dd969",
  storageBucket: "mindduel-dd969.appspot.com",
  messagingSenderId: "39384353665",
  appId: "1:39384353665:web:3344295f44a54d6b3e3680",
  measurementId: "G-SYPDFRB4KB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("#player1Form, #player2Form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission behavior

      const usernameField = this.querySelector('input[name="username"]');
      const emailField = this.querySelector('input[name="email"]');
      const nameDisplay = this.nextElementSibling;
      const newUser = document.querySelector('#newusersignup');

      // Simple validation (you can expand this based on your needs)
      if (!usernameField.value || !emailField.value) {
        alert("Please fill in all fields.");
        return;
      }

      get(ref(db, "users/"+usernameField.value))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const storedData = snapshot.val();
            console.log(storedData);
            this.style.display = "none";
            nameDisplay.textContent = "Welcome, " + usernameField.value + "!";
          } else {
            this.style.display ="none";
            nameDisplay.textContent = "No user found with that username.";
            newUser.style.display = "block"; // Show the signup link
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          alert("An error occurred. Please try again.");
        });
    });
  });
});

function reset(){
    const usernameField = this.querySelector('input[name="username"]');
    const emailField = this.querySelector('input[name="email"]');
    usernameField.value='';
    emailField.value='';
}