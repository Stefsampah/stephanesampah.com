// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });
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
        
        // Animate navbar on scroll
        if (currentScroll > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    lastScroll = currentScroll;
});

// Ensure navbar is black on page load
document.addEventListener('DOMContentLoaded', () => {
    if (navbar) {
        navbar.style.backgroundColor = '#000';
        // Animate navbar on load
        setTimeout(() => {
            navbar.classList.add('animated');
        }, 100);
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

// Form submission handler - FormSubmit handles submission automatically
// We just add a success message if redirected back with success parameter
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    // Check if form was submitted successfully (redirected back)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        // Show success message
        setTimeout(() => {
            alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }, 100);
    }
    
    // Optional: Add loading state on submit
    contactForm.addEventListener('submit', () => {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;
        }
    });
}

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

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
    }
});

// Prevent scroll when mobile menu is open (optional)
let isMenuOpen = false;
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && navMenu && !navMenu.contains(e.target) && navToggle && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            isMenuOpen = false;
            document.body.style.overflow = '';
        }
    });
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
    // iOS fallback: Safari iOS est parfois capricieux avec IntersectionObserver,
    // on force donc l'affichage des blocs clés après un petit délai.
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.userAgent && navigator.userAgent.includes('Mac') && 'ontouchend' in document);
    if (isIOS) {
        setTimeout(function () {
            const ids = ['text-main', 'img-main', 'snaps', 'img-pie', 'img-random-facts'];
            ids.forEach(function (id) {
                const el = document.getElementById(id);
                if (el) {
                    el.classList.add('animated');
                }
            });

            const snapItems = document.querySelectorAll('#snaps .snap-item');
            snapItems.forEach(function (item) {
                item.classList.add('animated');
            });
        }, 500);
    }
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

    const aboutMain = document.querySelector('section.main');
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
                    // Remove animated class if already present
                    imgPie.classList.remove('animated');
                    // Force reflow
                    void imgPie.offsetWidth;
                    // Add animated class after a short delay
                    setTimeout(() => {
                        imgPie.classList.add('animated');
                    }, 300);
                }
                
                pieChartObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe the section.dark container
    const pieChartSection = document.querySelector('section.dark');
    if (pieChartSection) {
        pieChartObserver.observe(pieChartSection);
        
        // Check if section is already visible on load (after a delay to ensure DOM is ready)
        setTimeout(() => {
            const rect = pieChartSection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) {
                const imgPie = document.getElementById('img-pie');
                if (imgPie && !imgPie.classList.contains('animated')) {
                    setTimeout(() => {
                        imgPie.classList.add('animated');
                    }, 500);
                }
            }
        }, 100);
    } else {
        // Fallback: observe the col-12.pie-chart
        const pieChartCol = document.querySelector('.col-12.pie-chart');
        if (pieChartCol) {
            pieChartObserver.observe(pieChartCol);
        }
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

    const randomFactsSection = document.querySelector('section.light.nopad-b') || document.querySelector('.about-random-facts');
    if (randomFactsSection) {
        randomFactsObserver.observe(randomFactsSection);
    }

}

// Initialize scroll animations on page load
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    
    // Synchroniser la hauteur de l'image avec le texte sur desktop
    function syncImageHeight() {
        if (window.innerWidth >= 1024) {
            const textMain = document.getElementById('text-main');
            const imgMain = document.getElementById('img-main');
            
            if (textMain && imgMain) {
                const textHeight = textMain.offsetHeight;
                if (textHeight > 0) {
                    imgMain.style.height = (textHeight + 20) + 'px';
                }
            }
        } else {
            const imgMain = document.getElementById('img-main');
            if (imgMain) {
                imgMain.style.height = '';
            }
        }
    }
    
    // Appeler au chargement et au redimensionnement
    syncImageHeight();
    window.addEventListener('resize', syncImageHeight);
    
    // Observer les changements de taille du texte
    if (window.innerWidth >= 1024) {
        const textMain = document.getElementById('text-main');
        if (textMain) {
            const resizeObserver = new ResizeObserver(() => {
                syncImageHeight();
            });
            resizeObserver.observe(textMain);
        }
    }
});

