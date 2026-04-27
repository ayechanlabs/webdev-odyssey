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
    win_num = 5;

min_number.textContent = min_num;
max_number.innerText = max_num;

get_btn.addEventListener("click", function(e) {
    // we can also use ->
    // +get_input.value
    // parsesInt(get_input.value);
    let guess = Number(get_input.value);
    console.log(guess);

    
    e.preventDefault();
});

