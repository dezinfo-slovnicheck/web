document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animace ikonky (volitelné)
            const spans = menuToggle.querySelectorAll('span');
            if(navLinks.classList.contains('active')) {
                // Jednoduchá změna stylu při otevření
                menuToggle.style.opacity = '0.7';
            } else {
                menuToggle.style.opacity = '1';
            }
        });
    }
});