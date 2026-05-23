// UI
// variables for light to dark theme
const themeText = document.querySelector('#theme-text'),
      themeBtn = document.querySelector("#theme-toggle-btn"),
      rootElement = document.documentElement;

// variables for quiz process
let currentQuestion = document.querySelector("#quiz-question"),
    optionsContainer = document.querySelector(".options-container"),
    nextBtn = document.querySelector("#next-btn"),
    restartBtn = document.querySelector("#restart-btn");

themeBtn.addEventListener("click", () => {
    const currentTheme = rootElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
        rootElement.removeAttribute("data-theme");
        themeText.textContent = "Theme: Light Mode";
    } else {
        rootElement.setAttribute("data-theme", "dark");
        themeText.textContent = "Theme: Dark Mode";
    }
});

// 1. create the array of objects for the quiz
const quizQuestions = [
    {
        question: "What is the closest planet to the Sun?",
        options: ["Earth", "Venus", "Mercury", "Mars"],
        answer: "Mercury"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Silver", "Hydrogen"],
        answer: "Oxygen"
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        answer: "Mount Everest"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Brain"],
        answer: "Skin"
    },
    {
        question: "Which country is the largest by land area?",
        options: ["Russia", "Canada", "China", "United States"],
        answer: "Russia"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    }
];

// declare variables to keep track of the current question index and score
let currentIdx = 0, 
    currentScore = 0;

function loadQuiz() {
    //Hide the next button until an answer is picked
    nextBtn.style.display = "none";
    restartBtn.style.display = "none";

    // get the current quiz question and options based on the current index
    const currentQuiz = quizQuestions[currentIdx];

    // update the UI with the current question
    currentQuestion.textContent = currentQuiz.question;

    // clear the previous options from the UI -> document.querySelector(".options-container").innerHTML = "";
    optionsContainer.textContent = "";

    // get the options from currentQuiz variable using .options and create buttons for each option
    currentQuiz.options.forEach (option => {    
        const optionBtn = document.createElement("button");
        optionBtn.classList.add("options-btn");
        optionBtn.textContent = option;
        optionsContainer.appendChild(optionBtn);

        // add event listener to each option button
        optionBtn.addEventListener("click", function() {
            const selectedOption = optionBtn.textContent; // this.textContent;

            // 1. Check if the answer is right or wrong and apply styles
            if (selectedOption === currentQuiz.answer) {
                optionBtn.classList.add("correct"); // this.classList.add("correct");
                currentScore++;
            } else {
                optionBtn.classList.add("incorrect"); // this.classList.add("incorrect");
            }

            // 2. Find All option buttons inside the container and lock them down
            const allButtons = optionsContainer.querySelectorAll(".options-btn");

            allButtons.forEach(btn => {

                // Highlight the correct answer for the user, even if they guessed wrong
                if (btn.textContent === currentQuiz.answer) {
                    btn.classList.add("correct");
                }
                // Physically disable the button so it can't be clicked again
                btn.disabled = true;
            });

            // 3. Show the next button
            nextBtn.style.display = "block";
        });
    });
}

// Global Event Listener for the Next Button (Only Declared Once)
nextBtn.addEventListener("click", function() {
    // move to the next question index when the user clicks "Next"
    currentIdx++;

    if (currentIdx < quizQuestions.length) {
        loadQuiz();
    } else {
        // find the main outer wrapper card
        const mainContainer = document.querySelector(".container");
        // Add the class that adjusts the card height and layout dynamically
        mainContainer.classList.add("quiz-finished");

        // select the quiz container to swap the content
        const quizBox = document.querySelector(".quiz-container");
        quizBox.classList.add("result");
        quizBox.innerHTML = `<h4>Quiz Complete!</h4><p>Your Score: ${currentScore}/${quizQuestions.length}</p>`;

        // hide the next button permanently at the end
        nextBtn.style.display = "none";
        restartBtn.style.display = "block";
    }
});

restartBtn.addEventListener("click", function() {
    // 1. Reset Numbers
    currentIdx = currentScore = 0;

    // 2. Remove the custom end-game styling classes
    const mainContainer = document.querySelector(".container");
    mainContainer.classList.remove("quiz-finished");

    const quizBox = document.querySelector(".quiz-container");
    quizBox.classList.remove("result");

    // 3. Re-build the core HTML structure inside the quiz box
    quizBox.innerHTML =
        `<p id="quiz-question" class="quiz-question">Questions ?</p>
        <div class="options-container"></div>`;

    // 4. Re-bind our UI variables so JS can find the new elements we just made
    currentQuestion = document.querySelector("#quiz-question");
    optionsContainer = document.querySelector(".options-container");

    // 5. Fire up the quiz again.
    loadQuiz();
});

loadQuiz();

// Version - 2
// Global Event Listener for the Next Button
// nextBtn.addEventListener("click", function() {
//     currentIdx++;
//
//     if (currentIdx < quizQuestions.length) {
//         loadQuiz();
//     } else {
//         const mainContainer = document.querySelector(".container");
//         mainContainer.classList.add("quiz-finished");
//
//         const quizBox = document.querySelector(".quiz-container");
//         quizBox.classList.add("result");
//
//         // PURE OPTIMIZATION WAY: Clear the choices, and use the existing question box to show the score!
//         optionsContainer.textContent = "";
//         currentQuestion.innerHTML = `<h4>Quiz Complete!</h4><p>Your Score: ${currentScore}/${quizQuestions.length}</p>`;
//
//         nextBtn.style.display = "none";
//         restartBtn.style.display = "block";
//     }
// });

// Clean Restart Listener (No querySelectors needed!)
// restartBtn.addEventListener("click", function() {
//     currentIdx = currentScore = 0;
//
//     const mainContainer = document.querySelector(".container");
//     mainContainer.classList.remove("quiz-finished");
//
//     const quizBox = document.querySelector(".quiz-container");
//     quizBox.classList.remove("result");
//
//     // Just reset the text and clear buttons—the actual elements never died!
//     currentQuestion.textContent = "Questions ?";
//     optionsContainer.textContent = "";
//
//     loadQuiz();
// });
