document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";
    
    document.body.classList.add(currentTheme + "-mode");
    themeToggle.textContent = currentTheme === "dark" ? "☀️ Mode clair" : "🌙 Mode sombre";

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");

        const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        themeToggle.textContent = newTheme === "dark" ? "☀️ Mode clair" : "🌙 Mode sombre";
    });
});
