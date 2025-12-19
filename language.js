// Explicit updater for nav and home with direct translations access
function updateNavAndHome(lang) {
    const tx = (typeof window !== 'undefined' && window.translations) ? window.translations : translations || {};
    const nav = tx?.[lang]?.nav || tx?.en?.nav || tx?.fr?.nav || {};
    const home = tx?.[lang]?.home || tx?.en?.home || tx?.fr?.home || {};

    // Nav
    document.querySelectorAll('[data-translate="nav.home"]').forEach(el => {
        el.textContent = nav.home || 'Home';
    });
    document.querySelectorAll('[data-translate="nav.about"]').forEach(el => {
        el.textContent = nav.about || 'About';
    });
    document.querySelectorAll('[data-translate="nav.projects"]').forEach(el => {
        el.textContent = nav.projects || 'Projects';
    });
    document.querySelectorAll('[data-translate="nav.contact"]').forEach(el => {
        el.textContent = nav.contact || 'Contact';
    });

    // Home
    document.querySelectorAll('[data-translate="home.greeting"]').forEach(el => {
        el.textContent = home.greeting || 'Hi, I am';
    });
    document.querySelectorAll('[data-translate="home.subtitle"]').forEach(el => {
        el.innerHTML = home.subtitle || 'A Results-Oriented Web Developer creating and managing Websites and Web Applications that lead to overall product success';
    });
    document.querySelectorAll('[data-translate="home.projectsBtn"]').forEach(el => {
        el.textContent = home.projectsBtn || 'Projects';
    });
    document.querySelectorAll('[data-translate="home.contactBtn"]').forEach(el => {
        el.textContent = home.contactBtn || 'Contact';
    });
}

