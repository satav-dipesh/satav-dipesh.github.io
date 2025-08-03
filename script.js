// Portfolio interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Add loading announcement for accessibility
    const announcer = document.querySelector('[aria-live="assertive"]');
    if (announcer) {
        announcer.textContent = 'Dipesh Satav portfolio has loaded';
    }
    
    // Handle division clicks
    const divisions = document.querySelectorAll('.division');
    divisions.forEach(division => {
        division.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page) {
                window.location.href = `${page}.html`;
            }
        });
        
        // Add keyboard support
        division.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Make divisions focusable
        division.setAttribute('tabindex', '0');
    });
    
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
    
    // Simple fade-in animation for content
    divisions.forEach((division, index) => {
        division.style.opacity = '0';
        division.style.transform = 'translateY(20px)';
        division.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            division.style.opacity = '1';
            division.style.transform = 'translateY(0)';
        }, index * 150);
    });
});

// Handle external link clicks with analytics (if needed)
document.addEventListener('click', function(e) {
    if (e.target.matches('a[target="_blank"]')) {
        console.log('External link clicked:', e.target.href);
    }
});