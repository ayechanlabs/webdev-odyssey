$(document).ready(function() {
    // theme Toggle for light mode and dark mode
    $("#theme-toggle").click(function() {
        $("body").toggleClass("dark-mode");
        localStorage.setItem("theme", $("body").hasClass("dark-mode") ? "dark" : "light");
    });

    // load theme from local storage
    if (localStorage.getItem("theme") === "dark") {
        $("body").addClass("dark-mode");
    }

    const quizes = [
        {
            question: "What do you use a phone for?",
            options: ["Cooking", "Sleeping", "Calling", "Driving"],
            answer: "Calling"
        },

        {
            question: "Which one is a smartphone brand?",
            options: ["Apple", "Banana", "Carrot", "Grapes"],
            answer: "Apple"
        },

        {
            question: "Which app lets you make video calls?",
            options: ["Calculator", "Camera", "Phone", "Facetime"],
            answer: "Facetime"
        }
    ];

    let currentIdx = 0;
    let currentScore = 0;

    function showQuestion() {
        const currentQuiz = quizes[currentIdx];

        $("#question").text(currentQuiz.question);
        $(".options").empty(); // document.querySelector(".options").innerHTML = "";

        currentQuiz.options.forEach( option => {
            $(".options").append(`<button type="button" class="option-btn">${option}</button>`);
        });

        $(".next-btn").hide();
    }
    showQuestion();

    $(".options").on("click", ".option-btn", function(e) {
            // console.log(e.target);
            // console.log(this);
            // console.log(this.innerText);

            // console.log($(this));
            const selectedOption = $(this).text();
            const correctAns = quizes[currentIdx].answer

            if (selectedOption === correctAns) {
                // console.log("Correct!");
                $(this).addClass("correct");
                currentScore++;
            } else {
                // console.log("Incorrect!");
                $(this).addClass("incorrect");
                $(`.option-btn:contains(${correctAns})`).addClass("correct");
            }

            $(".option-btn").attr("disabled", true);
            $(".next-btn").show();
    });

    $(".next-btn").click(function() {
        currentIdx++;

        if (currentIdx < quizes.length) {
            showQuestion();
        } else {
            // $("#question").text("Quiz Completed!");
            // $(".options").empty();
            // $(".next-btn").hide();

            showResult();
        }
    });

    function showResult() {
        // console.log("Result");
        $("#result").show();
        $("#quiz-container").hide();
        $(".next-btn").hide();
        $("#result").html(
            `
            <h3>Your Score: ${currentScore}/${quizes.length}</h3>
            <button type="button" id="restart-btn">Restart</button>
            `
        );
    }

    $("#result").on("click", "#restart-btn", function() {
        // currentIdx = 0;
        // currentScore = 0;
        // $("#result").hide();
        // $("#quiz-container").show();
        // showQuestion();

        location.reload();
    });
});

// click() -> bubbling
// toggleClass()
// hasClass()
// addClass()
// text()
// append()
// $("").on(event, selector, callback) -> Delegation
// attr(attribute-name, value) -> get or set attribute value
// empty() -> clear the content of the element
// html() -> get or set the HTML content of the element

// HTML မှာ ရှိနေရင် Event Bubbling မရှိရင် event delegatioon
