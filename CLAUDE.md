# Claude Guidelines for Writer Landing Page

## Build Commands
- **Development server**: Open with live server or similar local server tools
- **Test**: Validate HTML at validator.w3.org
- **Format code**: Maintain consistent indentation (2 spaces)
- **Version control**: Use git for tracking changes

## Code Structure & Layout
- **Single-page layout** with multiple sections:
  - Hero section with typewriter animation
  - Theme selector in top-right corner
  - About section (split layout with image)
  - Services (6-card grid with hover effects)
  - Portfolio (image grid with overlays)
  - Testimonials (3-card layout)
  - Contact form (split layout)
  - Footer with social links

## Theme System
- Multiple theme files that override base style.css
- Theme switching using JavaScript with localStorage persistence
- Available themes: Default, Coral, Mint, Lavender, Midnight Dark, Oceanic Dark
- Easy to add new themes by following the pattern

## Interactive Elements
- Typewriter effect on hero section heading
- Theme selector with color swatches
- Scroll animations for cards and portfolio items
- Floating CTA button with pulse animation
- Hover effects on service cards and portfolio items

## Code Style Guidelines
- **HTML**: Semantic markup with descriptive class names and IDs
- **CSS**: Modular CSS files (base, themes, components)
- **JS**: Vanilla JavaScript with event delegation pattern
- **Naming**: Use kebab-case for CSS classes, descriptive element IDs
- **Responsive**: Mobile-first approach with grid/flex layouts
- **Assets**: Use optimized images from placeholder services until replaced