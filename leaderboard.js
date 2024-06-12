import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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

  // Function to retrieve data from the Realtime Database and update the leaderboard

  function fetchAndDisplayLeaderboard() {
    get(ref(db, 'leaderboard/'))
     .then((snapshot) => {
        if (snapshot.exists()) {
          const leaderboardData = snapshot.val(); // Access the leaderboard object
          const leaderboardList = document.getElementById('leaderboardList');
          leaderboardList.innerHTML = ''; // Clear existing entries
  
          // Sort entries by score (assuming scores are strings)
          const sortedEntries = Object.entries(leaderboardData).sort((a, b) => parseInt(b[1].score, 10) - parseInt(a[1].score, 10));
          console.log(sortedEntries);
  
          sortedEntries.forEach(([key, entry]) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: Score: ${entry.score}`; // Adjusted to match the JSON structure
            leaderboardList.appendChild(listItem);
          });
        } else {
          console.log('No leaderboard data found.');
        }
      })
     .catch((error) => {
        console.error("Error fetching leaderboard data:", error);
      });
  }
  fetchAndDisplayLeaderboard();
  // Call the function to fetch and display the leaderboard
  setInterval(fetchAndDisplayLeaderboard, 5000);
  