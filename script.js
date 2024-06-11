let currentQuestionIndex = 0;
let questions = [];
let questionFetchCount = 0; // Counter to track number of fetched questions
let player1Score=0;
let player2Score=0;

document.addEventListener("DOMContentLoaded", () => {
    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");
    const sprite1 = document.getElementById("Character_sprite1");
    const sprite2 = document.getElementById("Character_sprite2");
    const newButton = document.getElementById("new_button");
    const taskContainer = document.querySelector(".task_container");

    player1.style.display = 'none';
    player2.style.display = 'none';
    taskContainer.style.display = 'none';

    newButton.addEventListener("click", move_right);
    taskContainer.addEventListener("click", move_left);

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
    }

    function onPlayer1AnimationEnd() {
        sprite1.classList.remove("animate_run_Character_sprite1");
        player1.style.left = '720px';
        player1.style.top = '360px';
        sprite1.style.top = '-200px';
        sprite1.style.left = '-160px';
        taskContainer.style.display = 'block';
        task_container_popup();

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

    function move_left() {
        player1.classList.add("animate_player1_l");
        player2.classList.add("animate_player2_l");
        sprite1.classList.add("animate_run_Character_sprite1");
        sprite2.classList.add("animate_run_Character_sprite2");

        player1.addEventListener("animationend", onPlayer1AnimationLeftEnd);
        player2.addEventListener("animationend", onPlayer2AnimationLeftEnd);
    }

    function onPlayer1AnimationLeftEnd() {
        sprite1.classList.remove("animate_run_Character_sprite1");
        player1.style.left = '100px';
        player1.style.top = '360px';
        sprite1.style.top = '-200px';
        sprite1.style.left = '-160px';
        taskContainer.style.display = 'block';

        player1.removeEventListener("animationend", onPlayer1AnimationEnd);
    }

    function task_container_popup() {
        taskContainer.style.display = 'block';
        fetchQuestions();
    }

    function onPlayer2AnimationLeftEnd() {
        sprite2.classList.remove("animate_run_Character_sprite2");
        player2.style.left = '200px';
        player2.style.top = '260px';
        sprite2.style.top = '-303px';
        sprite2.style.left = '-180px';

        player2.removeEventListener("animationend", onPlayer2AnimationEnd);
    }

    function green_attack_r() {
        sprite1.classList.remove("animate_run_Character_sprite1");
        player1.style.left = '720px';
        player1.style.top = '360px';
        sprite1.style.top = '-200px';
        sprite1.style.left = '-160px';
        taskContainer.style.display = 'block';

        taskContainer.style.display = 'none';
        sprite1.style.top = '10px';
        sprite1.style.left = '-160px';
        sprite1.classList.add("animate_combat_green");
    }

    function blue_attack_l() {
        sprite2.classList.remove("animate_run_Character_sprite2");
        player2.style.left = '820px';
        player2.style.top = '260px';
        sprite2.style.top = '-303px';
        sprite2.style.left = '-180px';

        sprite2.style.top = '-87px';
        sprite2.style.left = '-160px';
        sprite2.classList.add("animate_combat_blue");
    }

    async function fetchQuestions() {
        try {
            const response = await fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=easy");
            const data = await response.json();
            questions = data.results;
            questionFetchCount++; // Increment counter each time a question is fetched
            console.log(`Questions fetched: ${questionFetchCount}`);
            displayQuestion();
        } catch (error) {
            console.log("error fetching questions", error);
        }
    }

    function displayQuestion() {
        const questionElement = document.getElementById("question");
        const choicesElement = document.getElementById("choices");
        const resultElement = document.getElementById("result");

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

    function checkAnswer(choice) {
        const resultElement = document.getElementById("result");
        const questionContainer = document.getElementById("question-container");

        const answerCorrect = choice === questions[currentQuestionIndex].correct_answer;
        resultElement.textContent = answerCorrect ? "Correct" : "Incorrect";

        // Check if the current function was called by onPlayer1AnimationEnd
        if (callerCheck('onPlayer1AnimationEnd')) {
            if (answerCorrect) {
                handleCorrectAnswerRight();
            } else {
                handleIncorrectAnswerRight();
            }
        } else if(callerCheck('onPlayer2AnimationEnd')){
            if (answerCorrect) {
                handleCorrectAnswerLeft();
            } else {
                handleIncorrectAnswerLeft();
            }
        }

        setTimeout(() => {
            questionContainer.style.display = "none";
        }, 1000);

        setTimeout(nextQuestion, 1000);
    }

    function callerCheck(calleeName) {
        const stack = new Error().stack;
        return stack.includes(calleeName);
    }

    function handleCorrectAnswerRight() {
        move_left();
    }

    function handleIncorrectAnswerRight() {
        player2Score++;
        player1Score--;
        player1Health=player1Health-20;
        
        move_left();
       
    }

    function handleCorrectAnswerLeft() {
        move_right();
    }

    function handleIncorrectAnswerLeft() {
        player2Score--;
        player1Score++;
        player2Health=player2Health-20;
        move_right();
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            const questionContainer = document.getElementById("question-container");
            questionContainer.style.display = "block";
            displayQuestion();
        }
    }

    let player1Health = 100;
    let player2Health = 100;

    function updateHealthBars() {
        document.getElementById('playerHealthInner').style.width = `${player1Health}%`;
        document.getElementById('enemyHealthInner').style.width = `${player2Health}%`;
    }

    updateHealthBars();
});
