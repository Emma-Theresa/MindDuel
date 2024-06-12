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

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  // Function to add a new score
  function addNewScore(username, score) {
    set(ref(db, 'leaderboard/' + username), {
                    score:score
                }).then(() => {
                    alert("User data submitted successfully!");

                }).catch((error) => {
                    console.error("Error submitting user data:", error);
                    alert("There was an error submitting your data. Please try again.");
        });
  }

  // Listen for form submit event
  document.getElementById('addScoreForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const score = document.getElementById('score').value;

    // Validate inputs (optional)
    if (!username ||!score) {
      alert("Please fill out both fields.");
      return;
    }

    // Add the new score
    addNewScore(username, score);

    // Clear the form
    document.getElementById('username').value = '';
    document.getElementById('score').value = '';
  });