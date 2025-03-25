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
    const mainContent = document.querySelector('.main-content');
    
    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
        // First visit in this session - show animation
        welcomeScreen.classList.remove('hidden');
        mainContent.classList.add('fade-out');
        words.forEach((word, index) => {
            setTimeout(() => {
                word.style.animation = 'popUp 0.5s ease-out forwards';
            }, index * 500); // 500ms delay between each word
        });

        // Hide welcome screen after all words have appeared 
        setTimeout(() => {
            welcomeScreen.classList.add('hidden');
            // Wait for welcome screen to fade out before showing main content
            setTimeout(() => {
                mainContent.classList.remove('fade-out');
                // Set the flag in sessionStorage
                sessionStorage.setItem('hasVisited', 'true');
            }, 500); 
        }, words.length * 500 + 1000); 
    } else {
        // Not first visit - hide welcome screen immediately
        welcomeScreen.classList.add('hidden');
        mainContent.classList.remove('fade-out');
    }
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


// Intersection Observer for scroll animations
const sections = document.querySelectorAll("section");

const observerOptions = {
  threshold: 0.1, // Trigger when 10% of the section is in the viewport
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate"); // Add the 'animate' class
    } else {
      entry.target.classList.remove("animate"); // Remove the 'animate' class when out of view
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});


// Animation to the flip card on hover
const flipCard = document.querySelector('.flip-card');
if (flipCard) {
    flipCard.addEventListener('mouseenter', () => {
        flipCard.style.transform = 'rotateY(180deg)';
    });
    flipCard.addEventListener('mouseleave', () => {
        flipCard.style.transform = 'rotateY(0deg)';
    });
}

// Typing and deleting effect for the name "Chikwanda Chisha"
const nameElement = document.getElementById('animated-name');
const nameText = "Chikwanda Chisha";
let currentIndex = 0;
let isDeleting = false;

function animateName() {
    const displayText = nameText.slice(0, currentIndex);
    // Use non-breaking spaces to maintain consistent width
    const spaces = '\u00A0'.repeat(nameText.length - displayText.length);
    nameElement.textContent = displayText + spaces;

    if (!isDeleting && currentIndex <= nameText.length) {
        currentIndex++;
    } else if (isDeleting && currentIndex > 0) {
        currentIndex--;
    }

    if (currentIndex === nameText.length + 1) {
        setTimeout(() => isDeleting = true, 1000); // Pause before deleting
    } else if (currentIndex === 0) {
        isDeleting = false;
    }

    const typingSpeed = isDeleting ? 20 : 80;
    setTimeout(animateName, typingSpeed);
}

// Start the name animation when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateName();
});
