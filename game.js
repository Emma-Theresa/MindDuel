let currentQuestionIndex = 0;
let questions = [];
let questionFetchCount = 0;
let player1Score = 0;
let player2Score = 0;
let player1Health = 100;
let player2Health = 100;

document.addEventListener("DOMContentLoaded", () => {
    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");
    const sprite1 = document.getElementById("Character_sprite1");
    const sprite2 = document.getElementById("Character_sprite2");
    const newButton = document.getElementById("start_button");
    const taskContainer = document.querySelector(".task_container"); // Added taskContainer selector
 
    // Initially hide player1, player2, and task container
    // player1.style.display = 'block';
    // player2.style.display = 'block';
    taskContainer.style.display = 'none';
 
    newButton.addEventListener("click", function() {
        // Call the move_right function
        move_right();
    
        // Disable the button
        newButton.style.display = 'none';
    });
    //taskContainer.addEventListener("click", blue_death_animation);
 
 

// move right 


function move_right() {
    combat_pos_r_reset();
    combat_pos_l_reset();
   
    const playerG = document.getElementById('player_G');
    const playerB = document.getElementById('player_B');

    const characterSpriteG = document.getElementById('Character_sprite_G');
    const characterSpriteB = document.getElementById('Character_sprite_B');

    playerG.classList.add('player_G_move_right');
    playerB.classList.add('player_B_move_right');

    characterSpriteG.classList.add('right_run_G');
    characterSpriteB.classList.add('right_run_B');

    // Optionally, you might want to remove the classes after the animation ends
    setTimeout(function() {
        playerG.classList.remove('player_G_move_right');
        playerB.classList.remove('player_B_move_right');

        characterSpriteG.classList.remove('right_run_G');
        characterSpriteB.classList.remove('right_run_B');

        // Call combat_pos_r after move_right animation ends
    
        combat_pos_r();
        
    }, 2200); // Duration should match the animation duration
}

function combat_pos_r() {
    const playerG = document.getElementById('player_G');
    const playerB = document.getElementById('player_B');

    const characterSpriteG = document.getElementById('Character_sprite_G');
    const characterSpriteB = document.getElementById('Character_sprite_B');

    playerG.classList.add('combact_pos_player_G_R');
    playerB.classList.add('combact_pos_player_B_R');

    characterSpriteG.classList.add('combact_pos_img_G_R');
    characterSpriteB.classList.add('combact_pos_img_B_R');
    taskContainer.style.display = 'block';
    nextQuestion();
   

}

function combat_pos_r_reset() {
    const playerG = document.getElementById('player_G');
    const playerB = document.getElementById('player_B');

    const characterSpriteG = document.getElementById('Character_sprite_G');
    const characterSpriteB = document.getElementById('Character_sprite_B');

    playerG.classList.remove('combact_pos_player_G_R');
    playerB.classList.remove('combact_pos_player_B_R');

    characterSpriteG.classList.remove('combact_pos_img_G_R');
    characterSpriteB.classList.remove('combact_pos_img_B_R');
    taskContainer.style.display = 'none';
}


// move left 

function move_left() {
    combat_pos_r_reset();
    combat_pos_l_reset();
    const playerG = document.getElementById('player_G');
    const playerB = document.getElementById('player_B');

    const characterSpriteG = document.getElementById('Character_sprite_G');
    const characterSpriteB = document.getElementById('Character_sprite_B');

    playerG.classList.add('player_G_move_left');
    playerB.classList.add('player_B_move_left');

    characterSpriteG.classList.add('left_run_G');
    characterSpriteB.classList.add('left_run_B');

    // Optionally, you might want to remove the classes after the animation ends
    setTimeout(function() {
        playerG.classList.remove('player_G_move_left');
        playerB.classList.remove('player_B_move_left');

        characterSpriteG.classList.remove('left_run_G');
        characterSpriteB.classList.remove('left_run_B');

        // Call combat_pos_r after move_right animation ends
        combat_pos_l();
    }, 2200); // Duration should match the animation duration
}

function combat_pos_l() {
    const playerG = document.getElementById('player_G');
    const playerB = document.getElementById('player_B');

    const characterSpriteG = document.getElementById('Character_sprite_G');
    const characterSpriteB = document.getElementById('Character_sprite_B');

    playerG.classList.add('combact_pos_player_G_L');
    playerB.classList.add('combact_pos_player_B_L');

    characterSpriteG.classList.add('combact_pos_img_G_L');
    characterSpriteB.classList.add('combact_pos_img_B_L');
    taskContainer.style.display = 'block';
    nextQuestion();

}

function combat_pos_l_reset() {
    const playerG = document.getElementById('player_G');
    const playerB = document.getElementById('player_B');

    const characterSpriteG = document.getElementById('Character_sprite_G');
    const characterSpriteB = document.getElementById('Character_sprite_B');

    playerG.classList.remove('combact_pos_player_G_L');
    playerB.classList.remove('combact_pos_player_B_L');

    characterSpriteG.classList.remove('combact_pos_img_G_L');
    characterSpriteB.classList.remove('combact_pos_img_B_L');
    taskContainer.style.display = 'none';
}





function combat_G() {
    combat_pos_r_reset();
    combat_pos_l_reset();
    const playerG = document.getElementById('player_G');
    const playerB = document.getElementById('player_B');

    const characterSpriteG = document.getElementById('Character_sprite_G');
    const characterSpriteB = document.getElementById('Character_sprite_B');

    playerG.classList.add('combact_pos_player_G_attack_r');
    playerB.classList.add('combact_pos_player_B_attack_r');

    characterSpriteG.classList.add('combact_pos_img_G_R');
    characterSpriteB.classList.add('combact_pos_img_B_R');

    characterSpriteG.classList.add('combact_G');

    // Optionally, you might want to remove the class after the animation ends
    setTimeout(function() {
        playerG.classList.remove('combact_pos_player_G_attack_r');
        playerB.classList.remove('combact_pos_player_B_attack_r');

        characterSpriteG.classList.remove('combact_pos_img_G_R');
        characterSpriteB.classList.remove('combact_pos_img_B_R');
        characterSpriteG.classList.remove('combact_G');
        move_left();
    }, 1100); // Duration should match the animation duration
}

function combat_B() {
    combat_pos_r_reset();
    combat_pos_l_reset();
    const playerG = document.getElementById('player_G');
    const playerB = document.getElementById('player_B');

    const characterSpriteG = document.getElementById('Character_sprite_G');
    const characterSpriteB = document.getElementById('Character_sprite_B');

    playerG.classList.add('combact_pos_player_G_attack_l');
    playerB.classList.add('combact_pos_player_B_attack_l');

    characterSpriteG.classList.add('combact_pos_img_G_L');
    characterSpriteB.classList.add('combact_pos_img_B_L');

    characterSpriteB.classList.add('combact_B');

    // Optionally, you might want to remove the class after the animation ends
    setTimeout(function() {
        playerG.classList.remove('combact_pos_player_G_attack_l');
        playerB.classList.remove('combact_pos_player_B_attack_l');

        characterSpriteG.classList.remove('combact_pos_img_G_L');
        characterSpriteB.classList.remove('combact_pos_img_B_L');
        characterSpriteB.classList.remove('combact_B');
        move_right();
    }, 1100); // Duration should match the animation duration
}


// Death animation 


function death_G() {
    combat_pos_r_reset();
    combat_pos_l_reset();
    const playerG = document.getElementById('player_G');
    const playerB = document.getElementById('player_B');

    const characterSpriteG = document.getElementById('Character_sprite_G');
    const characterSpriteB = document.getElementById('Character_sprite_B');

    playerG.classList.add('death_pos_player_G_r');
    playerB.classList.add('death_pos_player_B_r');

    characterSpriteG.classList.add('combact_pos_img_G_R');
    characterSpriteB.classList.add('combact_pos_img_B_R');

    characterSpriteG.classList.add('death_G');

    // Optionally, you might want to remove the class after the animation ends
    setTimeout(function() {
        playerG.classList.remove('death_pos_player_G_r');
        playerB.classList.remove('death_pos_player_B_r');

        characterSpriteG.classList.remove('combact_pos_img_G_R');
        characterSpriteB.classList.remove('combact_pos_img_B_R');
        characterSpriteG.classList.remove('death_G');
    }, 1100); // Duration should match the animation duration
}



function death_B() {
    combat_pos_r_reset();
    combat_pos_l_reset();
    const playerG = document.getElementById('player_G');
    const playerB = document.getElementById('player_B');

    const characterSpriteG = document.getElementById('Character_sprite_G');
    const characterSpriteB = document.getElementById('Character_sprite_B');

    playerG.classList.add('death_pos_player_G_l');
    playerB.classList.add('death_pos_player_B_l');

    characterSpriteG.classList.add('combact_pos_img_G_L');
    characterSpriteB.classList.add('combact_pos_img_B_L');

    characterSpriteB.classList.add('death_B');

    // Optionally, you might want to remove the class after the animation ends
    setTimeout(function() {
        playerG.classList.remove('death_pos_player_G_l');
        playerB.classList.remove('death_pos_player_B_l');

        characterSpriteG.classList.remove('combact_pos_img_G_L');
        characterSpriteB.classList.remove('combact_pos_img_B_L');
        characterSpriteB.classList.remove('death_B');
    }, 1100); // Duration should match the animation duration
}






    //onclick function
 
    let alternate = 0; // Initialize alternate to 0
 
    // function handleClick() {
    //     alternate++; // Increment alternate each time the container is clicked
    //     if (alternate % 2 === 1) {
    //         move_left(); // Move left on odd iterations
    //     } else {
    //         console.log("reset");
    //         resetSprites();
 
    //         move_right(); // Move right on even iterations
    //     }
    // }
 
    // Add the event listener to the taskContainer
   // Replace 'yourTaskContainerId' with the actual ID of your task container
 
        // Add the event listener to the taskContainer
// Replace 'yourTaskContainerId' with the actual ID of your task container
 
        async function fetchQuestions() {
            try {
                const response = await fetch("https://opentdb.com/api.php?amount=50&category=9&difficulty=easy");
                const data = await response.json();
                questions = data.results;
                console.log(`Questions fetched: ${questions.length}`);
            } catch (error) {
                console.log("Error fetching questions", error);
            }
        }

        
       
        function displayQuestion() {
            const questionElement = document.getElementById("question");
            const choicesElement = document.getElementById("choices");
            const resultElement = document.getElementById("result");
            questionElement.textContent="";
            resultElement.textContent = "";
   
            const currentQuestion = questions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;
            choicesElement.innerHTML = "";
   
            currentQuestion.incorrect_answers.forEach(choice => {
                const choiceButton = document.createElement("button");
                choiceButton.textContent = choice;
                choiceButton.classList.add("choice-btn");
                choiceButton.onclick = () => checkAnswer(choice);
                choicesElement.appendChild(choiceButton);
            });
   
            const correctChoiceButton = document.createElement("button");
            correctChoiceButton.textContent = currentQuestion.correct_answer;
            correctChoiceButton.classList.add("choice-btn");
            correctChoiceButton.onclick = () => checkAnswer(currentQuestion.correct_answer);
            choicesElement.appendChild(correctChoiceButton);
        }
 
        function nextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                const questionContainer = document.getElementById("question-container");
                questionContainer.style.display = "block";
                displayQuestion();
            } else {
                console.log("No more questions.");
            }
        }

        let currentPlayer = 1;

