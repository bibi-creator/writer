// Theme switching functionality

document.addEventListener('DOMContentLoaded', function() {
    // Theme management
    const themeOptions = document.querySelectorAll('.theme-option');
    const head = document.querySelector('head');
    let themeLink = null;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    setTheme(savedTheme);
    
    // Highlight the active theme
    document.querySelector(`.theme-option[data-theme="${savedTheme}"]`).classList.add('active');
    
    // Add click handlers to theme options
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            
            // Remove active class from all options
            themeOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Set the theme
            setTheme(theme);
            
            // Save preference
            localStorage.setItem('selectedTheme', theme);
        });
    });
    
    // Function to set the theme
    function setTheme(theme) {
        // Remove existing theme if any
        if (themeLink) {
            themeLink.remove();
        }
        
        // Skip adding link for default theme (already in base CSS)
        if (theme !== 'default') {
            // Create new link element
            themeLink = document.createElement('link');
            themeLink.rel = 'stylesheet';
            themeLink.href = `${theme}-theme.css`;
            
            // Add to head
            head.appendChild(themeLink);
        }
    }
});