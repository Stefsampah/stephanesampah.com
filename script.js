// Mobile Navigation Toggle (délégation + click + touchend pour mobile)
function toggleMobileMenu() {
    var navMenu = document.getElementById('nav-menu');
    var navToggle = document.getElementById('nav-toggle');
    if (navMenu && navToggle) {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');

    // Délégation sur document : marche même si le bouton est recouvert
    document.body.addEventListener('click', function(e) {
        if (e.target && e.target.closest && e.target.closest('#nav-toggle')) {
            e.preventDefault();
            toggleMobileMenu();
        }
    });
    document.body.addEventListener('touchend', function(e) {
        if (e.target && e.target.closest && e.target.closest('#nav-toggle')) {
            e.preventDefault();
            toggleMobileMenu();
        }
    }, { passive: false });

    // Fermer le menu au clic sur un lien
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
            var navMenu = document.getElementById('nav-menu');
            var navToggle = document.getElementById('nav-toggle');
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"], a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Check if it's a link to index.html with a hash
        if (href.includes('index.html#')) {
            const hash = href.split('#')[1];
            // If we're on index.html, scroll to section
            if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
                e.preventDefault();
                const target = document.querySelector(`#${hash}`);
                if (target) {
                    // Get navbar height
                    const navbar = document.getElementById('navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 80;
                    const offsetTop = target.offsetTop - navbarHeight;
                    window.scrollTo({
                        top: Math.max(0, offsetTop),
                        behavior: 'smooth'
                    });
                }
            }
            // Otherwise, let the browser navigate normally
        } 
        // Handle regular hash links on the same page
        else if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                // Get navbar height
                const navbar = document.getElementById('navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                const offsetTop = target.offsetTop - navbarHeight;
                window.scrollTo({
                    top: Math.max(0, offsetTop),
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Navbar background on scroll - Keep black background always
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Keep navbar black at all times (like reference site)
    if (navbar) {
        navbar.style.backgroundColor = '#000';
        navbar.style.boxShadow = currentScroll > 50 ? '0 2px 20px rgba(0, 0, 0, 0.3)' : 'none';
    }
    
    lastScroll = currentScroll;
});

// Ensure navbar is black on page load
document.addEventListener('DOMContentLoaded', () => {
    if (navbar) {
        navbar.style.backgroundColor = '#000';
    }
});

// Active navigation link on scroll (only on index.html)
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    // Only run on index.html
    if (!window.location.pathname.endsWith('index.html') && 
        window.location.pathname !== '/' && 
        !window.location.pathname.endsWith('/')) {
        return;
    }
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href === `#${current}` || href === `index.html#${current}` || href.endsWith(`#${current}`)) {
            item.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .about-text, .about-skills, .contact-form');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Form submission handler with FormSubmit
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Don't prevent default - let FormSubmit handle the submission
        // But show a loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton ? submitButton.textContent : '';
        
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Envoi en cours...';
            submitButton.style.opacity = '0.7';
            submitButton.style.cursor = 'not-allowed';
        }

        // Set the redirect URL to current page with success parameter
        const nextInput = contactForm.querySelector('input[name="_next"]');
        if (nextInput) {
            const currentUrl = window.location.href.split('?')[0];
            nextInput.value = currentUrl + '?success=true';
        }

        // The form will submit normally to FormSubmit
        // After submission, FormSubmit will redirect to the _next URL
        // We'll handle the success message on page load
    });
}

// Show success message if redirected from form submission
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4caf50;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 4px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;
        successMessage.textContent = 'Message envoyé avec succès ! Merci pour votre contact.';
        document.body.appendChild(successMessage);

        // Remove success parameter from URL
        window.history.replaceState({}, document.title, window.location.pathname);

        // Remove message after 5 seconds
        setTimeout(() => {
            successMessage.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                successMessage.remove();
            }, 300);
        }, 5000);

        // Add CSS animations
        if (!document.getElementById('form-success-styles')) {
            const style = document.createElement('style');
            style.id = 'form-success-styles';
            style.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
});

// Set current year in footer
const currentYear = new Date().getYear() + 1900;
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = currentYear;
}

// Add active state styles for navigation
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #757575;
    }
