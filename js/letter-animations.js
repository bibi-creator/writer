// Functions for letter hover animations

// Function to wrap existing text nodes with animated spans
function wrapLettersWithAnimation(element) {
    // Store the element's text content
    const text = element.textContent;
    
    // Remove the cursor if it exists
    const cursor = element.querySelector('.typing-cursor');
    if (cursor) cursor.remove();
    
    // Clear the element
    element.textContent = '';
    
    // Add each letter wrapped in a span with animation class
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const letter = document.createElement('span');
        letter.textContent = char;
        letter.className = getLetterClass(char, i);
        element.appendChild(letter);
    }
}

// Function to add text with animated letters
function addAnimatedText(element, text) {
    // Clear the element
    element.textContent = '';
    
    // Add each letter wrapped in a span with animation class
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const letter = document.createElement('span');
        letter.textContent = char;
        letter.className = getLetterClass(char, i);
        element.appendChild(letter);
    }
}

// Function to assign appropriate animation class to each letter
function getLetterClass(char, index) {
    // Base class for all letters
    let className = 'animated-letter';
    
    // Handle spaces
    if (char === ' ') {
        return className + ' space';
    }
    
    // Add variant based on character position
    const variant = (index % 5) + 1;
    className += ' variant-' + variant;
    
    // Make some letters special (vowels or every 7th letter)
    if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char) || index % 7 === 0) {
        className += ' special';
    }
    
    return className;
}