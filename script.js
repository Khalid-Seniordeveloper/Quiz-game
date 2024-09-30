
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2,
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1,
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("nextButton");
const scoreContainer = document.getElementById("score");

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;
    currentQuestion.answers.forEach((answer, index) => {
        quizContainer.innerHTML += `<button onclick="checkAnswer(${index})">${answer}</button>`;
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
    nextButton.style.display = "inline-block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        quizContainer.style.display = "none";
        scoreContainer.innerHTML = `Your score: ${score} out of ${questions.length}`;
        scoreContainer.style.display = "block";
    }
});

// Start the quiz
showQuestion();