`;
document.head.appendChild(style);

// Parallax effect for home section (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const homeSection = document.querySelector('.home-section');
    if (homeSection && scrolled < window.innerHeight) {
        homeSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        homeSection.style.opacity = 1 - (scrolled / window.innerHeight) * 0.3;
    }
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Keyboard: ESC ferme le menu mobile
document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    var navMenu = document.getElementById('nav-menu');
    var navToggle = document.getElementById('nav-toggle');
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Bar Chart Animation - Adham Dannaway Style
function animateBarChart() {
    const barChart = document.querySelector('.bar-chart');
    if (!barChart) return;

    const bars = barChart.querySelectorAll('li:not(.axis)');
    const percentages = {
        'p-95': 95,
        'p-90': 90,
        'p-75': 75,
        'p-40': 40
    };

    bars.forEach((bar, index) => {
        const percentageClass = Array.from(bar.classList).find(cls => cls.startsWith('p-'));
        if (!percentageClass) return;

        const percentage = percentages[percentageClass] || 0;
        
        // Set initial state (hidden) - only if not already visible
        if (!bar.style.height || bar.style.height === '0%') {
            bar.style.visibility = 'hidden';
            bar.style.opacity = '0';
            bar.style.height = '0%';

            // Animate after a delay (like the reference site)
            setTimeout(() => {
                bar.style.visibility = 'visible';
                bar.style.opacity = '1';
                bar.style.height = percentage + '%';
            }, index * 150 + 200);
        }
    });
}

// Intersection Observer for bar chart animation
const barChartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateBarChart();
            barChartObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

// Observe bar chart section
document.addEventListener('DOMContentLoaded', () => {
    const barChartSection = document.getElementById('bar-chart');
    if (barChartSection) {
        barChartObserver.observe(barChartSection);
    }
});

// Scroll animations for About section - Adham Dannaway style
function initScrollAnimations() {
    // Animation options
    const animationOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    // Animate text-main and img-main
    const aboutMainObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const textMain = document.getElementById('text-main');
                const imgMain = document.getElementById('img-main');
                
                if (textMain) {
                    setTimeout(() => {
                        textMain.classList.add('animated');
                    }, 100);
                }
                
                if (imgMain) {
                    setTimeout(() => {
                        imgMain.classList.add('animated');
                    }, 300);
                }
                
                aboutMainObserver.unobserve(entry.target);
            }
        });
    }, animationOptions);

    const aboutMain = document.querySelector('.about-main');
    if (aboutMain) {
        aboutMainObserver.observe(aboutMain);
    }

    // Animate snaps
    const snapsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const snaps = document.getElementById('snaps');
                if (snaps) {
                    snaps.classList.add('animated');
                    
                    // Animate each snap item with delay
                    const snapItems = snaps.querySelectorAll('.snap-item');
                    snapItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animated');
                        }, index * 100 + 200);
                    });
                }
                
                snapsObserver.unobserve(entry.target);
            }
        });
    }, animationOptions);

    const snapsContainer = document.getElementById('snaps');
    if (snapsContainer) {
        snapsObserver.observe(snapsContainer);
    }

    // Animate pie chart image
    const pieChartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const imgPie = document.getElementById('img-pie');
                if (imgPie) {
                    setTimeout(() => {
                        imgPie.classList.add('animated');
                    }, 300);
                }
                
                pieChartObserver.unobserve(entry.target);
            }
        });
    }, animationOptions);

    const pieChartSection = document.querySelector('.pie-chart');
    if (pieChartSection) {
        pieChartObserver.observe(pieChartSection);
    }

    // Animate random facts image
    const randomFactsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const imgRandomFacts = document.getElementById('img-random-facts');
                if (imgRandomFacts) {
                    setTimeout(() => {
                        imgRandomFacts.classList.add('animated');
                    }, 200);
                }
                
                randomFactsObserver.unobserve(entry.target);
            }
        });
    }, animationOptions);

    const randomFactsSection = document.querySelector('.about-random-facts');
    if (randomFactsSection) {
        randomFactsObserver.observe(randomFactsSection);
    }
}

// Mobile overflow detection and fix - DIAGNOSTIC COMPLET
// Exécuter IMMÉDIATEMENT (pas besoin d'attendre DOMContentLoaded)
function detectAndFixOverflow() {
        if (window.innerWidth <= 768) {
            const viewportWidth = window.innerWidth;
            const bodyWidth = document.body.scrollWidth;
            
            // Force overflow hidden sur html et body
            document.body.style.setProperty('overflow-x', 'hidden', 'important');
            document.documentElement.style.setProperty('overflow-x', 'hidden', 'important');
            document.body.style.setProperty('width', '100%', 'important');
            document.body.style.setProperty('max-width', '100%', 'important');
            
            // Liste des éléments à vérifier
            const elementsToCheck = document.querySelectorAll('*');
            const overflowElements = [];
            
            elementsToCheck.forEach(el => {
                const rect = el.getBoundingClientRect();
                const scrollWidth = el.scrollWidth;
                const clientWidth = el.clientWidth;
                
                // Détecter les éléments qui dépassent
                if (scrollWidth > viewportWidth || rect.right > viewportWidth) {
                    overflowElements.push({
                        element: el,
                        tag: el.tagName,
                        class: el.className,
                        scrollWidth: scrollWidth,
                        clientWidth: clientWidth,
                        right: rect.right,
                        viewportWidth: viewportWidth
                    });
                    
                    // Forcer la correction
                    el.style.setProperty('overflow-x', 'hidden', 'important');
                    el.style.setProperty('width', '100%', 'important');
                    el.style.setProperty('max-width', '100%', 'important');
                    el.style.setProperty('box-sizing', 'border-box', 'important');
                }
            });
            
            // Forcer TOUTES les images à être responsive (même avec styles inline)
            const allImages = document.querySelectorAll('img');
            allImages.forEach(img => {
                // Vérifier si l'image dépasse
                const imgWidth = img.getBoundingClientRect().width;
                const naturalWidth = img.naturalWidth || imgWidth;
                
                // Toujours forcer max-width: 100% sur mobile
                img.style.setProperty('max-width', '100%', 'important');
                img.style.setProperty('width', 'auto', 'important');
                img.style.setProperty('height', 'auto', 'important');
                img.style.setProperty('box-sizing', 'border-box', 'important');
                
                // Si l'image dépasse encore, forcer width: 100%
                if (imgWidth > viewportWidth || naturalWidth > viewportWidth) {
                    img.style.setProperty('width', '100%', 'important');
                    console.warn('🖼️ Image corrigée:', img.src, 'width:', imgWidth, 'viewport:', viewportWidth);
                }
            });
            
            // Forcer les sections spécifiques - PRIORITÉ SUR .dark
            const darkSections = document.querySelectorAll('section.dark, .dark, section.dark.nopad-b, .dark.nopad-b');
            darkSections.forEach(el => {
                // Vérifier si l'élément dépasse
                const rect = el.getBoundingClientRect();
                const scrollWidth = el.scrollWidth;
                
                el.style.setProperty('overflow-x', 'hidden', 'important');
                el.style.setProperty('overflow', 'hidden', 'important');
                el.style.setProperty('width', '100%', 'important');
                el.style.setProperty('max-width', '100%', 'important');
                el.style.setProperty('margin-left', '0', 'important');
                el.style.setProperty('margin-right', '0', 'important');
                el.style.setProperty('box-sizing', 'border-box', 'important');
                el.style.setProperty('position', 'relative', 'important');
                el.style.setProperty('left', '0', 'important');
                el.style.setProperty('right', 'auto', 'important');
                el.style.setProperty('transform', 'none', 'important');
                
                // Forcer aussi sur TOUS les enfants (récursif sur les 3 premiers niveaux)
                const forceMaxWidth = (element, depth = 0) => {
                    if (depth > 3) return; // Limiter la profondeur
                    Array.from(element.children).forEach(child => {
                        child.style.setProperty('max-width', '100%', 'important');
                        child.style.setProperty('box-sizing', 'border-box', 'important');
                        forceMaxWidth(child, depth + 1);
                    });
                };
                forceMaxWidth(el);
                
                // Log si l'élément dépassait
                if (scrollWidth > viewportWidth || rect.right > viewportWidth) {
                    console.log('🔧 Section .dark corrigée:', {
                        scrollWidth: scrollWidth + 'px',
                        right: rect.right.toFixed(0) + 'px',
                        viewport: viewportWidth + 'px'
                    });
                }
            });
            
            // FORCER l'empilement vertical style Adham Dannaway
            const pieChart = document.querySelector('.pie-chart, .col-12.pie-chart');
            if (pieChart) {
                pieChart.style.setProperty('display', 'block', 'important');
                pieChart.style.setProperty('width', '100%', 'important');
                pieChart.style.setProperty('max-width', '100%', 'important');
                pieChart.style.setProperty('padding', '0', 'important');
                pieChart.style.setProperty('margin', '0 auto', 'important');
                pieChart.style.setProperty('text-align', 'center', 'important');
            }
            
            // Forcer .web-project et .coder - EXACTEMENT comme .designer d'Adham
            const webProject = document.querySelector('.web-project');
            const coder = document.querySelector('.coder');
            
            [webProject, coder].forEach(el => {
                if (el) {
                    el.style.setProperty('display', 'block', 'important');
                    el.style.setProperty('width', 'auto', 'important');
                    el.style.setProperty('max-width', '100%', 'important');
                    el.style.setProperty('margin', '0 auto 2.5rem auto', 'important');
                    el.style.setProperty('margin-left', 'auto', 'important');
                    el.style.setProperty('margin-right', 'auto', 'important');
                    el.style.setProperty('padding', '0', 'important');
                    el.style.setProperty('text-align', 'center', 'important');
                    el.style.setProperty('float', 'none', 'important');
                    el.style.setProperty('clear', 'both', 'important');
                    el.style.setProperty('position', 'relative', 'important');
                    
                    // Forcer les h2
                    const h2 = el.querySelector('h2');
                    if (h2) {
                        h2.style.setProperty('display', 'block', 'important');
                        h2.style.setProperty('width', 'auto', 'important');
                        h2.style.setProperty('margin', '0 auto 1.5rem auto', 'important');
                        h2.style.setProperty('text-align', 'center', 'important');
                    }
                    
                    // Forcer les .ul
                    const ul = el.querySelector('.ul');
                    if (ul) {
                        ul.style.setProperty('display', 'inline-block', 'important');
                        ul.style.setProperty('width', 'auto', 'important');
                        ul.style.setProperty('margin', '0 auto', 'important');
                        ul.style.setProperty('text-align', 'left', 'important');
                    }
                }
            });
            
            // Forcer #img-pie en bas
            const imgPie = document.getElementById('img-pie');
            if (imgPie) {
                imgPie.style.setProperty('display', 'block', 'important');
                imgPie.style.setProperty('position', 'relative', 'important');
                imgPie.style.setProperty('top', 'auto', 'important');
                imgPie.style.setProperty('left', 'auto', 'important');
                imgPie.style.setProperty('transform', 'none', 'important');
                imgPie.style.setProperty('margin', '2.5rem auto 0 auto', 'important');
                imgPie.style.setProperty('margin-left', 'auto', 'important');
                imgPie.style.setProperty('margin-right', 'auto', 'important');
                imgPie.style.setProperty('width', '100%', 'important');
                imgPie.style.setProperty('max-width', '300px', 'important');
                imgPie.style.setProperty('clear', 'both', 'important');
                imgPie.style.setProperty('float', 'none', 'important');
                console.log('✅ #img-pie forcé en bas');
            }
            
            // Log pour vérification
            if (pieChart && webProject && coder && imgPie) {
                console.log('✅ Layout mobile forcé (style Adham Dannaway):', {
                    pieChart: {
                        display: window.getComputedStyle(pieChart).display,
                        width: window.getComputedStyle(pieChart).width
                    },
                    webProject: {
                        display: window.getComputedStyle(webProject).display,
                        width: window.getComputedStyle(webProject).width,
                        margin: window.getComputedStyle(webProject).margin
                    },
                    coder: {
                        display: window.getComputedStyle(coder).display,
                        width: window.getComputedStyle(coder).width
                    },
                    imgPie: {
                        display: window.getComputedStyle(imgPie).display,
                        position: window.getComputedStyle(imgPie).position
                    }
                });
            }
            
            // Autres éléments critiques
            const criticalElements = document.querySelectorAll('.container, .row, .col-12, .pie-chart, .bar-chart, .web-project, .coder');
            criticalElements.forEach(el => {
                el.style.setProperty('overflow-x', 'hidden', 'important');
                el.style.setProperty('width', '100%', 'important');
                el.style.setProperty('max-width', '100%', 'important');
                el.style.setProperty('box-sizing', 'border-box', 'important');
            });
            
            // Filtrer les éléments d'extensions (ne pas les compter)
            const realOverflowElements = overflowElements.filter(item => {
                // Ignorer les éléments d'extensions Chrome (compat iOS: pas de ?.)
                var id = item.element.id;
                var cls = item.element.getAttribute ? item.element.getAttribute('class') : '';
                return !item.element.classList.contains('terminal-object') &&
                       !item.element.hasAttribute('data-v-') &&
                       !item.element.closest('[data-v-]') &&
                       !(id && typeof id === 'string' && id.indexOf('extension') !== -1) &&
                       !(cls && cls.indexOf('extension') !== -1);
            });
            
            // Log pour diagnostic
            if (bodyWidth > viewportWidth || realOverflowElements.length > 0) {
                console.group('🔍 DIAGNOSTIC OVERFLOW MOBILE');
                console.log('Viewport:', viewportWidth + 'px');
                console.log('Body width:', bodyWidth + 'px');
                console.log('Différence:', (bodyWidth - viewportWidth) + 'px');
                console.log('Éléments problématiques (réels):', realOverflowElements.length);
                
                if (realOverflowElements.length > 0) {
                    console.table(realOverflowElements.slice(0, 10).map(item => ({
                        Tag: item.tag,
                        Class: item.class || '(aucune)',
                        ID: item.element.id || '(aucun)',
                        ScrollWidth: item.scrollWidth + 'px',
                        Right: item.right.toFixed(0) + 'px',
                        Dépasse: (item.right - viewportWidth).toFixed(0) + 'px',
                        StyleInline: item.element.getAttribute('style') || '(aucun)'
                    })));
                    
                    // Afficher les éléments dans la console pour inspection
                    console.log('📋 Éléments à inspecter:');
                    realOverflowElements.slice(0, 5).forEach((item, idx) => {
                        console.log(`${idx + 1}.`, item.element);
                    });
                } else if (bodyWidth > viewportWidth) {
                    console.warn('⚠️ Overflow détecté mais aucun élément spécifique trouvé. Vérifiez:');
                    console.log('- Les images avec largeurs fixes dans le CSS');
                    console.log('- Les éléments avec position: absolute qui dépassent');
                    console.log('- Les marges négatives');
                }
                console.groupEnd();
            }
            
            // Diagnostic supplémentaire : vérifier les styles inline dans VOTRE code
            const inlineStyleElements = Array.from(document.querySelectorAll('[style]'))
                .filter(el => {
                    // Ignorer les extensions
                    return !el.classList.contains('terminal-object') &&
                           !el.hasAttribute('data-v-') &&
                           !el.closest('[data-v-]');
                })
                .filter(el => {
                    const style = el.getAttribute('style') || '';
                    // Chercher des largeurs fixes problématiques
                    const widthMatch = style.match(/width:\s*(\d+)px/i);
                    if (widthMatch && parseInt(widthMatch[1]) > 400) {
                        return true;
                    }
                    return false;
                });
            
            if (inlineStyleElements.length > 0) {
                console.group('⚠️ STYLES INLINE PROBLÉMATIQUES (dans votre code)');
                inlineStyleElements.forEach(el => {
                    console.log('Élément:', el);
                    console.log('Style:', el.getAttribute('style'));
                    console.log('---');
                });
                console.groupEnd();
            }
        }
    }
}

// Exécuter au chargement ET si DOM déjà prêt (script chargé en fin de body)
function runOnReady() {
    detectAndFixOverflow();
    initScrollAnimations();
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runOnReady);
} else {
    runOnReady();
}

window.addEventListener('resize', detectAndFixOverflow);
window.addEventListener('load', detectAndFixOverflow);
window.addEventListener('orientationchange', detectAndFixOverflow);

// Use MutationObserver to catch DOM changes (nom différent pour éviter redeclaration)
const overflowMutationObserver = new MutationObserver(() => {
    detectAndFixOverflow();
});

if (document.body) {
    overflowMutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
    });
}

// Scroll animations aussi au DOMContentLoaded si script chargé avant la fin du DOM
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
});