function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

let player1Score = 0;
let player2Score = 0;
function gameOver(winner,player1Score,player2Score) {
    const gameOverScreen = document.getElementById("game-over-screen");
    const winnerElement = document.getElementById("winner");
    const gameOverScreenContent = document.getElementById("game-over-screen-content-id")
    const scores = document.createElement('p');
    scores.textContent = `Player 1: ${player1Score} - Player 2: ${player2Score}`
    gameOverScreen.appendChild(scores);
    gameOverScreen.style.display = "block";
    winnerElement.textContent = winner;
    gameOverScreen.style.display = "block";
    taskContainer.style.display = "none";
  }


function checkAnswer(choice) {
  const resultElement = document.getElementById("result");
  const answerCorrect = choice === questions[currentQuestionIndex].correct_answer;
  
  resultElement.textContent = answerCorrect ? "Correct" : "Incorrect";
  
  if (answerCorrect) {
    if (currentPlayer === 1) {
        move_left();
      player1Score++; // Increase player 1's score for correct answer
      console.log(player1Score);
    } else {
        move_right();
      player2Score++; // Increase player 2's score for correct answer
      console.log(player2Score);
    }
  } else {
    if (currentPlayer === 1) {
        combat_G();
      player1Health -= 30; // Decrease player 1's health by 10 for each wrong answer
      document.getElementById("playerHealthInner").style.width = player1Health + "%";
    } else {
        combat_B();
      player2Health -= 30; // Decrease player 2's health by 10 for each wrong answer
      document.getElementById("enemyHealthInner").style.width = player2Health + "%";
    }
  }
  
  if (player1Health <= 0) {
    taskContainer.style.display='none';
    death_B();
    
    // Player 1 loses the game
    // Wait for 3 seconds before continuing
    setTimeout(function() {
        // Player 1 loses the game
        console.log("Player 2 Wins!");
        gameOver("Player 2 Wins!", player1Score, player2Score);
        console.log("Player 1 Score: " + player1Score);
        console.log("Player 2 Score: " + player2Score);
    }, 1100); // 3000 milliseconds = 3 seconds
  } else if (player2Health <= 0) {
    death_G();
    // Player 2 loses the game
    // Wait for 3 seconds before continuing
    setTimeout(function() {
        // Player 2 loses the game
        console.log("Player 1 Wins!");
        gameOver("Player 1 Wins!", player1Score, player2Score);
        console.log("Player 1 Score: " + player1Score);
        console.log("Player 2 Score: " + player2Score);
    }, 1100); // 3000 milliseconds = 3 seconds
  } else {
    switchPlayer(); // Switch to the next player
    handleClick(); // Move to the next turn
  }
}

        fetchQuestions();
    //Question fetching
 
});