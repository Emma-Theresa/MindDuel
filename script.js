// document.addEventListener("DOMContentLoaded", () => {
//     const startButton = document.querySelector(".start_animation");
//     const player1 = document.getElementById("player1");
//     const player2 = document.getElementById("player2");
//     const sprite1 = document.getElementById("Character_sprite1");
//     const sprite2 = document.getElementById("Character_sprite2");
//     const task_container = document.querySelector(".task_container");
//     const start_button = document.getElementById("start_button");

//     // Initially hide player1 and player2
//     player1.style.display = 'none';
//     player2.style.display = 'none';
//     task_container.style.display = 'none';

    

//     startButton.addEventListener("click", () => {
//         // Show player1 and player2
//         start_button.style.display = 'none';
//         player1.style.display = 'block';
//         player2.style.display = 'block';

//         player1.classList.add("animate_player1");
//         player2.classList.add("animate_player2");
//         sprite1.classList.add("animate_run_Character_sprite1");
//         sprite2.classList.add("animate_run_Character_sprite2");
//     });

//     player1.addEventListener("animationend", () => {
//         sprite1.classList.remove("animate_run_Character_sprite1");
//         player1.style.left = '720px';
//         player1.style.top = '360px';
//         sprite1.style.top = '-200px';
//         sprite1.style.left = '-160px';
//         task_container.style.display = 'block';



//     });

//     player2.addEventListener("animationend", () => {
//         sprite2.classList.remove("animate_run_Character_sprite2");
//         player2.style.left = '820px';
//         player2.style.top = '260px';
//         sprite2.style.top = '-303px';
//         sprite2.style.left = '-180px'; 
//         // blue_attack_l();   
//     });

   
// });
 


document.addEventListener("DOMContentLoaded", () => {
    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");
    const sprite1 = document.getElementById("Character_sprite1");
    const sprite2 = document.getElementById("Character_sprite2");
    const newButton = document.getElementById("new_button");
    const taskContainer = document.querySelector(".task_container"); // Added taskContainer selector

    // Initially hide player1, player2, and task container
    player1.style.display = 'none';
    player2.style.display = 'none';
    taskContainer.style.display = 'none';

    newButton.addEventListener("click", move_right);
    // taskContainer.addEventListener("click", move_left);
    taskContainer.addEventListener("click", green_attack_r);

    function move_right() {
        // Show player1 and player2
        newButton.style.display = 'none';
        player1.style.display = 'block';
        player2.style.display = 'block';

        player1.classList.add("animate_player1");
        player2.classList.add("animate_player2");
        sprite1.classList.add("animate_run_Character_sprite1");
        sprite2.classList.add("animate_run_Character_sprite2");

        player1.addEventListener("animationend", onPlayer1AnimationEnd);
        player2.addEventListener("animationend", onPlayer2AnimationEnd);
    }

    function onPlayer1AnimationEnd() {
        sprite1.classList.remove("animate_run_Character_sprite1");
        player1.style.left = '720px';
        player1.style.top = '360px';
        sprite1.style.top = '-200px';
        sprite1.style.left = '-160px';
        taskContainer.style.display = 'block';

        player1.removeEventListener("animationend", onPlayer1AnimationEnd);
        
    }

    function onPlayer2AnimationEnd() {
        sprite2.classList.remove("animate_run_Character_sprite2");
        player2.style.left = '820px';
        player2.style.top = '260px';
        sprite2.style.top = '-303px';
        sprite2.style.left = '-180px';

        player2.removeEventListener("animationend", onPlayer2AnimationEnd);
    }


    function move_left(){

        // newButton.style.display = 'none';
        // player1.style.display = 'block';
        // player2.style.display = 'block';


        player1.classList.add("animate_player1_l");
        player2.classList.add("animate_player2_l");
        sprite1.classList.add("animate_run_Character_sprite1_l");
        sprite2.classList.add("animate_run_Character_sprite2_l");

        player1.addEventListener("animationend", onPlayer1AnimationLeftEnd);
        player2.addEventListener("animationend", onPlayer2AnimationLeftEnd);
    }

    function onPlayer1AnimationLeftEnd() {
        sprite1.classList.remove("animate_run_Character_sprite1_l");
        player1.style.left = '100px';
        player1.style.top = '360px';
        sprite1.style.top = '-200px';
        sprite1.style.left = '-160px';
        taskContainer.style.display = 'block';

        player1.removeEventListener("animationend", onPlayer1AnimationEnd);
        
    }

    function onPlayer2AnimationLeftEnd() {
        sprite2.classList.remove("animate_run_Character_sprite2_l");
        player2.style.left = '200px';
        player2.style.top = '260px';
        sprite2.style.top = '-303px';
        sprite2.style.left = '-180px';

        player2.removeEventListener("animationend", onPlayer2AnimationEnd);
    }






    // combact


    function green_attack_r() {
        sprite1.classList.remove("animate_run_Character_sprite1");
        player1.style.left = '720px';
        player1.style.top = '360px';
        sprite1.style.top = '-200px';
        sprite1.style.left = '-160px';
        taskContainer.style.display = 'block';

        // Additional steps for the green attack
        taskContainer.style.display = 'none';
        sprite1.style.top = '10px';
        sprite1.style.left = '-160px';
        sprite1.classList.add("animate_combat_green");
        
        
        setTimeout(() => {
            move_left();
        }, 1000);
    }
// move_left();

    function blue_attack_l() {
        sprite2.classList.remove("animate_run_Character_sprite2");
        player2.style.left = '820px';
        player2.style.top = '260px';
        sprite2.style.top = '-303px';
        sprite2.style.left = '-180px';

        // Additional steps for the blue attack
        sprite2.style.top = '-87px';
        sprite2.style.left = '-160px';
        sprite2.classList.add("animate_combat_blue");
    }
});

