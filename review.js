// // Firebase configuration
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyAGta_2ADMxFobVAvLQehXIJjAtCgPs8d4",
//     authDomain: "mindduel-dd969.firebaseapp.com",
//     databaseURL: "https://mindduel-dd969-default-rtdb.firebaseio.com",
//     projectId: "mindduel-dd969",
//     storageBucket: "mindduel-dd969.appspot.com",
//     messagingSenderId: "39384353665",
//     appId: "1:39384353665:web:3344295f44a54d6b3e3680",
//     measurementId: "G-SYPDFRB4KB"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// // Function to fetch feedbacks from Firebase
// function fetchFeedbacks() {
//     const feedbackList = document.getElementById('feedbackList');

//     // Reference to the 'user' node in the database
//     const feedbackRef = ref(db, 'user');

//     // Fetch data once from the database
//     get(feedbackRef).then((snapshot) => {
//         snapshot.forEach((childSnapshot) => {
//             // Get feedback data
//             const feedbackData = childSnapshot.val();

//             // Create a div to display feedback
//             const feedbackDiv = document.createElement('div');
//             feedbackDiv.classList.add('feedback-item');
//             // Construct HTML for feedback
//             const feedbackHTML = `
//                 <h3>Name: ${feedbackData.username}</h3>
//                 <p>Feedback: ${feedbackData.feedback}</p>
//                 <p>Rating: ${feedbackData.rating}/5</p>
//             `;
//             // Set HTML content of the div
//             feedbackDiv.innerHTML = feedbackHTML;

//             // Append the div to the feedback list
//             feedbackList.appendChild(feedbackDiv);
//         });
//     }).catch(error => {
//         console.error("Error fetching feedbacks:", error);
//     });
// }

// window.onload = fetchFeedbacks;


// Firebase configuration
// Firebase configuration
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
    if (error) {
        console.error("Error fetching feedbacks:", error);
    } else {
        console.log("Feedbacks fetched successfully!");
        const feedbackList = document.getElementById('feedbackList');
        
      
        feedbackData.forEach((feedback) => {
            const feedbackDiv = document.createElement('div');
            feedbackDiv.classList.add('feedback-item');
            feedbackDiv.innerHTML = `
                <h3>Name: ${feedback.username}</h3>
                <p>Feedback: ${feedback.feedback}</p>
                <p>Rating: ${feedback.rating}/5</p>
            `;
            feedbackList.appendChild(feedbackDiv);
        });
    }
}

window.onload = function() {
    fetchFeedbacks(handleFeedbacks);
};

