// Function to toggle the hamburger menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Welcome screen animation
document.addEventListener('DOMContentLoaded', function() {
    const welcomeScreen = document.querySelector('.welcome-screen');
    const words = document.querySelectorAll('.welcome-word');
    
    words.forEach((word, index) => {
        setTimeout(() => {
            word.style.animation = 'popUp 0.5s ease-out forwards';
        }, index * 500); // 500ms delay between each word
    });

    // Hide welcome screen after all words have appeared plus a bit of extra time
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
    }, words.length * 500 + 1000); // Total animation time plus 1 second
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add animation to the flip card on hover
const flipCard = document.querySelector('.flip-card');
if (flipCard) {
    flipCard.addEventListener('mouseenter', () => {
        flipCard.style.transform = 'rotateY(180deg)';
    });
    flipCard.addEventListener('mouseleave', () => {
        flipCard.style.transform = 'rotateY(0deg)';
    });
}