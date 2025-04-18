// Dark theme toggle
document.addEventListener("DOMContentLoaded", function () {
        // Show the page once JavaScript executes
        document.body.classList.add("loaded");

        // Ensure dark mode is applied correctly
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        }

        // Theme toggle button functionality
        document.getElementById("theme-toggle").addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            // Save the preference
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
});

//Confirm before deleting a task
function confirmDelete() {
    return confirm("Are you sure you want to delete this task?");
}

