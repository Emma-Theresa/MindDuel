let currentQuestionIndex = 0;
let questions = [];

async function fetchQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=20");
        const data = await response.json();
        questions = data.results;
        console.log(questions.length)
        displayQuestion();
    } catch (error) {
        console.log("error fetching questions", error);
    }
}

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerHTML = currentQuestion.question;
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
    const currentQuestion = questions[currentQuestionIndex];

    if (choice === currentQuestion.correct_answer) {
        resultElement.textContent = "Correct";
        
    } else {
        resultElement.textContent = "Incorrect";
    }
}

function nextQuestion() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = "";

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert("Quiz finished");
        currentQuestionIndex = 0;
        questions = []; // Clear existing questions
        fetchQuestions();
    }
}

fetchQuestions();





