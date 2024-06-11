import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
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



const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

  // Function to retrieve data from the Realtime Database and update the leaderboard
  function updateLeaderboard() {
    const leaderboardRef = db.ref('leaderboard');
 
    leaderboardRef.on('value', (snapshot) => {
      const leaderboardData = snapshot.val();
      const leaderboardList = document.getElementById('leaderboardList');
 
      // Clear existing leaderboard entries
      leaderboardList.innerHTML = '';
 
      // Loop through each entry in the leaderboard data
      Object.entries(leaderboardData).forEach(([key, entry]) => {
        // Create list item for each entry
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${entry.name} - ${entry.score}`;
 
        // Append list item to leaderboard list
        leaderboardList.appendChild(listItem);
      });
    });
  }