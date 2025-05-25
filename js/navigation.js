// Current language state
let currentLanguage = 'en';

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageContents = document.querySelectorAll('.page-content');
    const langToggle = document.getElementById('langToggle');

    // Navigation tab switching
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav links
            navLinks.forEach(nl => nl.classList.remove('active'));
            
            // Add active class to clicked nav link
            this.classList.add('active');
            
            // Hide all page contents
            pageContents.forEach(pc => pc.classList.remove('active'));
            
            // Show selected page content
            const targetPage = this.getAttribute('data-page');
            document.getElementById(targetPage).classList.add('active');

            // Update footer nav active state
            footerNavLinks.forEach(fnl => fnl.classList.remove('active'));
            const correspondingFooterLink = document.querySelector(`.footer-nav-link[data-page="${targetPage}"]`);
            if (correspondingFooterLink) {
                correspondingFooterLink.classList.add('active');
            }
        });
    });
    // Footer navigation functionality
    const footerNavLinks = document.querySelectorAll('.footer-nav-link');

    footerNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        
            // Remove active class from all nav links (header and footer)
            navLinks.forEach(nl => nl.classList.remove('active'));
            footerNavLinks.forEach(fnl => fnl.classList.remove('active'));
            
            // Add active class to clicked footer nav link
            this.classList.add('active');
            
            // Find corresponding header nav link and activate it
            const targetPage = this.getAttribute('data-page');
            const correspondingHeaderLink = document.querySelector(`.nav-link[data-page="${targetPage}"]`);
            if (correspondingHeaderLink) {
                correspondingHeaderLink.classList.add('active');
            }
            
            // Hide all page contents
            pageContents.forEach(pc => pc.classList.remove('active'));
            
            // Show selected page content
            document.getElementById(targetPage).classList.add('active');
        });
    });
    
    // Language toggle functionality
    langToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'ja' : 'en';
        switchLanguage(currentLanguage);
        updateLanguageButton();
    });

    function switchLanguage(lang) {
        const elements = document.querySelectorAll('[data-en][data-ja]');
        elements.forEach(element => {
            const text = element.getAttribute('data-' + lang);
            if (text) {
                if (element.innerHTML.includes('&copy;')) {
                    element.innerHTML = text;
                } else {
                    element.textContent = text;
                }
            }
        });
    }

    function updateLanguageButton() {
        const langCurrent = document.querySelector('.lang-current');
        const langOther = document.querySelector('.lang-other');
        
        if (currentLanguage === 'en') {
            langCurrent.textContent = 'EN';
            langOther.textContent = 'JA';
        } else {
            langCurrent.textContent = 'JA';
            langOther.textContent = 'EN';
        }
    }
});