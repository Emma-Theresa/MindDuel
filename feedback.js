// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGta_2ADMxFobVAvLQehXIJjAtCgPs8d4",
    authDomain: "mindduel-dd969.firebaseapp.com",
    databaseURL: "https://mindduel-dd969-default-rtdb.firebaseio.com",
    projectId: "mindduel-dd969",
    storageBucket: "mindduel-dd969.appspot.com",
    messagingSenderId: "39384353665",
    appId: "1:39384353665:web:3344295f44a54d6b3e3680",
    measurementId: "G-SYPDFRB4KB"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Get all star elements
let stars = document.getElementsByClassName("star");

// Variable to store the selected rating
let selectedRating = 0;

// Add event listeners to each star
Array.from(stars).forEach((star, index) => {
  star.addEventListener('click', function() {
    selectedRating = index + 1; // Store the rating (index + 1)
    updateOutput(selectedRating); // Update the output display
  });
});

// Function to update the output display with the selected rating
function updateOutput(rating) {
  document.getElementById("output");
}

document.getElementById("submit").addEventListener('click', function(e) {
  e.preventDefault();

  const usernameElement = document.getElementById("username");
  const feedbackElement = document.getElementById("feedback");

  if (usernameElement && feedbackElement) {
    const username = usernameElement.value;
    const feedback = feedbackElement.value;

    if (username && feedback) {
      // Save feedback to Firebase database
      set(ref(db, 'user/' + username), {
        username: username,
        feedback: feedback,
        rating: selectedRating // Include the selected rating
      }).then(() => {
        // Show notification
        const notification = document.getElementById("notification");
        notification.style.display = "block";

        // Hide notification after 2 seconds
        setTimeout(() => {
            notification.style.display = "none";
        }, 1000);
        usernameElement.value = "";
        feedbackElement.value = "";
        selectedRating = 0;
        updateOutput(selectedRating);
      }).catch(error => {
        console.error("Error submitting feedback:", error);
        alert("Error submitting feedback. Please try again.");
      });
    } else {
      alert("Please fill out both username and feedback fields.");
    }
  } else {
    console.error("Username or feedback element not found.");
  }
});




const contain = document.querySelector('.feedbackContainer');
const emoji = document.querySelector('.emoji');
const textarea = document.querySelector('textarea');
const btn = document.querySelector('.btn');
const input = document.querySelector('input');

emoji.addEventListener('click', (e) => {
    if (e.target.className.includes('emoji')) return;

  
    textarea.classList.add('textarea--active');
    btn.classList.add('btn--active');
    input.classList.add('input--active');
  });
  
contain.addEventListener('mouseleave', () => {
  textarea.classList.remove('textarea--active');
  input.classList.remove('input--active');
  btn.classList.remove('btn--active');
});
