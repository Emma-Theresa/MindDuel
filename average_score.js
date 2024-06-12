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


function fetchFeedbacks(callback) {

    const feedbackRef = ref(db, 'user');

  
    get(feedbackRef).then((snapshot) => {
        const feedbackData = [];
        snapshot.forEach((childSnapshot) => {
          
            const data = childSnapshot.val();
            feedbackData.push(data);
        });
        if (typeof callback === 'function') {
            callback(null, feedbackData);
        }
    }).catch(error => {
        if (typeof callback === 'function') {
            callback(error, null);
        } else {
            console.error("Error fetching feedbacks:", error);
        }
    });
}

function handleFeedbacks(error, feedbackData) {
    let totalRatingSum = 0;
    let totalNumberOfFeedbacks = 0;

    if (error) {
        console.error("Error fetching feedbacks:", error);
        document.getElementById('feedback-summary').innerHTML = '<p>Error loading feedback. Please try again later.</p>';
    } else {
        console.log("Feedbacks fetched successfully!");
        document.getElementById('feedback-summary').innerHTML = ''; // Clear existing content

        feedbackData.forEach((feedback) => {
            // Check if rating exists and is a number
            const rating = Number.isFinite(feedback.rating)? parseInt(feedback.rating) : 0;
            totalRatingSum += rating;
            totalNumberOfFeedbacks++;

            // Optionally, log feedback details for debugging purposes
            console.log(`User Rating: ${feedback.rating}, Comment: ${feedback.comment || 'No comment'}`);
        });

        // Calculate average rating
        const averageRating = totalNumberOfFeedbacks > 0? (totalRatingSum / totalNumberOfFeedbacks).toFixed(2) : 0;

        // Update the summary section with the calculated average
        document.getElementById('feedback-summary').innerHTML += `
            <p>Total Number of Feedbacks: ${totalNumberOfFeedbacks}</p>
            <p>Average Rating: ${averageRating}</p>`;
    }
}


fetchFeedbacks(handleFeedbacks);
