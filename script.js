// // MindDuel/script.js
// document.addEventListener("DOMContentLoaded", () => {
//     const startButton = document.querySelector(".start_animation");
//     const player1 = document.getElementById("player1");
//     const player2 = document.getElementById("player2");
//     const sprite1 = document.getElementById("Character_sprite1");
//     const sprite2 = document.getElementById("Character_sprite2");

//     // Initially hide player1 and player2
//     player1.classList.add("hidden");
//     player2.classList.add("hidden");

//     startButton.addEventListener("click", () => {

//         // Show player1 and player2
//         player1.classList.remove("hidden");
//         player2.classList.remove("hidden");

//         player1.classList.add("animate_player1");
//         player2.classList.add("animate_player2");
//         sprite1.classList.add("animate_run_Character_sprite1");
//         sprite2.classList.add("animate_run_Character_sprite2");
//     });

//     player1.addEventListener("animationend", () => {
//         sprite1.classList.remove("animate_run_Character_sprite1");
//         sprite1.classList.add("combact_position_r1");

//     });

//     player2.addEventListener("animationend", () => {
//         sprite2.classList.remove("animate_run_Character_sprite2");
//         sprite2.classList.add("combact_position_r2");
//     });
// });




// MindDuel/script.js
document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".start_animation");
    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");
    const sprite1 = document.getElementById("Character_sprite1");
    const sprite2 = document.getElementById("Character_sprite2");

    // Initially hide player1 and player2
    player1.style.display = 'none';
    player2.style.display = 'none';

    startButton.addEventListener("click", () => {
        // Show player1 and player2
        player1.style.display = 'block';
        player2.style.display = 'block';

        player1.classList.add("animate_player1");
        player2.classList.add("animate_player2");
        sprite1.classList.add("animate_run_Character_sprite1");
        sprite2.classList.add("animate_run_Character_sprite2");
    });

    player1.addEventListener("animationend", () => {
        sprite1.classList.remove("animate_run_Character_sprite1");
        player1.style.left = '720px';
        player1.style.top = '360px';
        sprite1.style.top = '-200px';
        sprite1.style.left = '-160px';
    });

    player2.addEventListener("animationend", () => {
        sprite2.classList.remove("animate_run_Character_sprite2");
        player2.style.left = '820px';
        player2.style.top = '260px';
        sprite2.style.top = '-303px';
        sprite2.style.left = '-180px';
    });
});
