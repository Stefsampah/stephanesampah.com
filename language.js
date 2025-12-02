// Language switcher and translation application

// Apply translations to the page
function applyTranslations() {
    // Navigation
    document.querySelectorAll('[data-translate="nav.home"]').forEach(el => {
        el.textContent = t('nav.home');
    });
    document.querySelectorAll('[data-translate="nav.about"]').forEach(el => {
        el.textContent = t('nav.about');
    });
    document.querySelectorAll('[data-translate="nav.projects"]').forEach(el => {
        el.textContent = t('nav.projects');
    });
    document.querySelectorAll('[data-translate="nav.contact"]').forEach(el => {
        el.textContent = t('nav.contact');
    });

    // Home Section
    document.querySelectorAll('[data-translate="home.greeting"]').forEach(el => {
        el.textContent = t('home.greeting');
    });
    document.querySelectorAll('[data-translate="home.subtitle"]').forEach(el => {
        el.innerHTML = t('home.subtitle');
    });
    document.querySelectorAll('[data-translate="home.projectsBtn"]').forEach(el => {
        el.textContent = t('home.projectsBtn');
    });
    document.querySelectorAll('[data-translate="home.contactBtn"]').forEach(el => {
        el.textContent = t('home.contactBtn');
    });

    // About Section
    document.querySelectorAll('[data-translate="about.title"]').forEach(el => {
        el.textContent = t('about.title');
    });
    document.querySelectorAll('[data-translate="about.subtitle"]').forEach(el => {
        el.textContent = t('about.subtitle');
    });
    document.querySelectorAll('[data-translate="about.intro.main"]').forEach(el => {
        el.textContent = t('about.intro.main');
    });
    document.querySelectorAll('[data-translate="about.intro.description"]').forEach(el => {
        el.textContent = t('about.intro.description');
    });
    document.querySelectorAll('[data-translate="about.photo.fun"]').forEach(el => {
        el.textContent = t('about.photo.fun');
    });
    document.querySelectorAll('[data-translate="about.tags.miniMe"]').forEach(el => {
        el.textContent = t('about.tags.miniMe');
    });
    document.querySelectorAll('[data-translate="about.tags.location"]').forEach(el => {
        el.textContent = t('about.tags.location');
    });
    document.querySelectorAll('[data-translate="about.tags.mcHammer"]').forEach(el => {
        el.textContent = t('about.tags.mcHammer');
    });
    document.querySelectorAll('[data-translate="about.tags.mac"]').forEach(el => {
        el.textContent = t('about.tags.mac');
    });
    document.querySelectorAll('[data-translate="about.tags.sharks"]').forEach(el => {
        el.textContent = t('about.tags.sharks');
    });
    document.querySelectorAll('[data-translate="about.parts.designer"]').forEach(el => {
        el.textContent = t('about.parts.designer');
    });
    document.querySelectorAll('[data-translate="about.parts.designer.ui"]').forEach(el => {
        el.textContent = t('about.parts.designer.ui');
    });
    document.querySelectorAll('[data-translate="about.parts.designer.ux"]').forEach(el => {
        el.textContent = t('about.parts.designer.ux');
    });
    document.querySelectorAll('[data-translate="about.parts.designer.systems"]').forEach(el => {
        el.textContent = t('about.parts.designer.systems');
    });
    document.querySelectorAll('[data-translate="about.parts.designer.interaction"]').forEach(el => {
        el.textContent = t('about.parts.designer.interaction');
    });
    document.querySelectorAll('[data-translate="about.parts.designer.pop"]').forEach(el => {
        el.textContent = t('about.parts.designer.pop');
    });
    document.querySelectorAll('[data-translate="about.parts.coder"]').forEach(el => {
        el.textContent = t('about.parts.coder');
    });
    document.querySelectorAll('[data-translate="about.parts.coder.frontend"]').forEach(el => {
        el.textContent = t('about.parts.coder.frontend');
    });
    document.querySelectorAll('[data-translate="about.parts.coder.htmlcss"]').forEach(el => {
        el.textContent = t('about.parts.coder.htmlcss');
    });
    document.querySelectorAll('[data-translate="about.parts.coder.js"]').forEach(el => {
        el.textContent = t('about.parts.coder.js');
    });
    document.querySelectorAll('[data-translate="about.parts.coder.rails"]').forEach(el => {
        el.textContent = t('about.parts.coder.rails');
    });
    document.querySelectorAll('[data-translate="about.parts.coder.wordpress"]').forEach(el => {
        el.textContent = t('about.parts.coder.wordpress');
    });
    document.querySelectorAll('[data-translate="about.parts.coder.backend"]').forEach(el => {
        el.textContent = t('about.parts.coder.backend');
    });
    document.querySelectorAll('[data-translate="about.parts.coder.cloud"]').forEach(el => {
        el.textContent = t('about.parts.coder.cloud');
    });
    document.querySelectorAll('[data-translate="about.parts.coder.swearing"]').forEach(el => {
        el.textContent = t('about.parts.coder.swearing');
    });
    document.querySelectorAll('[data-translate="about.parts.coder.pizza"]').forEach(el => {
        el.textContent = t('about.parts.coder.pizza');
    });
    document.querySelectorAll('[data-translate="about.tools.title"]').forEach(el => {
        el.textContent = t('about.tools.title');
    });
    document.querySelectorAll('[data-translate="about.tools.design"]').forEach(el => {
        el.textContent = t('about.tools.design');
    });
    document.querySelectorAll('[data-translate="about.tools.code"]').forEach(el => {
        el.textContent = t('about.tools.code');
    });
    document.querySelectorAll('[data-translate="about.marketing.title"]').forEach(el => {
        el.textContent = t('about.marketing.title');
    });
    document.querySelectorAll('[data-translate="about.marketing.projects"]').forEach(el => {
        el.textContent = t('about.marketing.projects');
    });
    document.querySelectorAll('[data-translate="about.marketing.strategy"]').forEach(el => {
        el.textContent = t('about.marketing.strategy');
    });
    document.querySelectorAll('[data-translate="about.marketing.content"]').forEach(el => {
        el.textContent = t('about.marketing.content');
    });
    document.querySelectorAll('[data-translate="about.marketing.tools"]').forEach(el => {
        el.textContent = t('about.marketing.tools');
    });
    document.querySelectorAll('[data-translate="about.randomFacts.title"]').forEach(el => {
        el.textContent = t('about.randomFacts.title');
    });
    document.querySelectorAll('[data-translate="about.randomFacts.social"]').forEach(el => {
        el.textContent = t('about.randomFacts.social');
    });
    document.querySelectorAll('[data-translate="about.randomFacts.apero"]').forEach(el => {
        el.textContent = t('about.randomFacts.apero');
    });
    document.querySelectorAll('[data-translate="about.randomFacts.la"]').forEach(el => {
        el.textContent = t('about.randomFacts.la');
    });
    document.querySelectorAll('[data-translate="about.randomFacts.nba"]').forEach(el => {
        el.textContent = t('about.randomFacts.nba');
    });
    document.querySelectorAll('[data-translate="about.randomFacts.eat"]').forEach(el => {
        el.textContent = t('about.randomFacts.eat');
    });
    document.querySelectorAll('[data-translate="about.randomFacts.design"]').forEach(el => {
        el.textContent = t('about.randomFacts.design');
    });
    document.querySelectorAll('[data-translate="about.randomFacts.create"]').forEach(el => {
        el.textContent = t('about.randomFacts.create');
    });
    document.querySelectorAll('[data-translate="about.randomFacts.mentor"]').forEach(el => {
        el.textContent = t('about.randomFacts.mentor');
    });
    document.querySelectorAll('[data-translate="about.randomFacts.coffee"]').forEach(el => {
        el.textContent = t('about.randomFacts.coffee');
    });
    document.querySelectorAll('[data-translate="about.randomFacts.daniel"]').forEach(el => {
        el.textContent = t('about.randomFacts.daniel');
    });
    document.querySelectorAll('[data-translate="about.stats.title"]').forEach(el => {
        el.textContent = t('about.stats.title');
    });
    document.querySelectorAll('[data-translate="about.stats.jedi"]').forEach(el => {
        el.textContent = t('about.stats.jedi');
    });
    document.querySelectorAll('[data-translate="about.stats.ninja"]').forEach(el => {
        el.textContent = t('about.stats.ninja');
    });
    document.querySelectorAll('[data-translate="about.stats.geek"]').forEach(el => {
        el.textContent = t('about.stats.geek');
    });
    document.querySelectorAll('[data-translate="about.stats.newbie"]').forEach(el => {
        el.textContent = t('about.stats.newbie');
    });
    document.querySelectorAll('[data-translate="about.stats.coffee"]').forEach(el => {
        el.textContent = t('about.stats.coffee');
    });
    document.querySelectorAll('[data-translate="about.stats.design"]').forEach(el => {
        el.textContent = t('about.stats.design');
    });
    document.querySelectorAll('[data-translate="about.stats.youtube"]').forEach(el => {
        el.textContent = t('about.stats.youtube');
    });
    document.querySelectorAll('[data-translate="about.stats.dreamer"]').forEach(el => {
        el.textContent = t('about.stats.dreamer');
    });
    document.querySelectorAll('[data-translate="about.stats.basketball"]').forEach(el => {
        el.textContent = t('about.stats.basketball');
    });

    // Projects Section
    document.querySelectorAll('[data-translate="projects.title"]').forEach(el => {
        el.textContent = t('projects.title');
    });
    document.querySelectorAll('[data-translate="projects.subtitle"]').forEach(el => {
        el.textContent = t('projects.subtitle');
    });
    document.querySelectorAll('[data-translate="projects.caseStudy"]').forEach(el => {
        el.textContent = t('projects.caseStudy');
    });
    // Project descriptions
    document.querySelectorAll('[data-translate="projects.autonome.title"]').forEach(el => {
        el.textContent = t('projects.autonome.title');
    });
    document.querySelectorAll('[data-translate="projects.autonome.description"]').forEach(el => {
        el.textContent = t('projects.autonome.description');
    });
    document.querySelectorAll('[data-translate="projects.hotelManager.title"]').forEach(el => {
        el.textContent = t('projects.hotelManager.title');
    });
    document.querySelectorAll('[data-translate="projects.hotelManager.description"]').forEach(el => {
        el.textContent = t('projects.hotelManager.description');
    });
    document.querySelectorAll('[data-translate="projects.taxiEssaouira.title"]').forEach(el => {
        el.textContent = t('projects.taxiEssaouira.title');
    });
    document.querySelectorAll('[data-translate="projects.taxiEssaouira.description"]').forEach(el => {
        el.textContent = t('projects.taxiEssaouira.description');
    });
    document.querySelectorAll('[data-translate="projects.tubenplay.title"]').forEach(el => {
        el.textContent = t('projects.tubenplay.title');
    });
    document.querySelectorAll('[data-translate="projects.tubenplay.description"]').forEach(el => {
        el.textContent = t('projects.tubenplay.description');
    });

    // Contact Section
    document.querySelectorAll('[data-translate="contact.title"]').forEach(el => {
        el.textContent = t('contact.title');
    });
    document.querySelectorAll('[data-translate="contact.subtitle"]').forEach(el => {
        el.textContent = t('contact.subtitle');
    });
    document.querySelectorAll('[data-translate="contact.name"]').forEach(el => {
        el.textContent = t('contact.name');
    });
    document.querySelectorAll('[data-translate="contact.email"]').forEach(el => {
        el.textContent = t('contact.email');
    });
    document.querySelectorAll('[data-translate="contact.message"]').forEach(el => {
        el.textContent = t('contact.message');
    });
    document.querySelectorAll('[data-translate="contact.submit"]').forEach(el => {
        el.textContent = t('contact.submit');
    });

    // Footer
    document.querySelectorAll('[data-translate="footer.description"]').forEach(el => {
        el.textContent = t('footer.description');
    });
    document.querySelectorAll('[data-translate="footer.copyright"]').forEach(el => {
        el.textContent = t('footer.copyright');
    });
    document.querySelectorAll('[data-translate="footer.madeBy"]').forEach(el => {
        el.textContent = t('footer.madeBy');
    });

    // Project Pages
    document.querySelectorAll('[data-translate="project.overview"]').forEach(el => {
        el.textContent = t('project.overview');
    });
    document.querySelectorAll('[data-translate="project.toolsUsed"]').forEach(el => {
        el.textContent = t('project.toolsUsed');
    });
    document.querySelectorAll('[data-translate="project.seeLive"]').forEach(el => {
        el.textContent = t('project.seeLive');
    });
    document.querySelectorAll('[data-translate="project.viewOnGithub"]').forEach(el => {
        el.textContent = t('project.viewOnGithub');
    });
    document.querySelectorAll('[data-translate="project.projectLink"]').forEach(el => {
        el.textContent = t('project.projectLink');
    });
    document.querySelectorAll('[data-translate="project.goBack"]').forEach(el => {
        el.textContent = t('project.goBack');
    });

    // Update language selector
    updateLanguageSelector();
}

// Update language selector display
function updateLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Switch language
function switchLanguage(lang) {
    if (lang === 'fr' || lang === 'en') {
        currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        applyTranslations();
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update page direction if needed (for RTL languages in future)
        document.documentElement.dir = 'ltr';
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    document.documentElement.lang = currentLanguage;
    
    // Apply translations
    applyTranslations();
    
    // Add language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });
});

