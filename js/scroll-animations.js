// Scroll animations for elements

document.addEventListener('DOMContentLoaded', function() {
    // Floating CTA button click handler
    document.querySelector('.floating-cta').addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Animation on scroll functionality
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load to handle elements already in view
    animateOnScroll();
});