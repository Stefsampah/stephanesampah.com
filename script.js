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

// Form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Create mailto link with form data
        const subject = encodeURIComponent(`Contact depuis stephanesampah.com - ${name}`);
        const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:stefsampah@hotmail.com?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        setTimeout(() => {
            alert('Merci pour votre message ! Votre client email devrait s\'ouvrir. Si ce n\'est pas le cas, envoyez votre message à stefsampah@hotmail.com');
        }, 500);

        // Reset form after a delay
        setTimeout(() => {
            contactForm.reset();
        }, 1000);
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
    
    // Inject dynamic style tag with maximum specificity
    function injectMobileStyles() {
        // Remove existing dynamic style if it exists
        const existingStyle = document.getElementById('mobile-force-styles');
        if (existingStyle) {
            existingStyle.remove();
        }
        
        const style = document.createElement('style');
        style.id = 'mobile-force-styles';
        style.textContent = `
            @media screen and (max-width: 768px) {
                /* Force ALL elements with maximum specificity */
                html, body {
                    overflow-x: hidden !important;
                    width: 100% !important;
                    max-width: 100vw !important;
                }
                
                section.dark,
                section.dark .row,
                section.dark .row .col-12,
                section.dark .row .col-12.pie-chart,
                .dark .row .col-12.pie-chart {
                    width: 100% !important;
                    max-width: 100% !important;
                    min-width: 0 !important;
                    overflow-x: hidden !important;
                    box-sizing: border-box !important;
                    margin: 0 !important;
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                }
                
                section.dark .row .col-12.pie-chart .web-project,
                section.dark .row .col-12.pie-chart .coder,
                .col-12.pie-chart .web-project,
                .col-12.pie-chart .coder,
                .pie-chart .web-project,
                .pie-chart .coder,
                .web-project,
                .coder {
                    width: 100% !important;
                    max-width: 100% !important;
                    min-width: 0 !important;
                    flex: 1 1 100% !important;
                    margin: 0 !important;
                    margin-left: 0 !important;
                    margin-right: 0 !important;
                    padding: 1rem !important;
                    box-sizing: border-box !important;
                }
                
                section.dark .row .col-12.pie-chart .web-project .ul,
                section.dark .row .col-12.pie-chart .coder .ul,
                .col-12.pie-chart .web-project .ul,
                .col-12.pie-chart .coder .ul,
                .pie-chart .web-project .ul,
                .pie-chart .coder .ul,
                .web-project .ul,
                .coder .ul {
                    width: 100% !important;
                    max-width: 100% !important;
                    min-width: 0 !important;
                    box-sizing: border-box !important;
                    padding: 0 !important;
                    margin: 0 !important;
                }
                
                section.dark .row .col-12.pie-chart .web-project .ul li,
                section.dark .row .col-12.pie-chart .coder .ul li,
                .col-12.pie-chart .web-project .ul li,
                .col-12.pie-chart .coder .ul li,
                .pie-chart .web-project .ul li,
                .pie-chart .coder .ul li,
                .web-project .ul li,
                .coder .ul li,
                li {
                    width: 100% !important;
                    max-width: 100% !important;
                    min-width: 0 !important;
                    box-sizing: border-box !important;
                    word-wrap: break-word !important;
                    overflow-wrap: break-word !important;
                    display: block !important;
                }
                
                .bar-chart,
                .bar-chart li {
                    width: 100% !important;
                    max-width: 100% !important;
                    min-width: 0 !important;
                    box-sizing: border-box !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Force mobile responsive fix for pie-chart sections
    function forceMobileResponsive() {
        if (window.innerWidth <= 768) {
            console.log('Force mobile responsive - window width:', window.innerWidth);
            
            // Inject dynamic styles first
            injectMobileStyles();
            
            // Force all list items to 100% width - CRITICAL FIX for 246px issue
            const listItems = document.querySelectorAll('.web-project .ul li, .coder .ul li, .pie-chart .web-project .ul li, .pie-chart .coder .ul li, .col-12.pie-chart .web-project .ul li, .col-12.pie-chart .coder .ul li');
            console.log('Found list items:', listItems.length);
            listItems.forEach(li => {
                li.style.setProperty('width', '100%', 'important');
                li.style.setProperty('max-width', '100%', 'important');
                li.style.setProperty('min-width', '0', 'important');
                li.style.setProperty('box-sizing', 'border-box', 'important');
                li.style.setProperty('word-wrap', 'break-word', 'important');
                li.style.setProperty('overflow-wrap', 'break-word', 'important');
                li.style.setProperty('display', 'block', 'important');
            });
            
            // Force bar-chart section to be responsive
            const barCharts = document.querySelectorAll('.bar-chart');
            barCharts.forEach(chart => {
                chart.style.setProperty('width', '100%', 'important');
                chart.style.setProperty('max-width', '100%', 'important');
                chart.style.setProperty('box-sizing', 'border-box', 'important');
                chart.style.setProperty('overflow-x', 'hidden', 'important');
            });
            
            const barChartItems = document.querySelectorAll('.bar-chart li');
            barChartItems.forEach(li => {
                li.style.setProperty('width', '100%', 'important');
                li.style.setProperty('max-width', '100%', 'important');
                li.style.setProperty('min-width', '0', 'important');
                li.style.setProperty('box-sizing', 'border-box', 'important');
            });
            
            // Force lists to 100% width
            const lists = document.querySelectorAll('.web-project .ul, .coder .ul, .pie-chart .web-project .ul, .pie-chart .coder .ul');
            lists.forEach(ul => {
                ul.style.setProperty('width', '100%', 'important');
                ul.style.setProperty('max-width', '100%', 'important');
                ul.style.setProperty('min-width', '0', 'important');
                ul.style.setProperty('box-sizing', 'border-box', 'important');
            });
            
            const webProjects = document.querySelectorAll('.web-project, .coder');
            console.log('Found web-project/coder elements:', webProjects.length);
            webProjects.forEach(el => {
                el.style.setProperty('flex', '1 1 100%', 'important');
                el.style.setProperty('min-width', '0', 'important');
                el.style.setProperty('max-width', '100%', 'important');
                el.style.setProperty('width', '100%', 'important');
                el.style.setProperty('margin', '0', 'important');
                el.style.setProperty('margin-left', '0', 'important');
                el.style.setProperty('margin-right', '0', 'important');
                el.style.setProperty('padding', '1rem', 'important');
                el.style.setProperty('box-sizing', 'border-box', 'important');
            });
            
            // Force headings to 100% width
            const headings = document.querySelectorAll('.web-project h2, .coder h2');
            headings.forEach(h2 => {
                h2.style.setProperty('width', '100%', 'important');
                h2.style.setProperty('max-width', '100%', 'important');
                h2.style.setProperty('box-sizing', 'border-box', 'important');
            });
            
            // Force ALL pie-chart containers - target the actual container
            const pieCharts = document.querySelectorAll('.pie-chart, .col-12.pie-chart, div.pie-chart');
            console.log('Found pie-chart elements:', pieCharts.length);
            pieCharts.forEach(pieChart => {
                console.log('Applying styles to:', pieChart.className);
                pieChart.style.setProperty('flex-direction', 'column', 'important');
                pieChart.style.setProperty('align-items', 'stretch', 'important');
                pieChart.style.setProperty('justify-content', 'flex-start', 'important');
                pieChart.style.setProperty('width', '100%', 'important');
                pieChart.style.setProperty('max-width', '100%', 'important');
                pieChart.style.setProperty('min-width', '0', 'important');
                pieChart.style.setProperty('padding', '1rem', 'important');
                pieChart.style.setProperty('margin', '0', 'important');
                pieChart.style.setProperty('box-sizing', 'border-box', 'important');
                pieChart.style.setProperty('overflow-x', 'hidden', 'important');
            });
            
            // Also force the parent row if it exists
            const pieChartRows = document.querySelectorAll('.col-12.pie-chart');
            pieChartRows.forEach(row => {
                const parentRow = row.closest('.row');
                if (parentRow) {
                    parentRow.style.setProperty('width', '100%', 'important');
                    parentRow.style.setProperty('max-width', '100%', 'important');
                    parentRow.style.setProperty('overflow-x', 'hidden', 'important');
                    parentRow.style.setProperty('box-sizing', 'border-box', 'important');
                }
            });
            
            // Force all .dark sections to prevent overflow
            const darkSections = document.querySelectorAll('.dark');
            darkSections.forEach(section => {
                section.style.setProperty('width', '100%', 'important');
                section.style.setProperty('max-width', '100%', 'important');
                section.style.setProperty('overflow-x', 'hidden', 'important');
                section.style.setProperty('box-sizing', 'border-box', 'important');
            });
            
            // Force all .row and .col-12 to prevent overflow
            const rows = document.querySelectorAll('.dark .row');
            rows.forEach(row => {
                row.style.setProperty('width', '100%', 'important');
                row.style.setProperty('max-width', '100%', 'important');
                row.style.setProperty('overflow-x', 'hidden', 'important');
                row.style.setProperty('box-sizing', 'border-box', 'important');
            });
            
            const col12s = document.querySelectorAll('.dark .col-12');
            col12s.forEach(col => {
                col.style.setProperty('width', '100%', 'important');
                col.style.setProperty('max-width', '100%', 'important');
                col.style.setProperty('overflow-x', 'hidden', 'important');
                col.style.setProperty('box-sizing', 'border-box', 'important');
            });
        }
    }
    
    // Run immediately and on load/resize
    forceMobileResponsive();
    window.addEventListener('resize', forceMobileResponsive);
    window.addEventListener('load', forceMobileResponsive);
    
    // Also run after delays to ensure DOM is fully ready
    setTimeout(forceMobileResponsive, 100);
    setTimeout(forceMobileResponsive, 300);
    setTimeout(forceMobileResponsive, 500);
    setTimeout(forceMobileResponsive, 1000);
    setTimeout(forceMobileResponsive, 2000);
    
    // Run on scroll to catch any lazy-loaded content
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(forceMobileResponsive, 100);
    });
    
    // Use MutationObserver to force styles when DOM changes
    const observer = new MutationObserver(() => {
        if (window.innerWidth <= 768) {
            forceMobileResponsive();
        }
    });
    
    // Observe changes to the document body
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
    });
    
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

