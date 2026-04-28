// UI
const generate_random = document.querySelector(".get_random_btn"),
    rand_num_message = document.querySelector(".show_rand_num");

generate_random.addEventListener("click", function() {
    let rand_number = generate_random_number(1, 10);
    // console.log(rand_number);
    rand_num_message.textContent = `Your Random Number is: ${rand_number}`;
});

function generate_random_number() {
    return Math.floor(Math.random() * 10 + 1);
}
