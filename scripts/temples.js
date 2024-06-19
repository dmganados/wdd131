// Asynchronously load Google Fonts
WebFontConfig = {
    google: { families: ['Roboto:400,700', 'Lobster'] }
};
(function(d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
})(document);

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

