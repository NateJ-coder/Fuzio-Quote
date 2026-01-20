# Fuzio Properties - Quote Request Website

A clean, modern HTML-based quote request website for Fuzio Properties, built with pure HTML, CSS, and minimal JavaScript.

## Project Structure

```
Fuzio Properties/
├── index.html                 # Home page
├── quote.html                 # Quote request form
├── css/
│   └── styles.css            # Main stylesheet (fully responsive)
├── js/
│   └── app.js                # Form logic and navigation
├── assets/
│   └── images/
│       └── fuzio-logo.png    # Add your Fuzio logo here
└── README.md                 # This file
```

## Getting Started

### 1. Add Your Logo

Place your Fuzio Properties logo in `assets/images/fuzio-logo.png`. The logo will automatically scale to fit properly. Recommended dimensions:
- Width: 200-400px
- Height: 100-200px
- Format: PNG with transparent background

### 2. Open the Website

Simply open `index.html` in a web browser:
- **Option 1**: Double-click `index.html`
- **Option 2**: Right-click → Open with → Your preferred browser
- **Option 3**: Use a local web server for better testing

### 3. Test the Quote Form

1. Click **"Get a Quote"** on the home page
2. Fill in the multi-step form
3. Click **"Next"** to proceed through all 5 steps
4. Submit the form on the final step
5. Review the success message

### 4. Test Contact Options

Click **"Contact Us"** to reveal:
- WhatsApp link (opens WhatsApp with pre-filled message)
- Email link (opens default email client)

---

## Features

### Home Page
- ✅ Professional header with Fuzio branding
- ✅ Clickable "Fuzio Properties" link to main website
- ✅ Eye-catching CTA buttons ("Get a Quote" & "Contact Us")
- ✅ Contact options with WhatsApp and Email
- ✅ Information section highlighting key benefits
- ✅ Fully responsive mobile design

### Quote Form
- ✅ **5-step guided questionnaire**:
  1. Basic Scheme Information
  2. Scale & Complexity (Pricing Drivers)
  3. Financial & Compliance Health
  4. Service Requirements (Add-ons)
  5. Contact Details

- ✅ **Form Features**:
  - Progress bar showing completion percentage
  - Step indicator (e.g., "Step 1 of 5")
  - Clear navigation (Next/Back/Submit buttons)
  - Form validation with error feedback
  - Checkbox exclusivity (e.g., "None" unchecks other staffing options)
  - Success confirmation message
  - Data stored in browser localStorage (for demo)

### Design
- ✅ **Brand Colors**:
  - Primary Orange: `#FF6B35`
  - Dark Charcoal: `#2C3E50`
  - White: `#FFFFFF`
  - Light Gray: `#F5F5F5`

- ✅ **Responsive Breakpoints**:
  - Mobile: < 480px
  - Tablet: 768px+
  - Desktop: 1024px+

- ✅ **Accessibility**:
  - WCAG compliance considerations
  - Focus states for keyboard navigation
  - Reduced motion support
  - High contrast mode support

---

## Customization

### Update Contact Information
Edit these lines in `index.html` and `quote.html`:

```html
<!-- WhatsApp (replace phone number) -->
<a href="https://wa.me/27606575400?text=...">

<!-- Email (replace email address) -->
<a href="mailto:admin@fuzio.co.za">
```

### Modify Brand Colors
Edit `css/styles.css`:
```css
/* Change primary orange to your preferred color */
Primary Brand Orange: #FF6B35

/* Update throughout the file or use CSS variables */
```

### Add/Remove Form Fields
Edit `quote.html` in the relevant step fieldset:
```html
<div class="form-group">
    <label for="fieldName">Field Label *</label>
    <input type="text" id="fieldName" name="fieldName" required>
</div>
```

### Adjust Form Steps
Modify `const totalSteps = 5;` in `js/app.js` if adding/removing steps.

---

## Backend Integration

The current form stores data locally using `localStorage` for demo purposes. To integrate with a backend:

### Option 1: REST API Integration

Modify the `handleFormSubmit()` function in `js/app.js`:

```javascript
function handleFormSubmit(event) {
    event.preventDefault();
    
    if (!validateCurrentStep()) return;
    
    const formData = new FormData(document.getElementById('quoteForm'));
    
    // Send to your backend
    fetch('https://your-api.com/api/quotes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        showSuccessMessage();
    })
    .catch(error => {
        console.error('Error:', error);
        // Show error message to user
    });
}
```

### Option 2: Email Submission

Use a service like:
- **Formspree** (https://formspree.io/)
- **Netlify Forms** (https://www.netlify.com/products/forms/)
- **SendGrid** (https://sendgrid.com/)

Simply change the form action:
```html
<form id="quoteForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Server-Side Processing

Host on a server with PHP, Node.js, Python, etc., and process the POST data:

```javascript
// In app.js - modify handleFormSubmit to post to your server
fetch('/process-quote.php', {
    method: 'POST',
    body: new FormData(document.getElementById('quoteForm'))
})
```

---

## JavaScript Functions Reference

### For Developers

**Export form data:**
```javascript
const quoteData = exportFormData();
console.log(quoteData);
```

**Debug current form state:**
```javascript
debugQuoteForm();
```

**Reset form:**
```javascript
resetQuoteForm();
```

**Prefill from saved data:**
```javascript
prefillFormFromStorage();
```

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## Performance

- **No external dependencies** - Pure HTML/CSS/JS
- **Lightweight** - < 50KB total
- **Fast load time** - No framework overhead
- **Mobile optimized** - Progressive enhancement

---

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Reduced motion preferences respected

---

## Security Notes

⚠️ **Important for Production:**

1. **Never expose sensitive data** in client-side code
2. **Validate all form data** on the server-side
3. **Use HTTPS** when submitting to any backend
4. **Sanitize user input** to prevent XSS attacks
5. **Implement CSRF protection** for form submissions
6. **Add rate limiting** to prevent form spam
7. **Store data securely** - don't rely on localStorage for sensitive info

---

## Troubleshooting

### Form won't submit
- Check browser console for JavaScript errors
- Verify all required fields are filled
- Ensure email format is correct (contains @)
- Verify phone number has at least 9 digits

### Logo not showing
- Verify file exists at `assets/images/fuzio-logo.png`
- Check file name capitalization
- Try a different image format (JPG, WebP)
- Open browser console and check for 404 errors

### Styling looks broken
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Verify `css/styles.css` file exists
- Check file paths in HTML files

### Form data not saving
- Check if localStorage is enabled in browser
- Verify you're not in private/incognito mode
- Check browser console for errors

---

## Future Enhancements

- [ ] Add automated email notifications
- [ ] Implement PDF quote generation
- [ ] Add multi-language support
- [ ] Create admin dashboard for reviewing quotes
- [ ] Add SMS notifications
- [ ] Implement quote templates
- [ ] Add file upload for supporting documents
- [ ] Create quote history/tracking

---

## Support & Maintenance

For questions or issues:
- Email: admin@fuzio.co.za
- WhatsApp: 060 657 5400

---

## License

© 2026 Fuzio Properties (Pty) Ltd. All rights reserved.

---

## Version History

**v1.0** (January 20, 2026)
- Initial release
- 5-step quote form with validation
- Mobile responsive design
- localStorage demo integration
