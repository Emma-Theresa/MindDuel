import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// Replace the following with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGta_2ADMxFobVAvLQehXIJjAtCgPs8d4",
  authDomain: "mindduel-dd969.firebaseapp.com",
  projectId: "mindduel-dd969",
  storageBucket: "mindduel-dd969.appspot.com",
  messagingSenderId: "39384353665",
  appId: "1:39384353665:web:3344295f44a54d6b3e3680",
  measurementId: "G-SYPDFRB4KB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("userDataForm").addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (username && email) {
        // Check if the username already exists in the database
        get(ref(db, 'users/' + username)).then((snapshot) => {
            if (snapshot.exists()) {
                alert("Username already taken. Please choose a different username.");
            } else {
                // Username is available, proceed to save user data
                set(ref(db, 'users/' + username), {
                    username: username,
                    email: email
                }).then(() => {
                    alert("User data submitted successfully!");
                    document.getElementById("username").value = ""; // Clear the username input field
                    document.getElementById("email").value = ""; // Clear the email input field
                    window.location.href = 'background.html';
                }).catch((error) => {
                    console.error("Error submitting user data:", error);
                    alert("There was an error submitting your data. Please try again.");
                });
            }
        }).catch((error) => {
            console.error("Error checking for existing user:", error);
            alert("There was an error processing your request. Please try again.");
        });
    } else {
        alert("Please fill out both the username and email fields.");
    }
});
