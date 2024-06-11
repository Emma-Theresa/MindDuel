// // document.addEventListener("DOMContentLoaded", () => {
// //     const player1 = document.getElementById("player1");
// //     const player2 = document.getElementById("player2");
// //     const sprite1 = document.getElementById("Character_sprite1");
// //     const sprite2 = document.getElementById("Character_sprite2");
// //     const newButton = document.getElementById("new_button");
// //     const taskContainer = document.querySelector(".task_container"); // Added taskContainer selector

// //     // Initially hide player1, player2, and task container
// //     player1.style.display = 'none';
// //     player2.style.display = 'none';
// //     taskContainer.style.display = 'none';

// //     newButton.addEventListener("click", move_right);
// //     // taskContainer.addEventListener("click", move_left);
// //     // taskContainer.addEventListener("click", blue_death_animation);

// //     function move_right() {
// //         // Show player1 and player2
// //         newButton.style.display = 'none';
// //         player1.style.display = 'block';
// //         player2.style.display = 'block';

// //         player1.classList.add("animate_player1");
// //         player2.classList.add("animate_player2");
// //         sprite1.classList.add("animate_run_Character_sprite1");
// //         sprite2.classList.add("animate_run_Character_sprite2");

// //         player1.addEventListener("animationend", onPlayer1AnimationEnd);
// //         player2.addEventListener("animationend", onPlayer2AnimationEnd);

// //     }

// //     function onPlayer1AnimationEnd() {
// //         sprite1.classList.remove("animate_run_Character_sprite1");
// //         player1.style.left = '720px';
// //         player1.style.top = '360px';
// //         sprite1.style.top = '-200px';
// //         sprite1.style.left = '-160px';
// //         // taskContainer.style.display = 'block';
// //         player1.removeEventListener("animationend", onPlayer1AnimationEnd);
        
        
// //     }

// //     function onPlayer2AnimationEnd() {
// //         sprite2.classList.remove("animate_run_Character_sprite2");
// //         player2.style.left = '820px';
// //         player2.style.top = '260px';
// //         sprite2.style.top = '-303px';
// //         sprite2.style.left = '-180px';

// //         player2.removeEventListener("animationend", onPlayer2AnimationEnd);

// //         green_attack_r();
        

// //     }


// //     // function move_left(){

// //     //     newButton.style.display = 'none';
// //     //     player1.style.display = 'block';
// //     //     player2.style.display = 'block';


// //     //     player1.classList.add("animate_player1_l");
// //     //     player2.classList.add("animate_player2_l");
// //     //     sprite1.classList.add("animate_run_Character_sprite1_l");
// //     //     sprite2.classList.add("animate_run_Character_sprite2_l");

// //     //     player1.addEventListener("animationend", onPlayer1AnimationLeftEnd);
// //     //     player2.addEventListener("animationend", onPlayer2AnimationLeftEnd);
// //     // }

// //     // function onPlayer1AnimationLeftEnd() {
// //     //     sprite1.classList.remove("animate_run_Character_sprite1_l");
// //     //     player1.style.left = '100px';
// //     //     player1.style.top = '360px';
// //     //     sprite1.style.top = '-200px';
// //     //     sprite1.style.left = '-160px';
// //     //     taskContainer.style.display = 'block';
// //     //     player1.removeEventListener("animationend", onPlayer1AnimationEnd);
        
// //     // }

// //     // function onPlayer2AnimationLeftEnd() {
// //     //     sprite2.classList.remove("animate_run_Character_sprite2_l");
// //     //     player2.style.left = '200px';
// //     //     player2.style.top = '260px';
// //     //     sprite2.style.top = '-303px';
// //     //     sprite2.style.left = '-180px';

// //     //     player2.removeEventListener("animationend", onPlayer2AnimationEnd);
// //     // }






// //     // combact


// //     function green_attack_r() {
// //         sprite1.classList.remove("animate_run_Character_sprite1");
// //         player1.style.left = '100px';
// //         player1.style.top = '360px';
// //         sprite1.style.top = '-200px';
// //         sprite1.style.left = '-160px';
// //         taskContainer.style.display = 'block';

// //         // Additional steps for the green attack
// //         taskContainer.style.display = 'none';
// //         sprite1.style.top = '10px';
// //         sprite1.style.left = '-160px';
// //         sprite1.classList.add("animate_combat_green");
        
   
// //     }


// //     function blue_attack_l() {
// //         sprite2.classList.remove("animate_run_Character_sprite2");
// //         player2.style.left = '200px';
// //         player2.style.top = '260px';
// //         sprite2.style.top = '-303px';
// //         sprite2.style.left = '-180px';

