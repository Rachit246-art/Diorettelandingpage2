# Salone - Premium Salon & Beauty Studio Website

A beautiful, fully functional HTML/CSS/JavaScript website for a luxury salon and beauty studio with an elegant white and gold color scheme.

## Project Overview

This is a complete, responsive salon website built with pure HTML, CSS, and vanilla JavaScript. No frameworks required!

## Files Structure

```
├── index.html           # Main HTML structure with all 8 sections
├── styles.css          # Complete CSS styling with white/gold theme
├── script.js           # Interactive JavaScript features
└── images/            # Gallery and section images
    ├── hero-salon.jpg
    ├── service-hair.jpg
    ├── service-makeup.jpg
    ├── service-skincare.jpg
    ├── service-nails.jpg
    ├── gallery-hair-1.jpg
    ├── gallery-hair-2.jpg
    ├── gallery-hair-3.jpg
    ├── gallery-makeup-1.jpg
    ├── gallery-makeup-2.jpg
    ├── gallery-makeup-3.jpg
    ├── gallery-nails-1.jpg
    ├── gallery-nails-2.jpg
    ├── testimonial.jpg
    └── contact-salon.jpg
```

## Website Sections

### 1. Hero Section
- Large, eye-catching hero image
- Compelling headline: "Luxury Beauty Redefined"
- Subtitle and call-to-action button
- Responsive layout with text and image side-by-side

### 2. Stats Section
- **500** Happy Clients
- **15** Expert Stylists
- **25** Services Offered
- **8** Years Experience
- Features animated counter that increments on scroll
- Gradient gold background

### 3. Services Section
- 4 service cards with images:
  - Hair Services
  - Makeup Services
  - Skincare & Facial
  - Nail Art Services
- Each card has description and "Learn More" button
- Hover animation effects

### 4. Gallery Section
- **10 categorized images**:
  - Hair (3 images)
  - Makeup (3 images)
  - Nails (2 images)
- **Interactive filter buttons**: All, Hair, Makeup, Nails
- Click filters to show/hide images by category
- Image overlay with category name on hover

### 5. FAQ Section
- **6 frequently asked questions**
- Accordion-style expandable/collapsible answers
- Smooth animation when opening/closing
- Questions cover:
  - Working hours
  - Home service availability
  - Booking timeline
  - Product information
  - Cancellation policy
  - Gift cards

### 6. Testimonials Section
- Customer testimonial carousel
- 5 rotating testimonials with:
  - 5-star ratings
  - Customer quote
  - Customer name
- Auto-rotates every 5 seconds
- Manual navigation with previous/next buttons
- Customer image on the left

### 7. Contact Form Section
- Fully functional booking form with:
  - Full Name (required)
  - Email Address (required)
  - Phone Number (required)
  - Service Selection dropdown (required)
  - Preferred Date picker (required)
  - Message textarea (optional)
- Form validation:
  - Email format validation
  - Phone number validation
  - Required field checking
- Success message display after submission
- Beautiful contact image on the right

### 8. Footer
- 4 column layout:
  - SALONE branding with social icons
  - Quick Links (Services, Gallery, FAQ, Contact)
  - Contact Info (address, phone, email, hours)
  - Newsletter subscription form
- Social media icons
- Copyright information

## Color Scheme

**White & Gold Theme:**
- Primary Gold: `#D4AF70`
- Secondary Gold: `#DAA520`
- White: `#FFFFFF`
- Dark Background: `#1a1a1a` (footer)
- Light Gray: `#f5f5f5` (section backgrounds)
- Text Color: `#333`

## Interactive Features

### JavaScript Functionality

1. **Mobile Menu Toggle**
   - Hamburger menu for responsive design
   - Click to open/close navigation

2. **Stats Counter Animation**
   - Numbers increment when section comes into view
   - Smooth animation effect

3. **Gallery Filter System**
   - Click category buttons to filter images
   - Smooth show/hide transitions
   - 4 filter options: All, Hair, Makeup, Nails

4. **FAQ Accordion**
   - Click question to expand/collapse
   - Only one answer open at a time
   - Plus/minus toggle icon

5. **Testimonial Carousel**
   - Auto-rotates every 5 seconds
   - Manual navigation buttons (previous/next)
   - Smooth fade transitions

6. **Contact Form**
   - Full validation (email, phone, required fields)
   - Success/error message display
   - Form reset after submission
   - Data logged to console

7. **Newsletter Form**
   - Email validation
   - Submit handling with confirmation

8. **Smooth Scrolling**
   - All navigation links have smooth scroll behavior
   - Click nav items to smoothly scroll to sections

## Responsive Design

- **Mobile-First Approach**
- **Breakpoints:**
  - 768px: Tablet adjustments
  - 480px: Mobile optimizations
- **Features:**
  - Flexible grid layouts
  - Responsive typography
  - Mobile-friendly forms
  - Touch-friendly buttons
  - Hamburger menu for mobile

## How to Use

1. **Open the website:**
   ```bash
   # Option 1: Direct file
   open index.html
   
   # Option 2: Local server
   python3 -m http.server 8000
   # Then visit http://localhost:8000/index.html
   ```

2. **Customize content:**
   - Edit text in `index.html`
   - Replace images in `images/` folder
   - Modify colors in CSS `--primary-color` and `--secondary-color` variables

3. **Modify colors:**
   - Open `styles.css`
   - Change `:root` variables
   - All colors are centralized at the top

## Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Lightweight (no dependencies)
- Fast load times
- Optimized images
- CSS animations (hardware accelerated)
- Vanilla JavaScript (no framework overhead)

## SEO & Accessibility

- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for images
- ARIA labels where needed
- Mobile-friendly viewport meta tag
- Descriptive meta tags

## Customization Tips

### Change Color Scheme
Edit `styles.css` `:root` section:
```css
:root {
    --primary-color: #YOUR_COLOR;
    --secondary-color: #YOUR_COLOR;
    --white: #FFFFFF;
    --dark: #YOUR_COLOR;
}
```

### Update Business Info
In `index.html`:
- Change "SALONE" to your salon name
- Update address, phone, email in footer
- Update working hours
- Add social media links

### Modify Services
- Add/remove service cards in Services section
- Update service images
- Edit service descriptions

### Add More Testimonials
- Duplicate testimonial-slide div
- Update quote and author
- Add more to the rotation

### Connect Forms
To send actual emails/notifications:
- Use a backend service (Node.js, PHP, Python)
- Or use a form service like Formspree, Basin, or EmailJS
- Update form submission handling in `script.js`

## Future Enhancements

Potential additions:
- Image lightbox/modal gallery
- Appointment booking with calendar
- User authentication
- Blog section
- Payment integration
- Live chat support
- Photo upload for before/after

## License

This website is ready for use. Customize it for your salon business!

## Support

For questions or customization help, refer to the code comments in:
- `index.html` - Structure and sections
- `styles.css` - Styling and layout
- `script.js` - Interactive features

---

Built with care for Salone - Premium Salon & Beauty Studio
