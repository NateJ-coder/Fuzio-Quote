/**
 * FUZIO PROPERTIES - QUOTE SYSTEM JAVASCRIPT
 * 
 * Handles:
 * - Multi-step form navigation
 * - Form validation
 * - Contact menu toggle
 * - Quote submission and storage
 */

// ============================================
// HOME PAGE FUNCTIONS
// ============================================

/**
 * Toggles the contact menu visibility on the home page
 */
function toggleContactMenu() {
    const contactMenu = document.getElementById('contact-menu');
    if (contactMenu) {
        contactMenu.classList.toggle('hidden');
    }
}

/**
 * Close contact menu when clicking outside
 */
document.addEventListener('DOMContentLoaded', function () {
    const contactMenu = document.getElementById('contact-menu');
    const contactBtn = document.querySelector('.btn-secondary');

    if (contactBtn && contactMenu) {
        document.addEventListener('click', function (event) {
            if (!event.target.closest('.cta-section')) {
                contactMenu.classList.add('hidden');
            }
        });
    }
});

// ============================================
// QUOTE FORM FUNCTIONS
// ============================================

let currentStep = 1;
const totalSteps = 5;

/**
 * Initialize the quote form on page load
 */
document.addEventListener('DOMContentLoaded', function () {
    const quoteForm = document.getElementById('quoteForm');
    
    if (quoteForm) {
        // Update progress bar and buttons on load
        updateProgressBar();
        updateNavigationButtons();
        
        // Add submit handler
        quoteForm.addEventListener('submit', handleFormSubmit);
        
        // Add "none" checkbox exclusivity for staffing
        addCheckboxExclusivity('staffing', 'none');
    }
});

/**
 * Navigate to the next step
 */
function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < totalSteps) {
            hideStep(currentStep);
            currentStep++;
            showStep(currentStep);
            updateProgressBar();
            updateNavigationButtons();
            scrollToTop();
        }
    }
}

/**
 * Navigate to the previous step
 */
function previousStep() {
    if (currentStep > 1) {
        hideStep(currentStep);
        currentStep--;
        showStep(currentStep);
        updateProgressBar();
        updateNavigationButtons();
        scrollToTop();
    }
}

/**
 * Show a specific step
 */
function showStep(step) {
    const stepElement = document.querySelector(`[data-step="${step}"]`);
    if (stepElement) {
        stepElement.classList.add('active');
    }
}

/**
 * Hide a specific step
 */
function hideStep(step) {
    const stepElement = document.querySelector(`[data-step="${step}"]`);
    if (stepElement) {
        stepElement.classList.remove('active');
    }
}

/**
 * Update the progress bar display
 */
function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const currentStepDisplay = document.getElementById('currentStep');
    
    if (progressFill) {
        const percentage = (currentStep / totalSteps) * 100;
        progressFill.style.width = percentage + '%';
    }
    
    if (currentStepDisplay) {
        currentStepDisplay.textContent = currentStep;
    }
}

/**
 * Update navigation button visibility
 */
function updateNavigationButtons() {
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Show/hide back button
    if (backBtn) {
        if (currentStep > 1) {
            backBtn.style.display = 'block';
        } else {
            backBtn.style.display = 'none';
        }
    }
    
    // Show/hide next and submit buttons
    if (nextBtn && submitBtn) {
        if (currentStep === totalSteps) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';
        } else {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';
        }
    }
}

/**
 * Validate the current step's required fields
 */
function validateCurrentStep() {
    const currentStepElement = document.querySelector(`[data-step="${currentStep}"]`);
    
    if (!currentStepElement) {
        return false;
    }
    
    // Get all required fields in this step
    const requiredFields = currentStepElement.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

/**
 * Validate a single field
 */
function validateField(field) {
    let isValid = true;
    
    // Remove previous error styling
    field.classList.remove('error');
    
    // Check if field is empty
    if (field.type === 'email') {
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!field.value.trim() || !emailRegex.test(field.value)) {
            isValid = false;
        }
    } else if (field.type === 'tel') {
        // Basic phone validation (must have at least 9 digits)
        const phoneRegex = /\d/g;
        const digits = field.value.match(phoneRegex);
        if (!field.value.trim() || !digits || digits.length < 9) {
            isValid = false;
        }
    } else if (field.type === 'date') {
        // Date field validation
        if (!field.value) {
            isValid = false;
        }
    } else if (field.type === 'number') {
        // Number validation
        if (field.hasAttribute('required') && (!field.value || field.value < 0)) {
            isValid = false;
        }
    } else {
        // Text/select field validation
        if (!field.value.trim()) {
            isValid = false;
        }
    }
    
    // Add error styling if invalid
    if (!isValid) {
        field.classList.add('error');
        field.focus();
    }
    
    return isValid;
}