// Explicit updater for About, Projects, Contact, Footer
function updateSections(lang) {
    const tx = (typeof window !== 'undefined' && window.translations) ? window.translations : translations || {};
    const about = tx?.[lang]?.about || tx?.en?.about || tx?.fr?.about || {};
    const projects = tx?.[lang]?.projects || tx?.en?.projects || tx?.fr?.projects || {};
    const contact = tx?.[lang]?.contact || tx?.en?.contact || tx?.fr?.contact || {};
    const footer = tx?.[lang]?.footer || tx?.en?.footer || tx?.fr?.footer || {};

    // About main
    document.querySelectorAll('[data-translate="about.title"]').forEach(el => { el.textContent = about.title || ''; });
    document.querySelectorAll('[data-translate="about.titleMain"]').forEach(el => { el.textContent = about.titleMain || ''; });
    document.querySelectorAll('[data-translate="about.subtitle"]').forEach(el => { el.textContent = about.subtitle || ''; });
    document.querySelectorAll('[data-translate="about.intro.main"]').forEach(el => { el.textContent = about.intro?.main || ''; });
    document.querySelectorAll('[data-translate="about.intro.description"]').forEach(el => { el.textContent = about.intro?.description || ''; });
    document.querySelectorAll('[data-translate="about.photo.fun"]').forEach(el => { el.textContent = about.photo?.fun || ''; });

    // About tags
    document.querySelectorAll('[data-translate="about.tags.miniMe"]').forEach(el => { el.textContent = about.tags?.miniMe || ''; });
    document.querySelectorAll('[data-translate="about.tags.location"]').forEach(el => { el.textContent = about.tags?.location || ''; });
    document.querySelectorAll('[data-translate="about.tags.mcHammer"]').forEach(el => { el.textContent = about.tags?.mcHammer || ''; });
    document.querySelectorAll('[data-translate="about.tags.mac"]').forEach(el => { el.textContent = about.tags?.mac || ''; });
    document.querySelectorAll('[data-translate="about.tags.sharks"]').forEach(el => { el.textContent = about.tags?.sharks || ''; });

    // About web project / coder
    document.querySelectorAll('[data-translate="about.webProject"]').forEach(el => { el.textContent = about.webProject || ''; });
    document.querySelectorAll('[data-translate="about.webProjectUiux"]').forEach(el => { el.textContent = about.webProjectUiux || ''; });
    document.querySelectorAll('[data-translate="about.webProjectPersona"]').forEach(el => { el.textContent = about.webProjectPersona || ''; });
    document.querySelectorAll('[data-translate="about.webProjectManagement"]').forEach(el => { el.textContent = about.webProjectManagement || ''; });
    document.querySelectorAll('[data-translate="about.webProjectPop"]').forEach(el => { el.textContent = about.webProjectPop || ''; });

    document.querySelectorAll('[data-translate="about.coder"]').forEach(el => { el.textContent = about.coder || ''; });
    document.querySelectorAll('[data-translate="about.coderFrontend"]').forEach(el => { el.textContent = about.coderFrontend || ''; });
    document.querySelectorAll('[data-translate="about.coderHtmlcss"]').forEach(el => { el.textContent = about.coderHtmlcss || ''; });
    document.querySelectorAll('[data-translate="about.coderJs"]').forEach(el => { el.textContent = about.coderJs || ''; });
    document.querySelectorAll('[data-translate="about.coderSwearing"]').forEach(el => { el.textContent = about.coderSwearing || ''; });
    document.querySelectorAll('[data-translate="about.coderMusic"]').forEach(el => { el.textContent = about.coderMusic || ''; });
    document.querySelectorAll('[data-translate="about.pieChart.text"]').forEach(el => { el.innerHTML = about.pieChart?.text || ''; });

    // About marketing / tools
    document.querySelectorAll('[data-translate="about.tools.title"]').forEach(el => { el.textContent = about.tools?.title || ''; });
    document.querySelectorAll('[data-translate="about.tools.design"]').forEach(el => { el.textContent = about.tools?.design || ''; });
    document.querySelectorAll('[data-translate="about.tools.code"]').forEach(el => { el.textContent = about.tools?.code || ''; });
    document.querySelectorAll('[data-translate="about.marketing.title"]').forEach(el => { el.textContent = about.marketing?.title || ''; });
    document.querySelectorAll('[data-translate="about.marketing.projects"]').forEach(el => { el.textContent = about.marketing?.projects || ''; });
    document.querySelectorAll('[data-translate="about.marketing.strategy"]').forEach(el => { el.textContent = about.marketing?.strategy || ''; });
    document.querySelectorAll('[data-translate="about.marketing.content"]').forEach(el => { el.textContent = about.marketing?.content || ''; });
    document.querySelectorAll('[data-translate="about.marketing.tools"]').forEach(el => { el.textContent = about.marketing?.tools || ''; });

    // About random facts
    document.querySelectorAll('[data-translate="about.randomFacts.title"]').forEach(el => { el.textContent = about.randomFacts?.title || ''; });
    document.querySelectorAll('[data-translate-alt="about.randomFacts.visual"]').forEach(el => { el.alt = about.randomFacts?.visual || ''; });
    document.querySelectorAll('[data-translate="about.randomFacts.placeholder"]').forEach(el => { el.textContent = about.randomFacts?.placeholder || ''; });
    document.querySelectorAll('[data-translate="about.randomFacts.social"]').forEach(el => { el.textContent = about.randomFacts?.social || ''; });
    document.querySelectorAll('[data-translate="about.randomFacts.apero"]').forEach(el => { el.textContent = about.randomFacts?.apero || ''; });
    document.querySelectorAll('[data-translate="about.randomFacts.la"]').forEach(el => { el.textContent = about.randomFacts?.la || ''; });
    document.querySelectorAll('[data-translate="about.randomFacts.nba"]').forEach(el => { el.textContent = about.randomFacts?.nba || ''; });
    document.querySelectorAll('[data-translate="about.randomFacts.eat"]').forEach(el => { el.textContent = about.randomFacts?.eat || ''; });
    document.querySelectorAll('[data-translate="about.randomFacts.design"]').forEach(el => { el.textContent = about.randomFacts?.design || ''; });
    document.querySelectorAll('[data-translate="about.randomFacts.create"]').forEach(el => { el.textContent = about.randomFacts?.create || ''; });
    document.querySelectorAll('[data-translate="about.randomFacts.mentor"]').forEach(el => { el.textContent = about.randomFacts?.mentor || ''; });
    document.querySelectorAll('[data-translate="about.randomFacts.coffee"]').forEach(el => { el.textContent = about.randomFacts?.coffee || ''; });
    document.querySelectorAll('[data-translate="about.randomFacts.daniel"]').forEach(el => { el.textContent = about.randomFacts?.daniel || ''; });

    // About stats
    document.querySelectorAll('[data-translate="about.stats.title"]').forEach(el => { el.textContent = about.stats?.title || ''; });
    document.querySelectorAll('[data-translate="about.stats.jedi"]').forEach(el => { el.textContent = about.stats?.jedi || ''; });
    document.querySelectorAll('[data-translate="about.stats.ninja"]').forEach(el => { el.textContent = about.stats?.ninja || ''; });
    document.querySelectorAll('[data-translate="about.stats.geek"]').forEach(el => { el.textContent = about.stats?.geek || ''; });
    document.querySelectorAll('[data-translate="about.stats.newbie"]').forEach(el => { el.textContent = about.stats?.newbie || ''; });
    document.querySelectorAll('[data-translate="about.stats.coffee"]').forEach(el => { el.textContent = about.stats?.coffee || ''; });
    document.querySelectorAll('[data-translate="about.stats.design"]').forEach(el => { el.textContent = about.stats?.design || ''; });
    document.querySelectorAll('[data-translate="about.stats.youtube"]').forEach(el => { el.textContent = about.stats?.youtube || ''; });
    document.querySelectorAll('[data-translate="about.stats.dreamer"]').forEach(el => { el.textContent = about.stats?.dreamer || ''; });
    document.querySelectorAll('[data-translate="about.stats.basketball"]').forEach(el => { el.textContent = about.stats?.basketball || ''; });

    // Projects section header
    document.querySelectorAll('[data-translate="projects.title"]').forEach(el => { el.textContent = projects.title || ''; });
    document.querySelectorAll('[data-translate="projects.subtitle"]').forEach(el => { el.textContent = projects.subtitle || ''; });
    document.querySelectorAll('[data-translate="projects.caseStudy"]').forEach(el => { el.textContent = projects.caseStudy || ''; });
    // Project cards
    document.querySelectorAll('[data-translate="projects.autonome.title"]').forEach(el => { el.textContent = projects.autonome?.title || ''; });
    document.querySelectorAll('[data-translate="projects.autonome.description"]').forEach(el => { el.textContent = projects.autonome?.description || ''; });
    document.querySelectorAll('[data-translate="projects.hotelManager.title"]').forEach(el => { el.textContent = projects.hotelManager?.title || ''; });
    document.querySelectorAll('[data-translate="projects.hotelManager.description"]').forEach(el => { el.textContent = projects.hotelManager?.description || ''; });
    document.querySelectorAll('[data-translate="projects.taxiEssaouira.title"]').forEach(el => { el.textContent = projects.taxiEssaouira?.title || ''; });
    document.querySelectorAll('[data-translate="projects.taxiEssaouira.description"]').forEach(el => { el.textContent = projects.taxiEssaouira?.description || ''; });
    document.querySelectorAll('[data-translate="projects.tubenplay.title"]').forEach(el => { el.textContent = projects.tubenplay?.title || ''; });
    document.querySelectorAll('[data-translate="projects.tubenplay.description"]').forEach(el => { el.textContent = projects.tubenplay?.description || ''; });

    // Contact
    document.querySelectorAll('[data-translate="contact.title"]').forEach(el => { el.textContent = contact.title || ''; });
    document.querySelectorAll('[data-translate="contact.subtitle"]').forEach(el => { el.textContent = contact.subtitle || ''; });
    document.querySelectorAll('[data-translate="contact.name"]').forEach(el => { el.textContent = contact.name || ''; });
    document.querySelectorAll('[data-translate="contact.email"]').forEach(el => { el.textContent = contact.email || ''; });
    document.querySelectorAll('[data-translate="contact.message"]').forEach(el => { el.textContent = contact.message || ''; });
    document.querySelectorAll('[data-translate="contact.submit"]').forEach(el => { el.textContent = contact.submit || ''; });

    // Footer
    document.querySelectorAll('[data-translate="footer.description"]').forEach(el => { el.textContent = footer.description || ''; });
    document.querySelectorAll('[data-translate="footer.copyright"]').forEach(el => { el.textContent = footer.copyright || ''; });
    document.querySelectorAll('[data-translate="footer.madeBy"]').forEach(el => { el.textContent = footer.madeBy || ''; });
}
// Language switcher and translation application

