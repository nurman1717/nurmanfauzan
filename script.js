const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide = () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
};

burger.addEventListener('click', navSlide);

// Close nav when a link is clicked (for smoother mobile experience)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            navSlide(); // Close the nav
        }
    });
});

// Basic form submission handling (can be expanded for actual backend)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
        // In a real application, you'd send this data to a server
        contactForm.reset(); // Clear the form
    } else {
        alert('Mohon lengkapi semua kolom formulir.');
    }
});