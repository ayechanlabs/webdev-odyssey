// UI
const min_number = document.querySelector(".min_number"),
    max_number = document.querySelector(".max_number"),
    get_game_form = document.getElementById("game_form"),
    get_input = document.querySelector("#guess_number"),
    get_btn = document.querySelector("#submit_btn"),
    message_1 = document.querySelector(".message_1"),
    message_2 = document.querySelector(".message_2");

const min_num = 1,
    max_num = 10,
    win_num = randomNum(min_num, max_num);

let game_left = 3;

min_number.textContent = min_num;
max_number.innerText = max_num;

get_btn.addEventListener("click", function(e) {
    // we can also use ->
    // +get_input.value
    // parsesInt(get_input.value);
    let guess = Number(get_input.value);

    if (guess < min_num || guess > max_num || isNaN(guess)) {
        // message_2.textContent = `Please enter a number between ${min_num} to ${max_num}`;
        setMessage_2(`Please enter a number between ${min_num} to ${max_num}`, "blue");
    }

    if (guess === win_num) {
        // GAME WON

        // // disabled the input box
        // get_input.disabled = true;

        // // change border color of input box to green
        // get_input.style.borderColor = "green";
        
        // // show message alert if user win the game & change text box color to green.
        // // message_1.textContent = `${win_num} is correct. You win the game.`;
        // // message_1.style.color = "green";
        // setMessage_1(`${win_num} is correct. You win the game.`, "green");

        // get_btn.value = "Play Again!";

        game_end(true, `${win_num} is correct. You win the game.`);


    } else {
        game_left -= 1;

        if (game_left === 0) {
            // GAME-OVER

            // // disabled the input box
            // get_input.disabled = true;

            // // change border color of input box to red
            // get_input.style.borderColor = "red";

            // // show message alert if user lost the game & change text box color to red.
            // // message_1.textContent = `Game Over, You Lose the game. The correct number is ${win_num}.`;
            // // message_1.style.color = "red";
            // setMessage_1(`Game Over, You Lose the game. The correct number is ${win_num}.`, "red");

            // // play again
            // get_btn.value = "Play Again!"

            game_end(false, `Game Over, You Lose the game. The correct number is ${win_num}.`);

        } else {
            // CONTINUE GAME

            // change border color of input box to red
            get_input.style.borderColor = "darkorange";

            // show message alert if user guessed incorrect and change text box color to violet
            // message_1.textContent = `${guess} is not correct! ${game_left} guess left.`;
            // message_1.style.color = "darkorange";
            setMessage_1(`${guess} is not correct! ${game_left} guess left.`, "darkorange");

            // clear input box from old value
            get_input.value = "";

            // put auto focus on the text box
            get_input.focus();
        }
    }

    
    e.preventDefault();
});

function setMessage_1 (msg, color) {
    message_1.textContent = msg;
    message_1.style.color = color;
}

function setMessage_2 (msg, color) {
    message_2.textContent = msg;
    message_2.style.color = color;

    // setInterval(); // သူက function ကို ခန" invoke လုပ်ပေးတာ
    setTimeout(function() {
        message_2.textContent = "";
    }, 2000);
}

function game_end(won, msg) {
    // let color = won === true ? "green" : "red";

    let color;
    won === true ? color = "green" : color = "red";

    get_input.disabled = true;
    get_input.style.borderColor = color;

    setMessage_1(msg, color);

    get_btn.value = "Play Again";

    // add class

    // get_btn.className = "btn reload";
    // get_btn.className += " reload";

    get_btn.classList.add("reload");
}

// click = mouseup

get_game_form.addEventListener ("mousedown", function(e) {
    if (e.target.classList.contains("reload")) {
        window.location.reload();
    }
})

function randomNum (min, max) {
    let getRandom = Math.round(Math.random() * (max - min) + 1);
    return getRandom;
}

// console.log(randomNum(1, 10));
console.log(win_num);

