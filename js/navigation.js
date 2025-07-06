// Current language state
let currentLanguage = 'en';

// Image slideshow configuration
const profileImages = [
    'images/nozomu.jpg',
    'images/harumaki.jpg',
    'images/marimo.jpg',
    'images/ruka.jpg',
    'images/ichigo.jpg',
    'images/keiko.jpg'
    // Add more image paths as needed
];

let currentImageIndex = 0;
let imageInterval;
const IMAGE_CHANGE_INTERVAL = 4000; // 4 seconds

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

            // Start/stop slideshow based on page
            if (targetPage === 'home') {
                startImageSlideshow();
            } else {
                stopImageSlideshow();
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

            // Start/stop slideshow based on page
            if (targetPage === 'home') {
                startImageSlideshow();
            } else {
                stopImageSlideshow();
            }
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
                // HTMLタグが含まれているかチェック
                if (text.includes('<') && text.includes('>')) {
                    element.innerHTML = text;
                } else if (element.innerHTML.includes('&copy;')) {
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

    // ★ 初期化時に言語切り替えを実行してHTMLタグを適用
    switchLanguage(currentLanguage);
    updateLanguageButton();

    // Initialize image slideshow
    initializeImageSlideshow();
    
    // Start slideshow if on home page
    const homePage = document.getElementById('home');
    if (homePage && homePage.classList.contains('active')) {
        startImageSlideshow();
    }

});

// Image slideshow functionality
function initializeImageSlideshow() {
    const profilePhotoContainer = document.querySelector('.profile-photo');
    if (!profilePhotoContainer) {
        console.warn('Profile photo container not found');
        return;
    }

    // Clear existing content
    profilePhotoContainer.innerHTML = '';

    // Create images
    profileImages.forEach((imageSrc, index) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Profile photo ${index + 1}`;
        img.style.opacity = index === 0 ? '1' : '0';
        img.addEventListener('error', function() {
            console.warn(`Failed to load image: ${imageSrc}`);
            // Hide this image if it fails to load
            this.style.display = 'none';
        });
        profilePhotoContainer.appendChild(img);
    });

    // Create navigation dots
    if (profileImages.length > 1) {
        const navContainer = document.createElement('div');
        navContainer.className = 'image-nav';

        profileImages.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `nav-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToImage(index));
            navContainer.appendChild(dot);
        });

        profilePhotoContainer.appendChild(navContainer);
    }
}

function startImageSlideshow() {
    if (profileImages.length <= 1) return;
    
    stopImageSlideshow(); // Clear any existing interval
    
    imageInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % profileImages.length;
        updateCurrentImage();
    }, IMAGE_CHANGE_INTERVAL);
}

function stopImageSlideshow() {
    if (imageInterval) {
        clearInterval(imageInterval);
        imageInterval = null;
    }
}

function goToImage(index) {
    if (index === currentImageIndex) return;
    
    currentImageIndex = index;
    updateCurrentImage();
    
    // Restart the interval to reset the timing
    if (imageInterval) {
        startImageSlideshow();
    }
}

function updateCurrentImage() {
    const profilePhotoContainer = document.querySelector('.profile-photo');
    if (!profilePhotoContainer) return;

    const images = profilePhotoContainer.querySelectorAll('img');
    const dots = profilePhotoContainer.querySelectorAll('.nav-dot');

    // Update images
    images.forEach((img, index) => {
        if (index === currentImageIndex) {
            img.style.opacity = '1';
            img.style.zIndex = '2';
        } else {
            img.style.opacity = '0';
            img.style.zIndex = '1';
        }
    });

    // Update navigation dots
    dots.forEach((dot, index) => {
        if (index === currentImageIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Pause slideshow when user hovers over the image
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const profilePhotoContainer = document.querySelector('.profile-photo');
        if (profilePhotoContainer) {
            profilePhotoContainer.addEventListener('mouseenter', () => {
                stopImageSlideshow();
            });

            profilePhotoContainer.addEventListener('mouseleave', () => {
                const homePage = document.getElementById('home');
                if (homePage && homePage.classList.contains('active')) {
                    startImageSlideshow();
                }
            });
        }
    }, 500);
});