// //         // Additional steps for the blue attack
// //         sprite2.style.top = '-87px';
// //         sprite2.style.left = '-160px';
// //         sprite2.classList.add("animate_combat_blue");

    
// //     }

// // //Death animation

// //     function green_death_animation() {
// //         sprite1.classList.remove("animate_run_Character_sprite1_l");
// //         player1.style.left = '720px';
// //         player1.style.top = '360px';
// //         sprite1.style.top = '-200px';
// //         sprite1.style.left = '-160px';
// //         sprite1.classList.add("animate_death_green_Character_sprite1");
// //     }

// //     function blue_death_animation() {
// //         sprite2.classList.remove("animate_run_Character_sprite2");
// //         player2.style.left = '820px';
// //         player2.style.top = '260px';
// //         sprite2.style.top = '-200px';
// //         sprite2.style.left = '-160px';
// //         sprite2.classList.add("animate_death_blue_Character_sprite2");
// //     }






// // });






// document.addEventListener("DOMContentLoaded", () => {
//     const player1 = document.getElementById("player1");
//     const player2 = document.getElementById("player2");
//     const sprite1 = document.getElementById("Character_sprite1");
//     const sprite2 = document.getElementById("Character_sprite2");
//     const newButton = document.getElementById("new_button");
//     const taskContainer = document.querySelector(".task_container");

//     // Initially hide player1, player2, and task container
//     player1.style.display = 'none';
//     player2.style.display = 'none';
//     taskContainer.style.display = 'none';

//     newButton.addEventListener("click", move_right);

//     function move_right() {
//         newButton.style.display = 'none';
//         player1.style.display = 'block';
//         player2.style.display = 'block';

//         player1.classList.add("animate_player1");
//         player2.classList.add("animate_player2");
//         sprite1.classList.add("animate_run_Character_sprite1");
//         sprite2.classList.add("animate_run_Character_sprite2");

//         player1.addEventListener("animationend", onPlayer1AnimationEnd);
//         player2.addEventListener("animationend", onPlayer2AnimationEnd);

//          // Fetch question when animation starts
//     }

//     function onPlayer1AnimationEnd() {
//         sprite1.classList.remove("animate_run_Character_sprite1");
//         player1.style.left = '720px';
//         player1.style.top = '360px';
//         sprite1.style.top = '-200px';
//         sprite1.style.left = '-160px';
//         taskContainer.style.display = 'block';
//         player1.removeEventListener("animationend", onPlayer1AnimationEnd);
        
//     }

//     function onPlayer2AnimationEnd() {
//         sprite2.classList.remove("animate_run_Character_sprite2");
//         player2.style.left = '820px';
//         player2.style.top = '260px';
//         sprite2.style.top = '-303px';
//         sprite2.style.left = '-180px';
//         player2.removeEventListener("animationend", onPlayer2AnimationEnd);
//         fetch_Question_Player1();
//     }

//     function fetch_Question_Player1() {
//         fetch('https://opentdb.com/api.php?amount=50&category=9&difficulty=easy')
//             .then(response => response.json())
//             .then(data => {
//                 const question = data.results[0].question;
//                 const correctAnswer = data.results[0].correct_answer;
//                 const incorrectAnswers = data.results[0].incorrect_answers;

//                 const questionDiv = document.createElement('div');
//                 questionDiv.classList.add('question');
//                 questionDiv.textContent = question;
//                 taskContainer.appendChild(questionDiv);

//                 const answersDiv = document.createElement('div');
//                 answersDiv.classList.add('answers');
//                 taskContainer.appendChild(answersDiv);

//                 const answerButtons = [];
//                 // Create buttons for answers
//                 incorrectAnswers.forEach(answer => {
//                     const button = document.createElement('button');
//                     button.textContent = answer;
//                     button.addEventListener('click', () => {
//                         handleIncorrectAnswer();
//                     });
//                     answersDiv.appendChild(button);
//                     answerButtons.push(button);
//                 });

//                 const correctButton = document.createElement('button');
//                 correctButton.textContent = correctAnswer;
//                 correctButton.addEventListener('click', () => {
//                     handleCorrectAnswer();
//                 });
//                 answersDiv.appendChild(correctButton);
//                 answerButtons.push(correctButton);

//                 function handleCorrectAnswer() {
//                     fetch_Question_Player2();
//                     // Trigger dummy function for correct answer
//                     console.log("Correct Answer clicked");
//                     clearQuestion();
//                 }

//                 function handleIncorrectAnswer() {
//                     // Trigger dummy function for incorrect answer
                    
                    
//                     console.log("Incorrect Answer clicked");
//                     clearQuestion();
//                 }

