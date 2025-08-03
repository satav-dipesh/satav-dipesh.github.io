// Simple interactions for the minimal website
document.addEventListener('DOMContentLoaded', function() {
    // Add subtle fade-in animation
    const content = document.querySelector('.content');
    if (content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
        content.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 200);
    }
}); 