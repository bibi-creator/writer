// Sound effects for letter hover interactions

// Global variables for audio context
let audioContext;
let isSoundEnabled = false;

// Add hover sound effects for letters
function setupLetterSoundEffects() {
    // Try to initialize audio only on first user interaction
    document.addEventListener('click', function initAudio() {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            isSoundEnabled = true;
            document.removeEventListener('click', initAudio);
            
            // Once audio is initialized, ensure the event listeners are attached
            attachSoundToLetters();
            
            console.log('Audio initialized successfully');
        } catch (e) {
            console.log('Web Audio API not supported in this browser');
        }
    }, { once: true });
    
    // Also set up a mutation observer to watch for new letters being added
    setupMutationObserver();
}

// Setup mutation observer to detect when new letters are added
function setupMutationObserver() {
    // Create a new observer
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                // Check if any new letter spans have been added
                const newLetters = document.querySelectorAll('.animated-letter:not([data-sound-initialized])');
                if (newLetters.length > 0) {
                    attachSoundToLetters(newLetters);
                }
            }
        });
    });
    
    // Start observing the hero content for changes
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        observer.observe(heroContent, { childList: true, subtree: true });
    }
}

// Function to attach sound events to letters
function attachSoundToLetters(letters) {
    // If no specific letters are provided, get all uninitiated letters
    if (!letters) {
        letters = document.querySelectorAll('.animated-letter:not([data-sound-initialized])');
    }
    
    console.log(`Attaching sound to ${letters.length} letters`);
    
    // Add event listeners to the letters
    letters.forEach((letter, index) => {
        // Skip spaces
        if (letter.classList.contains('space')) return;
        
        // Mark as initialized to avoid duplicate handlers
        letter.setAttribute('data-sound-initialized', 'true');
        
        letter.addEventListener('mouseenter', () => {
            if (!isSoundEnabled || !audioContext) return;
            
            try {
                // Create oscillator
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                // Set properties based on letter
                const isVowel = letter.textContent.match(/[aeiouAEIOU]/);
                const isSpecial = letter.classList.contains('special');
                
                // Generate different pitches for different types of letters
                const baseFreq = 220 + (index % 24) * 20;
                oscillator.type = isVowel ? 'sine' : 'triangle';
                oscillator.frequency.value = isSpecial ? baseFreq * 1.5 : baseFreq;
                
                // Very quiet volume
                gainNode.gain.value = 0.05;
                
                // Connect and start
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.start();
                
                // Short duration
                gainNode.gain.exponentialRampToValueAtTime(
                    0.001, audioContext.currentTime + 0.2
                );
                
                // Stop after 0.3 seconds
                setTimeout(() => {
                    oscillator.stop();
                }, 200);
            } catch (e) {
                // Silently fail - never break the user experience for sound
                console.log('Sound effect failed', e);
            }
        });
    });
}

// Custom event for when typewriter effect completes
document.addEventListener('typewriterComplete', function() {
    console.log('Typewriter effect complete, setting up sounds');
    // Once typewriter is done, make sure sounds are attached
    attachSoundToLetters();
});

// Initialize sound effects when document is ready
document.addEventListener('DOMContentLoaded', function() {
    setupLetterSoundEffects();
    
    // Add a backup timer to check for letters - in case the custom event isn't triggered
    setTimeout(attachSoundToLetters, 5000);
});