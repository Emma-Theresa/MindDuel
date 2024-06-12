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
  let player1login =false;
  let player2login =false;
  const player1Form = document.getElementById("player1Form");
  const player2Form = document.getElementById("player2Form");
  let player1Username = "", player2Username = "";

  // Function to handle form submission for both players
  const handleSubmit = (e, playerNumber) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    const form = e.target; // 'e.target' gives us the form that was submitted
    const usernameField = form.querySelector('input[name="username"]');
    const emailField = form.querySelector('input[name="email"]');
  
    const nameDisplay = playerNumber === 1? document.getElementById("player1NameDisplay") : document.getElementById("player2NameDisplay");
  
    const newUser = document.querySelector('#newusersignup');
  
    if (!usernameField.value ||!emailField.value) {
      alert("Please fill in all fields.");
      return;
    }
  
    get(ref(db, "users/" + usernameField.value))
    .then((snapshot) => {
        if (snapshot.exists()) {
          const storedData = snapshot.val();
          console.log(storedData);
          form.style.display = "none"; // Hide the form after successful login
          nameDisplay.textContent = "Welcome, " + usernameField.value + "!";
  
          if (playerNumber === 1) {
            player1Username = usernameField.value;
            localStorage.setItem('player1Username', player1Username);
            nameDisplay.textContent = `Welcome, ${usernameField.value}`;
            player1login = true;
          } else {
            player2Username = usernameField.value;
            localStorage.setItem('player2Username', player2Username);
            nameDisplay.textContent = `Welcome, ${usernameField.value}`;
            localStorage.setItem('player2LoggedIn', 'true'); 
            player2login=true;
          }
          if (player1login && player2login) {
            console.log("Both players have logged in!");
            document.getElementById("startGameButton").disabled = false; // Enable the "Start Game" button
        }
  
        } else {
          form.style.display = "none"; // Hide the form if no user is found
          nameDisplay.textContent = "No user found with that username.";
          newUser.style.display = "block"; // Show the signup link
        }
      })
    .catch((error) => {
        console.error("Error fetching user data:", error);
        alert("An error occurred. Please try again.");
      });
  }  

  player1Form.addEventListener("submit", (e) => handleSubmit(e, 1));
  player2Form.addEventListener("submit", (e) => handleSubmit(e, 2));
  // Inside handleSubmit, after setting player login flags
 



});

function reset(){
    const usernameField = this.querySelector('input[name="username"]');
    const emailField = this.querySelector('input[name="email"]');
    usernameField.value='';
    emailField.value='';
}



