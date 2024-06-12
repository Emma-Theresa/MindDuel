window.onload = function() {
    var audio = document.getElementById("audioPlayer");
    var stopButton = document.getElementById("game");
  
    // Play audio after a delay
    setTimeout(function() {
      audio.play();
    }, 1000); // Adjust delay time in milliseconds (2000ms = 2 seconds)
  
    // Stop audio when stopButton is clicked
    stopButton.onclick = function() {
      audio.pause();
      audio.currentTime = 0; // Reset audio to the beginning
    };
  
    // Stop audio when it finishes playing
    audio.onended = function() {
      audio.pause();
      audio.currentTime = 0; // Reset audio to the beginning
    };
  };