//                 function clearQuestion() {
//                     // Clear the question and answers
//                     questionDiv.remove();
//                     answersDiv.remove();
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching question:', error);
//             });
//     }

//     function fetch_Question_Player2() {
//         fetch('https://opentdb.com/api.php?amount=50&category=9&difficulty=easy')
//             .then(response => response.json())
//             .then(data => {
//                 const question = data.results[0].question;
//                 const correctAnswer = data.results[0].correct_answer;
//                 const incorrectAnswers = data.results[0].incorrect_answers;

//                 const questionDiv = document.createElement('div');
//                 questionDiv.classList.add('question');
//                 questionDiv.textContent = question;
//                 taskContainer.appendChild(questionDiv);

//                 const answersDiv = document.createElement('div');
//                 answersDiv.classList.add('answers');
//                 taskContainer.appendChild(answersDiv);

//                 const answerButtons = [];
//                 // Create buttons for answers
//                 incorrectAnswers.forEach(answer => {
//                     const button = document.createElement('button');
//                     button.textContent = answer;
//                     button.addEventListener('click', () => {
//                         handleIncorrectAnswer();
//                     });
//                     answersDiv.appendChild(button);
//                     answerButtons.push(button);
//                 });

//                 const correctButton = document.createElement('button');
//                 correctButton.textContent = correctAnswer;
//                 correctButton.addEventListener('click', () => {
//                     handleCorrectAnswer();
//                 });
//                 answersDiv.appendChild(correctButton);
//                 answerButtons.push(correctButton);

//                 function handleCorrectAnswer() {
//                     // Trigger dummy function for correct answer
//                     console.log("Correct Answer clicked");
//                     fetch_Question_Player1();
//                     clearQuestion();
                    
//                 }

//                 function handleIncorrectAnswer() {
                    
//                     // Trigger dummy function for incorrect answer
//                     console.log("Incorrect Answer clicked");
//                     clearQuestion();
//                 }

//                 function clearQuestion() {
//                     // Clear the question and answers
//                     questionDiv.remove();
//                     answersDiv.remove();
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching question:', error);
//             });
//     }



//         function green_attack_r() {
//         sprite1.classList.remove("animate_run_Character_sprite1");
//         player1.style.left = '100px';
//         player1.style.top = '360px';
//         sprite1.style.top = '-200px';
//         sprite1.style.left = '-160px';
//         // taskContainer.style.display = 'block';

//         // Additional steps for the green attack
//         taskContainer.style.display = 'none';
//         sprite1.style.top = '10px';
//         sprite1.style.left = '-160px';
//         sprite1.classList.add("animate_combat_green");
    
        
   
//     }


//     function blue_attack_l() {
//         sprite2.classList.remove("animate_run_Character_sprite2");
//         player2.style.left = '200px';
//         player2.style.top = '260px';
//         sprite2.style.top = '-303px';
//         sprite2.style.left = '-180px';

//         // Additional steps for the blue attack
//         sprite2.style.top = '-87px';
//         sprite2.style.left = '-160px';
//         sprite2.classList.add("animate_combat_blue");

    
//     }


// });