/**
 * Handle form submission
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Final validation
    if (!validateCurrentStep()) {
        return;
    }
    
    // Collect form data
    const formData = new FormData(document.getElementById('quoteForm'));
    const quoteData = {
        timestamp: new Date().toISOString(),
        data: {}
    };
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        if (quoteData.data[key]) {
            // Handle multiple values (checkboxes)
            if (Array.isArray(quoteData.data[key])) {
                quoteData.data[key].push(value);
            } else {
                quoteData.data[key] = [quoteData.data[key], value];
            }
        } else {
            quoteData.data[key] = value;
        }
    }
    
    // Store in localStorage for demo purposes (in production, send to server)
    localStorage.setItem('latestQuote', JSON.stringify(quoteData));
    
    // Log data for debugging
    console.log('Quote Data Submitted:', quoteData);
    
    // Show success message
    showSuccessMessage();
}

/**
 * Display success message and hide form
 */
function showSuccessMessage() {
    const quoteForm = document.getElementById('quoteForm');
    const successMessage = document.getElementById('successMessage');
    
    if (quoteForm) {
        quoteForm.style.display = 'none';
    }
    
    if (successMessage) {
        successMessage.classList.remove('hidden');
    }
    
    scrollToTop();
}

/**
 * Scroll to top of page
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Add exclusive behavior to checkboxes (e.g., "none" option excludes others)
 */
function addCheckboxExclusivity(groupName, exclusiveValue) {
    const checkboxes = document.querySelectorAll(`input[name="${groupName}"]`);
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.value === exclusiveValue && this.checked) {
                // If "none" is checked, uncheck all others
                checkboxes.forEach(other => {
                    if (other.value !== exclusiveValue) {
                        other.checked = false;
                    }
                });
            } else if (this.value !== exclusiveValue && this.checked) {
                // If any other option is checked, uncheck "none"
                checkboxes.forEach(other => {
                    if (other.value === exclusiveValue) {
                        other.checked = false;
                    }
                });
            }
        });
    });
}

/**
 * Export form data for backend integration
 * Call this function to prepare data for sending to server
 */
function exportFormData() {
    const storedData = localStorage.getItem('latestQuote');
    if (storedData) {
        const quoteData = JSON.parse(storedData);
        return quoteData;
    }
    return null;
}

/**
 * Reset form to initial state
 * Call this function when user chooses to submit another quote
 */
function resetQuoteForm() {
    document.getElementById('quoteForm').reset();
    currentStep = 1;
    
    // Reset display
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    showStep(1);
    updateProgressBar();
    updateNavigationButtons();
    
    // Hide success message and show form
    const quoteForm = document.getElementById('quoteForm');
    const successMessage = document.getElementById('successMessage');
    
    if (quoteForm) {
        quoteForm.style.display = 'block';
    }
    if (successMessage) {
        successMessage.classList.add('hidden');
    }
    
    scrollToTop();
}

/**
 * Debug function - logs current form data
 * Use in browser console: debugQuoteForm()
 */
function debugQuoteForm() {
    const formData = new FormData(document.getElementById('quoteForm'));
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        if (data[key]) {
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    }
    
    console.log('Current Form Data:', data);
    return data;
}

/**
 * Add error styling to invalid fields
 */
const style = document.createElement('style');
style.textContent = `
    input.error,
    select.error {
        border-color: #E74C3C !important;
        background-color: #FFF5F5;
    }
    
    input.error:focus,
    select.error:focus {
        box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1) !important;
    }
`;
document.head.appendChild(style);

// ============================================
// ADDITIONAL ENHANCEMENTS
// ============================================

/**
 * Add character counter for long text fields (optional enhancement)
 */
function addCharacterCounter(inputId, maxLength = 500) {
    const input = document.getElementById(inputId);
    if (input) {
        const counter = document.createElement('small');
        counter.className = 'char-counter';
        counter.style.color = '#999';
        counter.style.marginTop = '4px';
        counter.style.display = 'block';
        counter.style.fontSize = '12px';
        
        input.parentNode.insertBefore(counter, input.nextSibling);
        
        input.addEventListener('input', function () {
            counter.textContent = `${this.value.length}/${maxLength} characters`;
        });
    }
}

/**
 * Pre-fill form with saved data (useful for returning users)
 */
function prefillFormFromStorage() {
    const storedData = localStorage.getItem('latestQuote');
    if (storedData) {
        try {
            const quoteData = JSON.parse(storedData);
            Object.keys(quoteData.data).forEach(key => {
                const field = document.querySelector(`[name="${key}"]`);
                if (field) {
                    if (field.type === 'checkbox') {
                        if (field.value === quoteData.data[key]) {
                            field.checked = true;
                        }
                    } else {
                        field.value = quoteData.data[key];
                    }
                }
            });
        } catch (error) {
            console.error('Error prefilling form:', error);
        }
    }
}
