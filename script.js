// script.js

const questions = [
    {
        text: "What year did Nigeria gained independence?",
        options: ["1860", "1914", "1960", "1880"],
        correct: "1960"
    },
    {
        text: "What state has the lowest LGA?",
        options: ["Abuja", "Taraba", "Bayelsa", "Ogun"],
        correct: "Abuja"
    },
    {
        text: "Which is the highest court of law in Nigeria?",
        options: ["Magistrate court", "Supreme court", "Court of Appeal", "Customary court"],
        correct: "Supreme court"
    },
    {
        text: "Which is the oldest degre-awarding university in Nigeria?",
        options: ["University of Nigeria", "University of Ibadan", "University of Calabar", "National Open University"],
        correct: "University of Ibadan"
    },
    {
        text: "What year was Nigeria's currency changed to the Naira and Kobo?",
        options: ["1973", "1960", "1914", "1994"],
        correct: "1973"
    },
    {
        text: "What is the most common natural resource in Nigeria?",
        options: ["Cocoa", "Coal", "Tin", "Petroleum"],
        correct: "Petroleum"
    },
    {
        text: "What was the first political party in Nigeria?",
        options: ["SDP", "APC", "NNDP", "PDP"],
        correct: "NNDP"
    },
    {
        text: "What do the two horses on the Nigeria coat of arms represent?",
        options: ["Dignity", "Shield", "Power", "Unity"],
        correct: "Dignity"
    },
    {
        text: "How many geopolitical zones is Nigeria divided into?",
        options: ["36", "7", "12", "6"],
        correct: "6"
    },
    {
        text: "Who gave Nigeria her name?",
        options: ["Queen Elizabeth II", "Abraham Lincoln", "Margaret Thatcher", "Floral Shaw"],
        correct: "Floral Shaw"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionArea = document.getElementById('question-area');
const optionsArea = document.getElementById('options-area');
const messageArea = document.getElementById('message-area');
const nextButton = document.getElementById('next-button');
const scoreArea = document.getElementById('score-area');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionArea.innerText = currentQuestion.text;
    optionsArea.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsArea.appendChild(button);
    });

    messageArea.innerText = '';
    nextButton.style.display = 'none';
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
        messageArea.innerText = 'Correct!';
        score++;
    } else {
        messageArea.innerText = `Wrong! The correct answer is ${currentQuestion.correct}.`;
    }
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    questionArea.innerText = `Quiz Completed!`;
    optionsArea.innerHTML = '';
    messageArea.innerText = '';
    nextButton.style.display = 'none';
    scoreArea.innerText = `Your total score is: ${score}/${questions.length}`;
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Restart Quiz';
    restartButton.onclick = restartQuiz;
    optionsArea.appendChild(restartButton);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreArea.innerText = '';
    displayQuestion();
}

nextButton.addEventListener('click', nextQuestion);

// Start the quiz by displaying the first question
displayQuestion();
