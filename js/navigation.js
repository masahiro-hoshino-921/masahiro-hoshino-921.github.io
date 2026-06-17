// Current language state
let currentLanguage = 'en';

// Image slideshow configuration
const profileImages = [
    'images/hama.jpg',
    'images/ruka.jpeg',
    'images/nozomu.jpg',
    'images/rukarin.jpg',
    'images/harumaki.jpg',
    'images/marimo.jpg',
    'images/ruka_2.jpeg',
    'images/ichigo.jpg',
    'images/keiko.jpg',
    'images/mametaro.jpg',
    'images/karin.jpeg',
    // Add more image paths as needed
];

let currentImageIndex = 0;
let imageInterval;
const IMAGE_CHANGE_INTERVAL = 4000; // 4 seconds

// --- ナビゲーションロジック ---

document.addEventListener('DOMContentLoaded', function () {

    const allNavLinks = document.querySelectorAll('.nav-link');
    const headerNavLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const pageSections = document.querySelectorAll('.page-content');
    const langToggle = document.getElementById('langToggle');
    const profilePhotoContainer = document.querySelector('.profile-photo');
    const mainTitle = document.getElementById('mainTitle'); // ★ <h1>タグのIDを取得

    // --- Hamburger menu ---
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');

    if (hamburgerBtn && mobileDrawer) {
        hamburgerBtn.addEventListener('click', function () {
            hamburgerBtn.classList.toggle('active');
            mobileDrawer.classList.toggle('open');
        });

        // Close drawer when a mobile nav link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                hamburgerBtn.classList.remove('active');
                mobileDrawer.classList.remove('open');

                const targetId = this.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }

                const targetPage = this.getAttribute('data-page');
                updateActiveNavLinks(targetPage);

                if (targetPage === 'home') {
                    startImageSlideshow();
                } else {
                    stopImageSlideshow();
                }
            });
        });

        // Close drawer when clicking outside
        document.addEventListener('click', function (e) {
            if (!hamburgerBtn.contains(e.target) && !mobileDrawer.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                mobileDrawer.classList.remove('open');
            }
        });
    }

    // --- 1. スムーススクロール機能 ---
    allNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
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

    // --- 4. タイトルクリックでトップへ戻る機能 ---
    if (mainTitle) {
        mainTitle.style.cursor = 'pointer'; // カーソルを変更
        mainTitle.addEventListener('click', function (e) {
            e.preventDefault();
            const homeElement = document.getElementById('home');
            if (homeElement) {
                homeElement.scrollIntoView({
                    behavior: 'smooth'
                });
                updateActiveNavLinks('home'); // ナビゲーションをHomeに更新
                startImageSlideshow(); // スライドショーを再開
            }
        });
    }

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
        // モバイルナビ
        mobileNavLinks.forEach(nl => {
            if (nl.getAttribute('data-page') === targetPage) {
                nl.classList.add('active');
            } else {
                nl.classList.remove('active');
            }
        });
    }


    // --- 言語切り替え機能 (既存) ---

    // Language toggle functionality
    if (langToggle) {
        langToggle.addEventListener('click', function () {
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

        // Re-render presentations to apply language filter
        if (typeof generatePresentationsHTML === 'function') {
            generatePresentationsHTML();
        }
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

    // --- 画像スライドショーの操作性向上 ---
    if (profilePhotoContainer) {
        profilePhotoContainer.style.cursor = 'pointer'; // クリック可能なことを示すカーソル

        // 画像をクリックして次の画像に切り替える機能を追加
        profilePhotoContainer.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % profileImages.length;
            updateCurrentImage();
            // クリックで手動で切り替えた後、自動スライドショーのタイミングをリセット
            if (imageInterval) {
                startImageSlideshow();
            }
        });

        // Pause slideshow when user hovers over the image (既存)
        profilePhotoContainer.addEventListener('mouseenter', () => {
            stopImageSlideshow();
        });

        profilePhotoContainer.addEventListener('mouseleave', () => {
            // 現在 'home' セクションがアクティブ（表示）されているかチェック
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

    // Create image elements (now wrapped in <picture>)
    profileImages.forEach((imageSrc, index) => {
        const picture = document.createElement('picture');

        // WebP形式の <source> タグを推奨 (WebP画像が用意できている場合)
        // const webpSource = document.createElement('source');
        // webpSource.srcset = imageSrc.replace(/\.(jpe?g|png)$/i, '.webp'); // 拡張子をWebPに置換
        // webpSource.type = 'image/webp';
        // picture.appendChild(webpSource);

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Profile photo ${index + 1}`;
        img.setAttribute('loading', 'lazy'); // 遅延読み込み

        // 最初の画像のみ表示、残りは非表示
        img.style.opacity = index === 0 ? '1' : '0';
        img.style.zIndex = index === 0 ? '2' : '1';
        img.style.transition = 'opacity 0.5s ease-in-out'; // フェードイン/アウトの追加

        img.addEventListener('error', function () {
            console.warn(`Failed to load image: ${imageSrc}`);
            // Hide this image if it fails to load
            picture.style.display = 'none';
        });

        picture.appendChild(img);
        profilePhotoContainer.appendChild(picture);
    });

    // ナビゲーションドットの生成コードは削除
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

function updateCurrentImage() {
    const profilePhotoContainer = document.querySelector('.profile-photo');
    if (!profilePhotoContainer) return;

    // 画像は <picture> タグの中にあるため、<picture> から <img> を探す
    const pictures = profilePhotoContainer.querySelectorAll('picture');

    pictures.forEach((picture, index) => {
        const img = picture.querySelector('img');
        if (!img) return;

        if (index === currentImageIndex) {
            img.style.opacity = '1';
            img.style.zIndex = '2';
        } else {
            img.style.opacity = '0';
            img.style.zIndex = '1';
        }
    });

    // ナビゲーションドット更新処理は削除
}