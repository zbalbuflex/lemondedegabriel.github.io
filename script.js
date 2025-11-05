// ==========================================
// NAVIGATION
// ==========================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// PARTICLES ANIMATION
// ==========================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(0, 212, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.boxShadow = '0 0 10px rgba(0, 212, 255, 0.8)';

        particlesContainer.appendChild(particle);
    }
}

// Initialize particles on load
createParticles();

// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ==========================================
// BUTTERFLY ANIMATION
// ==========================================

const butterfly = document.querySelector('.butterfly');
if (butterfly) {
    let mouseX = 0;
    let mouseY = 0;
    let butterflyX = 0;
    let butterflyY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
    });

    function animateButterfly() {
        butterflyX += (mouseX - butterflyX) * 0.05;
        butterflyY += (mouseY - butterflyY) * 0.05;

        butterfly.style.transform = `translate(${butterflyX}px, ${butterflyY}px) rotate(${butterflyX * 0.5}deg)`;

        requestAnimationFrame(animateButterfly);
    }

    animateButterfly();
}

// ==========================================
// PARALLAX EFFECT
// ==========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-background');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==========================================
// SONG CARDS HOVER EFFECT
// ==========================================

const songCards = document.querySelectorAll('.song-card');

songCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(0, 212, 255, 0.1)';
    });

    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('highlight-song')) {
            this.style.background = 'rgba(255, 255, 255, 0.03)';
        } else {
            this.style.background = 'rgba(255, 0, 110, 0.1)';
        }
    });
});

// ==========================================
// DYNAMIC GRADIENT BACKGROUND
// ==========================================

function createGradientAnimation() {
    const hero = document.querySelector('.hero-background');
    if (!hero) return;

    let hue = 200;

    setInterval(() => {
        hue = (hue + 1) % 360;
        const color1 = `hsl(${hue}, 70%, 15%)`;
        const color2 = `hsl(${(hue + 60) % 360}, 70%, 20%)`;
        const color3 = `hsl(${(hue + 120) % 360}, 70%, 15%)`;

        hero.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`;
    }, 100);
}

// ==========================================
// LOADING ANIMATION
// ==========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0, 212, 255, 0.4);
    `;

    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'scale(1.1) translateY(-3px)';
        scrollBtn.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.6)';
    });

    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'scale(1) translateY(0)';
        scrollBtn.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.4)';
    });
}

createScrollToTopButton();

// ==========================================
// CURSOR TRAIL EFFECT
// ==========================================

class CursorTrail {
    constructor() {
        this.trails = [];
        this.maxTrails = 10;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.createTrail(e.clientX, e.clientY);
        });
    }

    createTrail(x, y) {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, rgba(0, 212, 255, 0.8) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
            transform: translate(-50%, -50%);
            z-index: 9999;
            animation: trailFade 0.8s ease-out forwards;
        `;

        document.body.appendChild(trail);

        this.trails.push(trail);

        if (this.trails.length > this.maxTrails) {
            const oldTrail = this.trails.shift();
            oldTrail.remove();
        }

        setTimeout(() => {
            trail.remove();
        }, 800);
    }
}

// Add trail fade animation
const style = document.createElement('style');
style.textContent = `
    @keyframes trailFade {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
        }
    }
`;
document.head.appendChild(style);

// Initialize cursor trail on desktop only
if (window.innerWidth > 968) {
    new CursorTrail();
}

// ==========================================
// TYPING EFFECT FOR HERO TAGLINE
// ==========================================

function typeWriter(element, text, speed = 50) {
    if (!element) return;

    element.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    setTimeout(type, 1000);
}

const heroTagline = document.querySelector('.hero-tagline');
if (heroTagline) {
    const originalText = heroTagline.textContent;
    typeWriter(heroTagline, originalText, 30);
}

// ==========================================
// SECTION COUNTER ANIMATION
// ==========================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }

    updateCounter();
}

// ==========================================
// EASTER EGG - Konami Code
// ==========================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiPattern.join('')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    const butterflies = document.querySelectorAll('.butterfly, .butterfly-symbol svg');
    butterflies.forEach(butterfly => {
        butterfly.style.animation = 'spin 2s linear infinite';
    });

    const spinAnimation = document.createElement('style');
    spinAnimation.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinAnimation);

    setTimeout(() => {
        butterflies.forEach(butterfly => {
            butterfly.style.animation = '';
        });
    }, 5000);
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScroll = debounce(() => {
    // Your scroll logic here
}, 10);

window.addEventListener('scroll', optimizedScroll);

// ==========================================
// ACCESSIBILITY IMPROVEMENTS
// ==========================================

// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#synopsis';
skipLink.textContent = 'Aller au contenu principal';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: var(--dark-bg);
    padding: 8px;
    text-decoration: none;
    z-index: 10000;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.prepend(skipLink);

// ==========================================
// RESPONSIVE VIDEO EMBEDS
// ==========================================

function makeVideosResponsive() {
    const videos = document.querySelectorAll('iframe, video');
    videos.forEach(video => {
        const wrapper = document.createElement('div');
        wrapper.style.cssText = `
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
        `;
        video.parentNode.insertBefore(wrapper, video);
        wrapper.appendChild(video);
        video.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        `;
    });
}

makeVideosResponsive();

// ==========================================
// INITIALIZE ALL ANIMATIONS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎭 Le Monde de Gabriel - Site initialisé avec succès!');

    // Add initial fade-in to all sections
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((element, index) => {
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
            }, index * 50);
        });
    }, 100);
});

// ==========================================
// PRELOAD IMAGES
// ==========================================

function preloadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

preloadImages();

console.log('✨ Animations et interactivité chargées - Prêt à explorer Le Monde de Gabriel!');