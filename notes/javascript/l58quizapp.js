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
});