document.addEventListener("DOMContentLoaded", () => {     

    const player1 = document.getElementById("player1");     

    const player2 = document.getElementById("player2");     

    const sprite1 = document.getElementById("Character_sprite1");     

    const sprite2 = document.getElementById("Character_sprite2");     

    const newButton = document.getElementById("new_button");     

    const taskContainer = document.querySelector(".task_container");     
 
    // Initially hide player1, player2, and task container     

    player1.style.display = 'none';     

    player2.style.display = 'none';     

    taskContainer.style.display = 'none';     
 
    newButton.addEventListener("click", move_right);     
 
    function move_right() {         

        newButton.style.display = 'none';         

        player1.style.display = 'block';         

        player2.style.display = 'block';         

        player1.classList.add("animate_player1");         

        player2.classList.add("animate_player2");         

        sprite1.classList.add("animate_run_Character_sprite1");         

        sprite2.classList.add("animate_run_Character_sprite2");         

        player1.addEventListener("animationend", onPlayer1AnimationEnd);         

        player2.addEventListener("animationend", onPlayer2AnimationEnd);         
 
        // Fetch question when animation starts     

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

        fetch_Question_Player1();     

    }     
 
    function fetch_Question_Player1() {         

        fetch('https://opentdb.com/api.php?amount=50&category=9&difficulty=easy')

            .then(response => response.json())             

            .then(data => {                 

                const question = data.results[0].question;                 

                const correctAnswer = data.results[0].correct_answer;                 

                const incorrectAnswers = data.results[0].incorrect_answers;                 

                const questionDiv = document.createElement('div');                 

                questionDiv.classList.add('question');                 

                questionDiv.textContent = question;                 

                taskContainer.appendChild(questionDiv);                 

                const answersDiv = document.createElement('div');                 

                answersDiv.classList.add('answers');                 

                taskContainer.appendChild(answersDiv);                 

                const answerButtons = [];                 
 
                // Create buttons for answers                 

                incorrectAnswers.forEach(answer => {                     

                    const button = document.createElement('button');                     

                    button.textContent = answer;                     

                    button.addEventListener('click', () => {                         

                        handleIncorrectAnswer();                     

                    });                     

                    answersDiv.appendChild(button);                     

                    answerButtons.push(button);                 

                });                 
 
                const correctButton = document.createElement('button');                 

                correctButton.textContent = correctAnswer;                 

                correctButton.addEventListener('click', () => {                     

                    handleCorrectAnswer();                 

                });                 

                answersDiv.appendChild(correctButton);                 

                answerButtons.push(correctButton);                 
 
                function handleCorrectAnswer() {                     

                    console.log("Correct Answer clicked");                     

                    clearQuestion();                     

                    fetch_Question_Player2(); // Call the second fetch function here

                }                 
 
                function handleIncorrectAnswer() {                     

                    console.log("Incorrect Answer clicked"); 
                    blue_attack_l();                    

                    clearQuestion();                 

                }                 
 
                function clearQuestion() {                     

                    questionDiv.remove();                     

                    answersDiv.remove();                 

                }             

            })             

            .catch(error => {                 

                console.error('Error fetching question:', error);             

            });     

    }     
 
    function fetch_Question_Player2() {         

        fetch('https://opentdb.com/api.php?amount=50&category=9&difficulty=easy')

            .then(response => response.json())             

            .then(data => {                 

                const question = data.results[0].question;                 

                const correctAnswer = data.results[0].correct_answer;                 

                const incorrectAnswers = data.results[0].incorrect_answers;                 

                const questionDiv = document.createElement('div');                 

                questionDiv.classList.add('question');                 

                questionDiv.textContent = question;                 

                taskContainer.appendChild(questionDiv);                 

                const answersDiv = document.createElement('div');                 

                answersDiv.classList.add('answers');                 

                taskContainer.appendChild(answersDiv);                 

                const answerButtons = [];                 
 
                // Create buttons for answers                 

                incorrectAnswers.forEach(answer => {                     

                    const button = document.createElement('button');                     

                    button.textContent = answer;                     

                    button.addEventListener('click', () => {                         

                        handleIncorrectAnswer();                     

                    });                     

                    answersDiv.appendChild(button);                     

                    answerButtons.push(button);                 

                });                 
 
                const correctButton = document.createElement('button');                 

                correctButton.textContent = correctAnswer;                 

                correctButton.addEventListener('click', () => {                     

                    handleCorrectAnswer();                 

                });                 

                answersDiv.appendChild(correctButton);                 

                answerButtons.push(correctButton);                 
 
                function handleCorrectAnswer() {                     

                    console.log("Correct Answer clicked");                     

                    fetch_Question_Player1();                     

                    clearQuestion();                  

                }                 
 
                function handleIncorrectAnswer() {                     

                    console.log("Incorrect Answer clicked");                     
                    green_attack_r();
                    clearQuestion();                 

                }                 
 
                function clearQuestion() {                     

                    questionDiv.remove();                     

                    answersDiv.remove();                 

                }             

            })             

            .catch(error => {                 

                console.error('Error fetching question:', error);             

            });     

    }     
 
    function green_attack_r() {         

        sprite1.classList.remove("animate_run_Character_sprite1");         

        player1.style.left = '100px';         

        player1.style.top = '360px';         

        sprite1.style.top = '-200px';         

        sprite1.style.left = '-160px';         

        taskContainer.style.display = 'none';         

        sprite1.style.top = '10px';         

        sprite1.style.left = '-160px';         

        sprite1.classList.add("animate_combat_green");                       

    }     
 
    function blue_attack_l() {         

        sprite2.classList.remove("animate_run_Character_sprite2");         

        player2.style.left = '200px';         

        player2.style.top = '260px';         

        sprite2.style.top = '-303px';         

        sprite2.style.left = '-180px';         

        sprite2.style.top = '-87px';         

        sprite2.style.left = '-160px';         

        sprite2.classList.add("animate_combat_blue");          

    } 

});
