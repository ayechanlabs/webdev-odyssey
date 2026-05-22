// UI
let currentQuestion = document.querySelector("#quiz-question"),
    optionsContainer = document.querySelector(".options-container"),
    nextBtn = document.querySelector("#next-btn");

// 1. create the array of objects for the quiz
const quizQuestions = [
    {
        question: "What is the cloest planet to the Sun?",
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
    }
];

// declare variables to keep track of the current question index and score
let currentIdx = 0, 
    currentScore = 0;

function loadQuiz() {
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

        optionsBtns = document.querySelectorAll(".options-btn"); // get all option buttons after they are created

        
        // add event listener to each option button
        optionBtn.addEventListener("click", function() {
            const selectedOption = optionBtn.textContent; // this.textContent;

            if (selectedOption === currentQuiz.answer) {
                optionBtn.classList.add("correct"); // this.classList.add("correct");
                currentScore++;

                // document.querySelectorAll(".options-btn").forEach(btn => btn.disabled = true); // disable all option buttons after an option is selected
                optionsBtns.forEach(btn => btn.disabled = true); // disable all option buttons after an option is selected

            } else {
                optionBtn.classList.add("incorrect"); // this.classList.add("incorrect");

                // find the correct answer button and add "correct" class to it
                optionsBtns.forEach (btn => {
                    if (btn.textContent === currentQuiz.answer) {
                        btn.classList.add("correct");
                    }
                    btn.disabled = true; // disable all option buttons after an option is selected
                });

                // const optionButtons = document.querySelectorAll(".options-btn");
                // optionButtons.forEach(btn => {
                //     if (btn.textContent === currentQuiz.answer) {
                //         btn.classList.add("correct");
                //     }
                //     btn.disabled = true; // disable all option buttons after an option is selected
                // });
            }

            // show the next button after an option is selected
            nextBtn.style.display = "block";

            currentIdx++;
            nextBtn.addEventListener ("click", function() {
                if (currentIdx < quizQuestions.length) {
                    loadQuiz();
                } else {
                    document.querySelector("#quiz-container").innerHTML = `<p>Your Score: ${currentScore}/${quizQuestions.length}</p>`;
                }
            });
        });
    });

    nextBtn.style.display = "none";
}

loadQuiz();
