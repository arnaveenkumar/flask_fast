document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Check saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});