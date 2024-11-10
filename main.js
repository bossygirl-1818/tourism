// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add 'visible' class to each section for transitions when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('visible');
    });
});

// Adding event listener for hovering effect on the hero section
const hero = document.querySelector('.hero');

// Mouse enter and leave effect for the hero section
hero.addEventListener('mouseenter', () => {
    // Trigger background transition on mouse enter
    hero.style.transition = 'background 0.5s ease-out, background-color 0.5s ease-out';
    hero.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Change background color for hover effect
});

hero.addEventListener('mouseleave', () => {
    // Reset background color and transition on mouse leave
    hero.style.transition = 'background 0.5s ease-in, background-color 0.5s ease-in';
    hero.style.backgroundColor = 'transparent'; // Reset to original background
});

// Hover effect for images in the #activities section
document.querySelectorAll('#activities img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transition = 'transform 0.3s ease-in-out, opacity 0.5s ease-in-out';
        img.style.transform = 'scale(1.05)';
        img.style.opacity = '1';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transition = 'transform 0.3s ease-in-out, opacity 0.5s ease-in-out';
        img.style.transform = 'scale(1)';
        img.style.opacity = '0.9';
    });
});

// Optional: Fade-in effect for section visibility when scrolling
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.visible');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('fade-in');
        } else {
            section.classList.remove('fade-in');
        }
    });
});
