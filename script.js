// Simple portfolio interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Add loading announcement for accessibility
    const announcer = document.querySelector('[aria-live="assertive"]');
    if (announcer) {
        announcer.textContent = 'Dipesh Satav portfolio has loaded';
    }
    
    // Add smooth scroll behavior for any internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add focus management for keyboard navigation
    const focusableElements = document.querySelectorAll('[tabindex="0"]');
    focusableElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            // Enhanced keyboard navigation could be added here
            if (e.key === 'Enter' || e.key === ' ') {
                if (this.tagName.toLowerCase() === 'a') {
                    this.click();
                }
            }
        });
    });
    
    // Simple fade-in animation for content
    const sections = document.querySelectorAll('section, .header');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Handle external link clicks with analytics (if needed)
document.addEventListener('click', function(e) {
    if (e.target.matches('a[target="_blank"]')) {
        // Could add analytics tracking here
        console.log('External link clicked:', e.target.href);
    }
});