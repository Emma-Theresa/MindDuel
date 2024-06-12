// Get all images with class "dialog_1"
const dialogImages1 = document.querySelectorAll('.dialog_1');
let currentIndex1 = 0;
let intervalId; // To hold the interval ID

// Function to display images alternatively with a 1-second delay
function displayImages1() {
    // If all images have been displayed, clear the interval
    if (currentIndex1 === dialogImages1.length) {
        clearInterval(intervalId);
        
        // Hide all images
        dialogImages1.forEach(img => img.style.display = 'none');
        document.getElementById('dialog2').style.display ='none';
        return; // Exit the function
    }

    // Hide all images
    dialogImages1.forEach(img => img.style.display = 'none');

    // Display the current image
    dialogImages1[currentIndex1].style.display = 'block';

    // Check if the current image is the one you want to trigger the additional image
    if (currentIndex1 === 14) {
        // Create a new image element
        const additionalImage = document.createElement('img');
        additionalImage.src = './images/fire.png';
        additionalImage.alt = 'Additional Image';
        additionalImage.style.display= 'block';
        additionalImage.id="dialog2";
        // Append the additional image to the dialog
        document.querySelector('.dialog').appendChild(additionalImage);
    }

    // Move to the next image
    currentIndex1++;
}

// Delay the initial call to displayImages1 by 2 seconds (2000 milliseconds)
setTimeout(() => {
    // Call the displayImages function after the delay
    intervalId = setInterval(displayImages1, 1300);
}, 1000); // Adjust the delay as needed (in milliseconds)

document.addEventListener("DOMContentLoaded", function() {
    // When the DOM content is loaded, gradually fade in the page
    document.body.style.opacity = '1';
});

/////////////////////////typewriter, story////////////////////////////////////////////

const text = "We are “all mouth and trousers”. What does that mean?. It's about us. The right time to do something is now. You are going to solve something which is going to challenge you. There are two skeletons in which they are great great! idiots. They are fighting for nothing. I want you! to solve it.";

setTimeout(() => {
    const typed = new Typed('#typed', {
        strings: [text],
        typeSpeed: 50, // Typing speed in milliseconds
        showCursor: false, // Hide cursor
    });
}, 3000);

const skipLink = document.getElementById('skip-link');


document.addEventListener("DOMContentLoaded", function() {
    
    skipLink.addEventListener('click', function(event) {
    
    event.preventDefault();
    console.log('inside');
    document.getElementById('typed').style.display = 'none';
    document.getElementById('instructions').style.display = 'block';
    document.getElementById('conversation').style.opacity = '0';
    document.getElementById('soundon').style.display = 'block';
    document.getElementById('soundoff').style.display = 'block';
    document.getElementById('feedback').style.display = 'block';
    document.getElementById('leaderboard').style.display = 'block';
    skipLink.style.opacity = '0';
    document.getElementById('game').style.display = 'inline';
    document.getElementById('ins-head').style.opacity = '1';
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
    audioPlayer.currentTime = 27; // Reset playback position to 27 seconds
});


    // Set a timeout to show the anchor tag after 9 seconds (9000 milliseconds)
    setTimeout(function() {
        skipLink.style.display = 'inline'; // Show the anchor tag
    }, 3000);
});

///////////////////////////////////audioplay///////////////////////////////

window.onload = function() {
    var audio = document.getElementById("audioPlayer");
    var gameAudio = document.getElementById("gamePlayer");
    var stopButton = document.getElementById("game");
    var soundOnButton = document.getElementById("soundon");
    var soundOffButton = document.getElementById("soundoff");
    var skipLink = document.getElementById("skip-link");
  
    // Play audio after a delay
    setTimeout(function() {
      audio.play();
    }, 1000); // Adjust delay time in milliseconds (2000ms = 2 seconds)
  
    // Function to stop audio
    function stopAudio() {
      audio.pause();
      audio.currentTime = 0; // Reset audio to the beginning
    }

    // Function to stop game audio
    function stopGameAudio() {
      gameAudio.pause();
      gameAudio.currentTime = 0;
    }
  
    // Function to play game audio
    function playGameAudio() {
      gameAudio.play();
    }
  
    // Event listener for stopping audio
    stopButton.onclick = function() {
      stopAudio();
    };
  
    // Event listener for sound on button
    soundOnButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of anchor tag
      playGameAudio();
    });
  
    // Event listener for sound off button
    soundOffButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of anchor tag
      stopGameAudio();
    });
    
    // Event listener for skip link
    skipLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default behavior of anchor tag
      playGameAudio();
    });
  
    // Additional logic if you want to stop game audio when the window loses focus
    window.onblur = function() {
      stopGameAudio();
    };
  
    // Additional logic if you want to resume game audio when the window gains focus
    window.onfocus = function() {
      playGameAudio();
    };
  };


  