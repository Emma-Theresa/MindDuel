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
    }, 9000);
});