// Ensure translations is exposed on window (const translations is not a window property by default)
if (typeof window !== 'undefined') {
    if (typeof translations !== 'undefined') {
        window.translations = window.translations || translations;
    } else {
        window.translations = window.translations || {};
    }
}

// Ensure minimum nav/home translations are present to avoid undefined access
function ensureTranslationsDefaults() {
    if (typeof window === 'undefined') return;
    if (!window.translations && typeof translations !== 'undefined') {
        window.translations = translations;
    }
    const tx = window.translations || {};
    tx.en = tx.en || {};
    tx.fr = tx.fr || {};
    tx.en.nav = tx.en.nav || { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' };
    tx.fr.nav = tx.fr.nav || { home: 'Accueil', about: 'À propos', projects: 'Projets', contact: 'Contact' };
    tx.en.home = tx.en.home || {
        greeting: 'Hi, I am',
        subtitle: 'A Results-Oriented Web Developer creating and managing Websites and Web Applications that lead to overall product success',
        projectsBtn: 'Projects',
        contactBtn: 'Contact'
    };
    tx.fr.home = tx.fr.home || {
        greeting: 'Salut, je suis',
        subtitle: 'Un Développeur Web orienté résultats créant et gérant des Sites et Applications Web menant au succès du produit',
        projectsBtn: 'Projets',
        contactBtn: 'Contact'
    };
    window.translations = tx;
}

// Apply translations to the page
function applyTranslations() {
    ensureTranslationsDefaults();
    const tx = (typeof window !== 'undefined' && window.translations) ? window.translations : translations || {};
    // Helper to update home section with explicit language data
    function applyHomeTranslations(lang) {
        const home = tx?.[lang]?.home || tx?.en?.home || tx?.fr?.home || {};
        const {
            greeting = 'Hi, I am',
            subtitle = 'A Results-Oriented Web Developer creating and managing Websites and Web Applications that lead to overall product success',
            projectsBtn = 'Projects',
            contactBtn = 'Contact'
        } = home;

        document.querySelectorAll('[data-translate="home.greeting"]').forEach(el => {
            el.textContent = greeting;
        });
        document.querySelectorAll('[data-translate="home.subtitle"]').forEach(el => {
            el.innerHTML = subtitle;
        });
        document.querySelectorAll('[data-translate="home.projectsBtn"]').forEach(el => {
            el.textContent = projectsBtn;
        });
        document.querySelectorAll('[data-translate="home.contactBtn"]').forEach(el => {
            el.textContent = contactBtn;
        });
    }

    // Helper to update nav explicitly
    function applyNavTranslations(lang) {
        const nav = tx?.[lang]?.nav || tx?.en?.nav || tx?.fr?.nav || {};
        document.querySelectorAll('[data-translate="nav.home"]').forEach(el => {
            el.textContent = nav.home || 'Home';
        });
        document.querySelectorAll('[data-translate="nav.about"]').forEach(el => {
            el.textContent = nav.about || 'About';
        });
        document.querySelectorAll('[data-translate="nav.projects"]').forEach(el => {
            el.textContent = nav.projects || 'Projects';
        });
        document.querySelectorAll('[data-translate="nav.contact"]').forEach(el => {
            el.textContent = nav.contact || 'Contact';
        });
    }

    const langForHome = window.currentLanguage || currentLanguage || 'fr';
    // Force translations using direct lookup (avoids t() fallback issues)
    updateNavAndHome(langForHome);
    updateSections(langForHome);
    // If we are on the home/index page, skip the rest (already updated explicitly)
    if (document.querySelector('#home')) {
        return;
    }

    // About Section
    document.querySelectorAll('[data-translate="about.title"]').forEach(el => {
        el.textContent = t('about.title');
    });
    document.querySelectorAll('[data-translate="about.titleMain"]').forEach(el => {
        el.textContent = t('about.titleMain');
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
    document.querySelectorAll('[data-translate="about.webProject"]').forEach(el => {
        el.textContent = t('about.webProject');
    });
    document.querySelectorAll('[data-translate="about.webProjectUiux"]').forEach(el => {
        el.textContent = t('about.webProjectUiux');
    });
    document.querySelectorAll('[data-translate="about.webProjectPersona"]').forEach(el => {
        el.textContent = t('about.webProjectPersona');
    });
    document.querySelectorAll('[data-translate="about.webProjectManagement"]').forEach(el => {
        el.textContent = t('about.webProjectManagement');
    });
    document.querySelectorAll('[data-translate="about.webProjectPop"]').forEach(el => {
        el.textContent = t('about.webProjectPop');
    });
    document.querySelectorAll('[data-translate="about.coder"]').forEach(el => {
        el.textContent = t('about.coder');
    });
    document.querySelectorAll('[data-translate="about.coderFrontend"]').forEach(el => {
        el.textContent = t('about.coderFrontend');
    });
    document.querySelectorAll('[data-translate="about.coderHtmlcss"]').forEach(el => {
        el.textContent = t('about.coderHtmlcss');
    });
    document.querySelectorAll('[data-translate="about.coderJs"]').forEach(el => {
        el.textContent = t('about.coderJs');
    });
    document.querySelectorAll('[data-translate="about.coderSwearing"]').forEach(el => {
        el.textContent = t('about.coderSwearing');
    });
    document.querySelectorAll('[data-translate="about.coderMusic"]').forEach(el => {
        el.textContent = t('about.coderMusic');
    });
    document.querySelectorAll('[data-translate="about.pieChart.text"]').forEach(el => {
        el.innerHTML = t('about.pieChart.text');
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
    document.querySelectorAll('[data-translate-alt="about.randomFacts.visual"]').forEach(el => {
        el.alt = t('about.randomFacts.visual');
    });
    document.querySelectorAll('[data-translate="about.randomFacts.placeholder"]').forEach(el => {
        el.textContent = t('about.randomFacts.placeholder');
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
    document.querySelectorAll('[data-translate="project.features"]').forEach(el => {
        el.textContent = t('project.features');
    });
    document.querySelectorAll('[data-translate="project.screenshots"]').forEach(el => {
        el.textContent = t('project.screenshots');
    });
    document.querySelectorAll('[data-translate="project.videoDemo"]').forEach(el => {
        el.textContent = t('project.videoDemo');
    });
    
    // Update project page content if projectData exists
    if (typeof projectData !== 'undefined' && projectData.projectKey) {
        updateProjectPageTranslations();
    }

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

// Update project page translations
function updateProjectPageTranslations() {
    if (typeof projectData === 'undefined' || !projectData.projectKey) return;
    
    const lang = currentLanguage;
    const projectKey = projectData.projectKey;
    const projectTranslations = translations[lang]?.project?.[projectKey] || {};
    
    // Update title
    const titleElement = document.getElementById('project-title');
    if (titleElement && projectTranslations.title) {
        titleElement.textContent = projectTranslations.title;
    }
    
    // Update subtitle
    const subtitleElement = document.getElementById('project-subtitle');
    if (subtitleElement && projectTranslations.subtitle) {
        subtitleElement.textContent = projectTranslations.subtitle;
    }
    
    // Update overview
    const overviewElement = document.getElementById('project-overview-content');
    if (overviewElement && projectTranslations.overview) {
        overviewElement.innerHTML = `
            <p>${projectTranslations.overview.p1 || ''}</p>
            <p>${projectTranslations.overview.p2 || ''}</p>
        `;
    }
    
    // Update features
    const featuresList = document.getElementById('project-features-list');
    if (featuresList && projectTranslations.features) {
        featuresList.innerHTML = '';
        // Support AutonoMe (4 features), Hotel Manager (7 features), and Oukditours (6 features)
        const features = [
            projectTranslations.features.help,
            projectTranslations.features.geo,
            projectTranslations.features.auth,
            projectTranslations.features.responsive,
            projectTranslations.features.room,
            projectTranslations.features.reservation,
            projectTranslations.features.user,
            projectTranslations.features.dashboard,
            projectTranslations.features.ui,
            projectTranslations.features.security,
            projectTranslations.features.booking,
            projectTranslations.features.form,
            projectTranslations.features.whatsapp,
            projectTranslations.features.multilingual,
            projectTranslations.features.gallery
        ].filter(Boolean);
        
        features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }
}

// Switch language
function switchLanguage(lang) {
    if (lang === 'fr' || lang === 'en') {
        // Update currentLanguage everywhere - this is critical!
        if (typeof currentLanguage !== 'undefined') {
        currentLanguage = lang;
        }
        if (typeof window !== 'undefined') {
            window.currentLanguage = lang;
            if (!window.translations && typeof translations !== 'undefined') {
                window.translations = translations;
            }
        }
        localStorage.setItem('preferredLanguage', lang);
        
        // Force update currentLanguage in translations.js scope
        if (typeof window.setCurrentLanguage === 'function') {
            window.setCurrentLanguage(lang);
        }
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update page direction if needed (for RTL languages in future)
        document.documentElement.dir = 'ltr';
        
        // Apply translations - this must happen after all language variables are updated
        applyTranslations();
        // Explicitly update nav + home + about/projects/contact/footer for immediate refresh
        updateNavAndHome(lang);
        updateSections(lang);
        
        // Update language selector buttons
        updateLanguageSelector();
        
        // Trigger language change event
        document.dispatchEvent(new CustomEvent('languageChanged'));
    }
}

// Initialize language on page load
function initializeLanguage() {
    // Get current language from localStorage or default to French
    const savedLang = localStorage.getItem('preferredLanguage');
    const initialLang = (savedLang && (savedLang === 'fr' || savedLang === 'en')) ? savedLang : 'fr';
    
    // Set currentLanguage everywhere - CRITICAL: must be set before applyTranslations()
    if (typeof currentLanguage !== 'undefined') {
        currentLanguage = initialLang;
    }
    if (typeof window !== 'undefined') {
        window.currentLanguage = initialLang;
        if (!window.translations && typeof translations !== 'undefined') {
            window.translations = translations;
        }
    }
    if (typeof window.setCurrentLanguage === 'function') {
        window.setCurrentLanguage(initialLang);
    }
    
    // Set initial language
    document.documentElement.lang = initialLang;
    
    // Apply translations - this will use window.currentLanguage
    applyTranslations();
    updateNavAndHome(initialLang);
    updateSections(initialLang);
    
    // Add language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });
}

// Run on DOMContentLoaded or immediately if already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguage);
} else {
    // DOM is already loaded, run immediately
    setTimeout(initializeLanguage, 0);
}

