// Current language state
let currentLanguage = 'en';

// Image slideshow configuration
const profileImages = [
    'images/ruka_2.jpg',
    'images/nozomu.jpg',
    'images/rukarin.jpg',
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

// --- ナビゲーションロジック (フッター参照を削除) ---

document.addEventListener('DOMContentLoaded', function() {
    
    const allNavLinks = document.querySelectorAll('.nav-link');
    const headerNavLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-content');
    const langToggle = document.getElementById('langToggle');

    // --- 1. スムーススクロール機能 ---
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            
            const targetPage = this.getAttribute('data-page');
            updateActiveNavLinks(targetPage); // クリック直後の反応性のため

            if (targetPage === 'home') {
                startImageSlideshow();
            } else {
                stopImageSlideshow();
            }
        });
    });

    // --- 2. スクロールスパイ (IntersectionObserver) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // セクションが30%見えたらトリガー
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetPage = entry.target.id;
                updateActiveNavLinks(targetPage);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    pageSections.forEach(section => {
        observer.observe(section);
    });

    // --- 3. ナビゲーションのアクティブ状態を更新するヘルパー関数 ---
    function updateActiveNavLinks(targetPage) {
        // ヘッダーナビ
        headerNavLinks.forEach(nl => {
            if (nl.getAttribute('data-page') === targetPage) {
                nl.classList.add('active');
            } else {
                nl.classList.remove('active');
            }
        });
    }

    
    // --- (ここから下は既存の機能) ---

    // Language toggle functionality
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLanguage = currentLanguage === 'en' ? 'ja' : 'en';
            switchLanguage(currentLanguage);
            updateLanguageButton();
        });
    }

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

    // Pause slideshow when user hovers over the image
    const profilePhotoContainer = document.querySelector('.profile-photo');
    if (profilePhotoContainer) {
        profilePhotoContainer.addEventListener('mouseenter', () => {
            stopImageSlideshow();
        });

        profilePhotoContainer.addEventListener('mouseleave', () => {
            // 現在 'home' セクションがアクティブ（表示）されているかチェック
            const homeSection = document.getElementById('home');
            const navHome = document.querySelector('.nav-link[data-page="home"]');
            
            // homeセクションがアクティブな場合のみスライドショーを再開
            if (navHome && navHome.classList.contains('active')) {
                startImageSlideshow();
            }
        });
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
        img.style.zIndex = index === 0 ? '2' : '1'; 

        img.addEventListener('error', function() {
            console.warn(`Failed to load image: ${imageSrc}`);
            // Hide this image if it fails to load
            this.style.display = 'none';
        });
        profilePhotoContainer.appendChild(img);
    });

    // ★★★ 変更点: ナビゲーションドットの生成コードを削除 ★★★
    /*
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
    */
    // ★★★ 変更点ここまで ★★★
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

// ★★★ 変更点: goToImage関数を削除 (ドットからしか呼ばれないため) ★★★
/*
function goToImage(index) {
    if (index === currentImageIndex) return;
    
    currentImageIndex = index;
    updateCurrentImage();
    
    // Restart the interval to reset the timing
    if (imageInterval) {
        startImageSlideshow();
    }
}
*/
// ★★★ 変更点ここまで ★★★


function updateCurrentImage() {
    const profilePhotoContainer = document.querySelector('.profile-photo');
    if (!profilePhotoContainer) return;

    const images = profilePhotoContainer.querySelectorAll('img');
    // const dots = profilePhotoContainer.querySelectorAll('.nav-dot'); // ★★★ 変更点: 削除

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

    // ★★★ 変更点: ドット更新処理を削除 ★★★
    /*
    // Update navigation dots
    dots.forEach((dot, index) => {
        if (index === currentImageIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    */
    // ★★★ 変更点ここまで ★★★
}