window.addEventListener('DOMContentLoaded', () => {
    // Animate menu sections with staggered delays
    document.querySelectorAll('.menu-section').forEach((section, i) => {
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, 300 + i * 300);
    });
});
