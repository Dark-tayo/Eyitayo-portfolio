document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Dark Mode Logic
    themeToggle.addEventListener('click', () => {
        if (htmlElement.getAttribute('data-theme') === 'dark') {
            htmlElement.removeAttribute('data-theme');
            themeToggle.textContent = '🌙 Mode';
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️ Mode';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Mode';
    }
});


