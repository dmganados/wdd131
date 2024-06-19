document.addEventListener('DOMContentLoaded', function () {
    // Update the footer with the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Update the footer with the last modified date
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('show');
        hamburger.textContent = hamburger.textContent === '✖' ? '☰' : '✖';
    });
});

