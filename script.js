// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation observer for product cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all product cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Add click event to WhatsApp buttons for analytics (optional)
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('WhatsApp button clicked');
            // You can add Google Analytics or other tracking here
        });
    });

    // Add click event to Instagram buttons for analytics (optional)
    const instagramButtons = document.querySelectorAll('.btn-instagram');
    instagramButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Instagram button clicked');
            // You can add Google Analytics or other tracking here
        });
    });

    // Add hover effect enhancement for product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });

    // Parallax effect for hero section (subtle)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Preload Google Fonts
const preloadFont = () => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.gstatic.com';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
};

preloadFont();

// Add click tracking for product cards (optional - for future analytics)
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const productTitle = card.querySelector('.product-title').textContent;
            console.log(`Product clicked: ${productTitle} (Card ${index + 1})`);
            // You can add Google Analytics or other tracking here
        });
    });
});

// Prevent animation replay on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('Window resized');
    }, 250);
});