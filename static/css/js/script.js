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

// Timestamp creation
document.getElementById("taskForm").addEventListener("submit", function () {
    // Generate current timestamp
    const timestamp = new Date().toLocaleString();
    document.getElementById("timestamp").value = timestamp; // Assign timestamp before submitting form
});
