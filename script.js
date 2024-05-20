document.addEventListener("DOMContentLoaded", function () {
    const darkModeIcon = document.getElementById("darkModeIcon");
    const navbar = document.getElementById("navbar");
    const darkMode = localStorage.getItem("dark-mode");

    function toggleDarkMode() {
        if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
            document.documentElement.removeAttribute("data-bs-theme");
            localStorage.setItem("dark-mode", "disabled");
            darkModeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
            // Set light background color for navbar
            navbar.classList.remove("navbar-dark");
            navbar.classList.add("navbar-light");
            navbar.classList.remove("bg-dark");
            navbar.classList.add("bg-light");
        } else {
            document.documentElement.setAttribute("data-bs-theme", "dark");
            localStorage.setItem("dark-mode", "enabled");
            darkModeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
            // Set dark background color for navbar
            navbar.classList.remove("navbar-light");
            navbar.classList.add("navbar-dark");
            navbar.classList.remove("bg-light");
            navbar.classList.add("bg-dark");
        }
    }

    // Check if dark mode is enabled
    if (darkMode === "enabled") {
        // Apply dark mode styles
        document.documentElement.setAttribute("data-bs-theme", "dark");
        darkModeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
        // Set dark background color for navbar
        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("bg-light");
        navbar.classList.add("bg-dark");
    }

    darkModeIcon.addEventListener("click", toggleDarkMode);

    const breadcrumbItems = document.querySelectorAll(
        "#breadcrumb .breadcrumb-item a"
    );

    function toggleSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const sections = document.querySelectorAll(
            ".education, .experience, .skills"
        );
        sections.forEach(function (section) {
            section.style.display = section.id === targetId ? "block" : "none";
        });
    }

    breadcrumbItems.forEach(function (item) {
        item.addEventListener("click", toggleSection);
    });

    // Display the education section by default
    const educationSection = document.getElementById("education");
    educationSection.style.display = "block";

    // Hide other sections
    const sections = document.querySelectorAll(".experience, .skills");
    sections.forEach(function (section) {
        section.style.display = "none";
    });
});
