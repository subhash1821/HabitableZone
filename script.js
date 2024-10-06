// Define levels, study points, and questions
const levels = [
    {
        title: "Level 6:The Habitable Zone.",
        studyPoints: [
            "The habitable zone is the region around a star where conditions might support liquid water.",
            "The Goldilocks Zone refers to the habitable zone being just right for life.",
            "Exoplanets in the habitable zone are considered potential candidates for life.",
            "The distance of the habitable zone varies depending on the star's brightness.",
            "Factors affecting habitability include atmospheric composition and pressure.",

        ],
        questions: [
            {
            question: "What is the habitable zone?",
            options: ["A region with no stars", "A region around a star that may support liquid water", "A zone filled with asteroids", "A region of gas giants"],
            answer: 1
            },
            {
            question: "What does the Goldilocks Zone refer to?",
            options: ["A region too hot for life", "A region too cold for life", "A region just right for life", "A zone of gas giants"],
            answer: 2
            },
            {
            question: "Why are exoplanets in the habitable zone considered important?",
            options: ["They are the largest known exoplanets.", "They might have conditions suitable for life.", "They are the easiest to observe.", "They have the most moons."],
            answer: 1
            },
            {
            question: "What factor affects the distance of the habitable zone?",
            options: ["The planet's size", "The star's brightness", "The planet's rotation speed", "The star's age"],
            answer: 1
            },
            {
            question: "Which factor does NOT affect habitability?",
            options: ["Atmospheric composition", "Distance from the star", "Surface pressure", "The number of moons"],
            answer: 3
            }
            ]
    }
];

// Initialize variables
let currentLevel = 0;
let currentQuestion = 0;
let score = 0;

// Start game button event listener
document.getElementById("start-button").addEventListener("click", startGame);

// Start game function
function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("level-container").style.display = "block";
    showStudyMode();
}

// Show study mode function
function showStudyMode() {
    document.getElementById("study-mode").style.display = "block";
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("level-title").innerHTML = levels[currentLevel].title;
    const studyPoints = document.getElementById("study-points");
    studyPoints.innerHTML = "";
    levels[currentLevel].studyPoints.forEach(point => {
        const li = document.createElement("li");
        li.innerHTML = point;
        studyPoints.appendChild(li);
    });
    document.getElementById("quiz-button").addEventListener("click", showQuizMode);
}

// Show quiz mode function
function showQuizMode() {
    document.getElementById("study-mode").style.display = "none";
    document.getElementById("quiz-mode").style.display = "block";
    showQuestion();
}

// Show question function
function showQuestion() {
    const question = document.getElementById("question");
    const options = document.getElementById("options");
    question.innerHTML = levels[currentLevel].questions[currentQuestion].question;
    options.innerHTML = "";
    levels[currentLevel].questions[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = option;
        li.addEventListener("click", () => {
            checkAnswer(index);
        });
        options.appendChild(li);
    });
}

// Check answer function
function checkAnswer(answer) {
    if (answer === levels[currentLevel].questions[currentQuestion].answer) {
        score++;
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect.";
    }
    currentQuestion++;
    if (currentQuestion >= levels[currentLevel].questions.length) {
        endLevel();
    } else {
        showQuestion();
    }
}

// End level function
function endLevel() {
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("end-button-container").style.display = "block";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").innerHTML = `Level ${currentLevel + 1} Score: ${score}/${levels[currentLevel].questions.length}`;
    document.getElementById("end-button").addEventListener("click", nextLevel);
}

// Next level function
function nextLevel() {
    currentLevel++;
    currentQuestion = 0;
    score = 0;
    if (currentLevel >= levels.length) {
        alert("Congratulations, you've completed all levels!");
    } else {
        document.getElementById("end-button-container").style.display = "none";
        document.getElementById("score-container").style.display = "none";
        showStudyMode();
    }
}