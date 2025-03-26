// Typewriter effect for hero section
function initTypewriter() {
    // Get elements
    const label = document.getElementById('label');
    const heading = document.getElementById('typewriter-heading');
    const paragraph = document.getElementById('typewriter-paragraph');
    const ctaButton = document.getElementById('cta-button');
    
    // Store original text content
    const headingText = "Crafting Words That Inspire, Engage & Convert";
    const paragraphText = "I combine strategic thinking with compelling storytelling to create content that resonates with your audience and drives measurable results for your business.";
    
    // Clear text content
    heading.textContent = '';
    paragraph.textContent = '';
    
    // Make elements visible to begin with
    heading.style.opacity = '1';
    
    // Delay before starting animation
    setTimeout(() => {
        // Fade in label first
        label.classList.add('fade-in');
        
        // Start typing heading after label appears
        setTimeout(() => {
            typeText(heading, headingText, 70, () => {
                // After heading completes, process each letter for animations
                wrapLettersWithAnimation(heading);
                
                // Show paragraph with animated letters
                setTimeout(() => {
                    // Add paragraph content with animated letters
                    addAnimatedText(paragraph, paragraphText);
                    paragraph.classList.add('fade-in');
                    
                    // After paragraph fades in, show CTA button
                    setTimeout(() => {
                        ctaButton.classList.add('fade-in');
                        
                        // Dispatch event that typewriter animation is complete
                        document.dispatchEvent(new CustomEvent('typewriterComplete'));
                        console.log('Dispatched typewriterComplete event');
                    }, 500);
                }, 400);
            });
        }, 500);
    }, 500);
}

// Function to type text without sounds to avoid errors
function typeText(element, text, speed, callback) {
    // Create cursor element
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    element.appendChild(cursor);
    
    let i = 0;
    
    // Type function that adds one character at a time
    function type() {
        if (i < text.length) {
            // Add one character at a time before cursor
            element.insertBefore(document.createTextNode(text.charAt(i)), cursor);
            i++;
            
            // Random speed variation for natural feel
            const randomDelay = speed + (Math.random() * 40 - 20);
            setTimeout(type, randomDelay);
        } else {
            // Keep cursor blinking when done
            if (callback) callback();
        }
    }
    
    // Start typing
    type();
}

// Initialize typewriter effect when document is ready
document.addEventListener('DOMContentLoaded', function() {
    initTypewriter();
});