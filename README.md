# Content Writer Landing Page

A customizable landing page for professional content writers. The page features a modern design with animated elements and responsive layout.

## Features

- Responsive design that works on all devices
- Animated sections with scroll effects
- Interactive theme selector with multiple themes
- Typewriter text effect with sound in the hero section
- Contact form 
- Portfolio showcase
- Testimonials section

## Theme System

The landing page includes a theme system with an interactive theme selector in the header. Users can switch between different color schemes, and their preference is saved in localStorage for future visits.

### Available Themes

#### Light Themes
- **Default**: Blue/purple theme
- **Coral**: Coral pink, bright orange, and deep plum
- **Mint**: Teal, mint green, and mustard yellow
- **Lavender**: Purple, lavender, and amber

#### Dark Themes
- **Midnight**: Black, dark blue, and bright red accents
- **Oceanic Dark**: Dark blue, teal, and amber accents

### How to Create a New Theme

1. Create a new CSS file named `[theme-name]-theme.css`
2. Use the template below, changing the color variables:

```css
:root {
    --primary: #YOUR_COLOR;
    --secondary: #YOUR_COLOR;
    --accent: #YOUR_COLOR;
    --light: #YOUR_COLOR;
    --dark: #YOUR_COLOR;
    --text: #YOUR_COLOR;
    --text-light: #YOUR_COLOR;
}

/* Update any specific elements as needed */
```

3. Add a new theme option to the theme selector in `index.html`:

```html
<div class="theme-option theme-[name]" data-theme="[name]" title="[Name] Theme"></div>
```

4. Add the corresponding style to `theme-selector.css`:

```css
.theme-[name] {
    background: linear-gradient(135deg, [primary-color] 0%, [secondary-color] 100%);
}
```

## Customization

- Update the placeholder text and images in `index.html`
- Modify sections by adding or removing content
- Change the fonts by updating the Google Fonts link in the head section
- Add custom JavaScript for additional functionality

## License

This template is available for personal and commercial use.