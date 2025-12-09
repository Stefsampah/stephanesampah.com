// Translations for bilingual website (French/English)

const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact"
        },
        // Home Section
        home: {
            greeting: "Hi, I am",
            subtitle: "A Results-Oriented Web Developer creating and managing Websites and Web Applications that lead to overall product success",
            projectsBtn: "Projects",
            contactBtn: "Contact"
        },
        // About Section
        about: {
            title: "About Me",
            titleMain: "About",
            subtitle: "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology",
            intro: {
                main: "I'm Stéphane, 51 years old, a tech addict and music lover. A dancefloor rover from the '80s and '90s (MC Hammer, get out of my body 😅) and a self-confessed music game addict.",
                description: "When I'm not coding, you can find me testing apps, listening to music, or putting the world to rights over a pizza."
            },
            photo: {
                fun: "Fun photo"
            },
            tags: {
                miniMe: "Mini me",
                location: "Mérignac / Bordeaux",
                mcHammer: "MC Hammer",
                mac: "Mon Mac",
                sharks: "Fan de requins"
            },
                webProject: "Part web project",
            webProjectUiux: "UI/UX design",
            webProjectPersona: "persona / benchmark / Digital strategies",
            webProjectManagement: "Project management / e-commerce",
            webProjectPop: "\"Making it pop\"",
                coder: "Part coder",
            coderFrontend: "Front-end development",
            coderHtmlcss: "HTML / CSS",
            coderJs: "JavaScript / Ruby on Rails (kinda)",
            coderSwearing: "Swearing at my computer",
            coderMusic: "Listening to music",
            pieChart: {
                text: "part web project,<br>part Front End Developer"
            },
            tools: {
                title: "Tools 🛠️",
                design: "Figma, Excalidraw, Marvel, Adobe Suite",
                code: "CSS / HTML, Bootstrap, Copilot, Cursor"
            },
            marketing: {
                title: "Marketing 📈",
                projects: "Marketing projects – Campaigns, content, e-commerce",
                strategy: "Strategy & Product – Positioning, roadmap, persona, benchmark",
                content: "Content creation – Visuals, newsletters, videos, brochures (Canva, Adobe, etc.)",
                tools: "Tools: Power BI, Google Ads, WordPress, MailChimp, Trello, Notion"
            },
            randomFacts: {
                title: "Random facts 🤓",
                visual: "Visual trivia",
                placeholder: "Image placeholder",
                social: "Not at all addicted to social media",
                apero: "Happy hour is my zen moment",
                la: "I dream of living in Los Angeles",
                nba: "NBA fan",
                eat: "I love to eat (but not cook)",
                design: "Passionate about design",
                create: "I love creating things",
                mentor: "Daniel Ek is my mentor",
                coffee: "I drink a lot of coffee",
                daniel: "Daniel Ek is rock ✨"
            },
            stats: {
                title: "My skills ⚡",
                jedi: "Jedi",
                ninja: "Ninja",
                geek: "Geek",
                newbie: "Beginner",
                coffee: "Coffee ☕",
                design: "Design systems 🎨",
                youtube: "YouTube 📺",
                dreamer: "Dreamer 🌌",
                basketball: "Basketball 🏀"
            }
        },
        // Projects Section
        projects: {
            title: "Projects",
            subtitle: "Here you will find some of the personal and client projects I have created, each project containing its own case study",
            caseStudy: "Case Study",
            // Project descriptions
            autonome: {
                title: "Autonome",
                description: "Web application for autonomous and independent management. Discover how this project was developed and the technologies used."
            },
            hotelManager: {
                title: "Hotel Manager",
                description: "Complete hotel management system to optimize operations and improve customer experience."
            },
            taxiEssaouira: {
                title: "Oukditours",
                description: "Web and mobile application for taxi and tourist transfer bookings in Essaouira. Focus on user experience and ease of booking."
            },
            tubenplay: {
                title: "Tube'NPlay",
                description: "Innovative music gamification platform that transforms music listening into an interactive adventure. Swipe, earn points, collect badges, and unlock exclusive rewards."
            }
        },
        // Contact Section
        contact: {
            title: "Contact",
            subtitle: "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible",
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Submit"
        },
        // Footer
        footer: {
            description: "A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product",
            copyright: "Copyright",
            madeBy: "Made by"
        },
        // Project Pages
        project: {
            overview: "Project Overview",
            toolsUsed: "Tools Used",
            seeLive: "See Live",
            projectLink: "Project Link",
            viewOnGithub: "View on GitHub",
            goBack: "Go Back",
            subtitle: "This page contains the case study of {project} which includes the Project Overview, Tools Used and Live Links to the official product.",
            features: "Features",
            screenshots: "Screenshots",
            videoDemo: "Video Demo",
            // AutonoMe specific
            autonome: {
                title: "AutonoMe",
                subtitle: "A web application designed, implemented and shipped to production for people with autism. This page contains the case study including Project Overview, Features, Screenshots, Tools Used and Live Links.",
                overview: {
                    p1: "The AutonoMe project consisted in the designing, implementing and shipping to production a web application for people with autism.",
                    p2: "This application was built with a focus on accessibility and user experience, providing essential features to help users navigate and interact with the platform independently."
                },
                features: {
                    help: "Help button with Stimulus JS",
                    geo: "Geographical position and route via import-maps",
                    auth: "Authentication with Devise",
                    responsive: "Responsive Bootstrap design"
                }
            },
            // Hotel Manager specific
            hotelManager: {
                title: "Hotel Manager",
                subtitle: "A modern full-stack application for comprehensive hotel management, featuring an immersive interface and advanced functionalities. This page contains the case study including Project Overview, Features, Screenshots, Tools Used and Video Demo.",
                overview: {
                    p1: "Hotel Manager is a modern full-stack application for comprehensive hotel management, featuring an immersive interface and advanced functionalities.",
                    p2: "This application provides all the necessary tools for managing a hotel efficiently, including room management, booking systems, customer relations, and reporting. It was built with scalability and user-friendliness in mind, making it suitable for hotels of all sizes."
                },
                features: {
                    room: "Room Management – Full CRUD with images and status indicators",
                    reservation: "Reservation System – Advanced booking functionality",
                    user: "User Management – JWT authentication with role-based access",
                    dashboard: "Interactive Dashboard – Real-time statistics and insights",
                    ui: "Immersive UI – Sleek design powered by Tailwind CSS",
                    responsive: "Responsive Design – Optimized for both mobile and desktop",
                    security: "Security – Robust authentication and authorization"
                }
            },
            // Tube'NPlay specific
            tubenplay: {
                title: "Tube'NPlay",
                subtitle: "Transform your music listening into an interactive adventure. Swipe, earn, unlock. The music game that transforms your listening into rewards. This page contains the case study including Project Overview, Features, Screenshots, Tools Used, Video Demo and Live Links.",
                overview: {
                    p1: "Tube'NPlay is an innovative music gamification platform that transforms your music listening experience into an interactive adventure. The platform combines music discovery with gaming mechanics, allowing users to swipe through playlists, earn points, collect badges, and unlock exclusive rewards.",
                    p2: "Built with a focus on user engagement and gamification, the platform features exclusive playlists, a badge collection system, premium rewards including VIP experiences, and an integrated shop. Each interaction brings users closer to unlocking unique content and real-world experiences like concert tickets and backstage access."
                },
                features: {
                    playlists: "Exclusive Playlists – Curated music by genre (Rock, Pop, Hits, Afro)",
                    gamification: "Gamification System – Swipe, earn points, unlock rewards",
                    badges: "Badge Collection – Bronze, Silver, Gold badges system",
                    rewards: "Premium Rewards – Unlock exclusive content, VIP experiences, concert tickets",
                    shop: "Premium Shop – Buy points packs and VIP subscriptions",
                    rankings: "Rankings & Stats – Track your progress and compete",
                    multilingual: "Multilingual – French and English support"
                }
            },
            // Oukditours specific
            oukditours: {
                title: "Oukditours",
                subtitle: "A web and mobile application designed, implemented and shipped to production for taxi and tourist transfer bookings. This page contains the case study including Project Overview, Features, Screenshots and Tools Used.",
                overview: {
                    p1: "The Oukditours project consisted in designing, implementing and shipping to production a web and mobile application for taxi and tourist transfer bookings in Essaouira.",
                    p2: "This application was built with a focus on user experience and ease of booking, providing essential features to allow users to quickly book their inter-city transfers and tourist trips."
                },
                features: {
                    booking: "Online booking of inter-city transfers",
                    form: "Booking form with date and time selection",
                    whatsapp: "WhatsApp integration for direct contact",
                    responsive: "Mobile-first responsive design",
                    multilingual: "Multilingual (French/English)",
                    gallery: "Available vehicles gallery"
                }
            }
        }
    },
    fr: {
        // Navigation
        nav: {
            home: "Accueil",
            about: "À propos",
            projects: "Projets",
            contact: "Contact"
        },
        // Home Section
        home: {
            greeting: "Salut, je suis",
            subtitle: "Un <strong>Développeur Web Orienté Résultats</strong> créant et gérant des Sites Web et Applications Web qui mènent au succès du produit global",
            projectsBtn: "Projets",
            contactBtn: "Contact"
        },
        // About Section
        about: {
            title: "À propos de moi",
            titleMain: "À propos",
            subtitle: "Ici vous trouverez plus d'informations sur moi, ce que je fais, et mes compétences actuelles principalement en termes de programmation et technologie",
            intro: {
                main: "Je suis Stéphane, 51 ans, tech addict & music lover. Retourneur de dancefloors entre 80 et 90 (MC Hammer sort de ce corps 😅) et music game addict assumé.",
                description: "Quand je ne code pas, tu peux me trouver en train de tester des apps, écouter du son, ou refaire le monde autour d'une pizza."
            },
            photo: {
                fun: "Photo fun"
            },
            tags: {
                miniMe: "Mini moi",
                location: "Mérignac / Bordeaux",
                mcHammer: "MC Hammer",
                mac: "Mon Mac",
                sharks: "Fan de requins"
            },
                webProject: "Part web project",
            webProjectUiux: "UI/UX design",
            webProjectPersona: "persona / benchmark / Digital strategies",
            webProjectManagement: "Project management / e-commerce",
            webProjectPop: "\"Making it pop\"",
                coder: "Part coder",
            coderFrontend: "Développement front-end",
            coderHtmlcss: "HTML / CSS",
            coderJs: "JavaScript / Ruby on Rails (un peu)",
            coderSwearing: "Je peste contre mon ordinateur",
            coderMusic: "J'écoute de la musique",
            pieChart: {
                text: "part web project,<br>part Front End Developer"
            },
            tools: {
                title: "Outils 🛠️",
                design: "Figma, Excalidraw, Marvel, Adobe Suite",
                code: "CSS / HTML, Bootstrap, Copilot, Cursor"
            },
            marketing: {
                title: "Marketing 📈",
                projects: "Projets marketing – Campagnes, contenus, e-commerce",
                strategy: "Stratégie & Produit – Positionnement, roadmap, persona, benchmark",
                content: "Création de contenus – Visuels, newsletters, vidéos, brochures (Canva, Adobe, etc.)",
                tools: "Outils : Power BI, Google Ads, WordPress, MailChimp, Trello, Notion"
            },
            randomFacts: {
                title: "Faits divers 🤓",
                visual: "Faits divers visuel",
                placeholder: "Placeholder d'image",
                social: "Pas du tout accro aux réseaux sociaux",
                apero: "L'apéro est mon moment zen",
                la: "Je rêve de vivre à Los Angeles",
                nba: "Fan de la NBA",
                eat: "J'adore manger (mais pas cuisiner)",
                design: "Passionné de design",
                create: "J'aime créer des choses",
                mentor: "Daniel Ek est mon mentor",
                coffee: "Je bois beaucoup de café",
                daniel: "Daniel Ek rocks ✨"
            },
            stats: {
                title: "Mes skills ⚡",
                jedi: "Jedi",
                ninja: "Ninja",
                geek: "Geek",
                newbie: "Newbie",
                coffee: "café bu ☕",
                design: "Design Systems 🎨",
                youtube: "YouTube 📺",
                dreamer: "Dreamer 🌌",
                basketball: "Basket-ball 🏀"
            }
        },
        // Projects Section
        projects: {
            title: "Projets",
            subtitle: "Ici vous trouverez certains des projets personnels et clients que j'ai créés, chaque projet contenant sa propre étude de cas",
            caseStudy: "Étude de cas",
            // Project descriptions
            autonome: {
                title: "Autonome",
                description: "Application web pour la gestion autonome et indépendante. Découvrez comment ce projet a été développé et les technologies utilisées."
            },
            hotelManager: {
                title: "Hotel Manager",
                description: "Système de gestion hôtelière complet pour optimiser les opérations et améliorer l'expérience client."
            },
            taxiEssaouira: {
                title: "Oukditours",
                description: "Application web et mobile pour la réservation de taxis et transferts touristiques à Essaouira. Focus sur l'expérience utilisateur et la facilité de réservation."
            },
            tubenplay: {
                title: "Tube'NPlay",
                description: "Plateforme innovante de gamification musicale qui transforme l'écoute musicale en aventure interactive. Swipe, gagne des points, collectionne des badges et débloque des récompenses exclusives."
            }
        },
        // Contact Section
        contact: {
            title: "Contact",
            subtitle: "N'hésitez pas à me contacter en soumettant le formulaire ci-dessous et je vous répondrai dans les plus brefs délais",
            name: "Nom",
            email: "Email",
            message: "Message",
            submit: "Envoyer"
        },
        // Footer
        footer: {
            description: "Un Développeur Web orienté Frontend créant le Frontend de Sites Web et Applications Web qui mènent au succès du produit global",
            copyright: "Copyright",
            madeBy: "Créé par"
        },
        // Project Pages
        project: {
            overview: "Aperçu du Projet",
            toolsUsed: "Outils Utilisés",
            seeLive: "Voir en Direct",
            projectLink: "Lien du Projet",
            viewOnGithub: "Voir sur GitHub",
            goBack: "Retour",
            subtitle: "Cette page contient l'étude de cas de {project} qui inclut l'Aperçu du Projet, les Outils Utilisés et les Liens vers le produit officiel.",
            features: "Fonctionnalités",
            screenshots: "Captures d'écran",
            videoDemo: "Démo Vidéo",
            // AutonoMe specific
            autonome: {
                title: "AutonoMe",
                subtitle: "Une application web conçue, implémentée et mise en production pour les personnes autistes. Cette page contient l'étude de cas incluant l'Aperçu du Projet, les Fonctionnalités, les Captures d'écran, les Outils Utilisés et les Liens vers le site.",
                overview: {
                    p1: "Le projet AutonoMe consistait à concevoir, implémenter et mettre en production une application web pour les personnes autistes.",
                    p2: "Cette application a été construite en se concentrant sur l'accessibilité et l'expérience utilisateur, fournissant des fonctionnalités essentielles pour aider les utilisateurs à naviguer et interagir avec la plateforme de manière indépendante."
                },
                features: {
                    help: "Bouton d'aide avec Stimulus JS",
                    geo: "Position géographique et itinéraire via import-maps",
                    auth: "Authentification avec Devise",
                    responsive: "Design responsive Bootstrap"
                }
            },
            // Hotel Manager specific
            hotelManager: {
                title: "Hotel Manager",
                subtitle: "Une application full-stack moderne pour la gestion complète d'hôtels, avec une interface immersive et des fonctionnalités avancées. Cette page contient l'étude de cas incluant l'Aperçu du Projet, les Fonctionnalités, les Captures d'écran, les Outils Utilisés et la Démo Vidéo.",
                overview: {
                    p1: "Hotel Manager est une application full-stack moderne pour la gestion complète d'hôtels, avec une interface immersive et des fonctionnalités avancées.",
                    p2: "Cette application fournit tous les outils nécessaires pour gérer un hôtel efficacement, incluant la gestion des chambres, les systèmes de réservation, les relations clients et les rapports. Elle a été construite en pensant à l'évolutivité et à la convivialité, la rendant adaptée aux hôtels de toutes tailles."
                },
                features: {
                    room: "Gestion des Chambres – CRUD complet avec images et indicateurs de statut",
                    reservation: "Système de Réservation – Fonctionnalité de réservation avancée",
                    user: "Gestion des Utilisateurs – Authentification JWT avec accès basé sur les rôles",
                    dashboard: "Tableau de Bord Interactif – Statistiques et insights en temps réel",
                    ui: "Interface Immersive – Design élégant avec Tailwind CSS",
                    responsive: "Design Responsive – Optimisé pour mobile et desktop",
                    security: "Sécurité – Authentification et autorisation robustes"
                }
            },
            // Tube'NPlay specific
            tubenplay: {
                title: "Tube'NPlay",
                subtitle: "Transforme tes écoutes en aventure interactive. Swippe, gagne, débloque. Le jeu musical qui transforme vos écoutes en récompenses. Cette page contient l'étude de cas incluant l'Aperçu du Projet, les Fonctionnalités, les Captures d'écran, les Outils Utilisés, la Démo Vidéo et les Liens en Direct.",
                overview: {
                    p1: "Tube'NPlay est une plateforme innovante de gamification musicale qui transforme votre expérience d'écoute musicale en aventure interactive. La plateforme combine la découverte musicale avec des mécaniques de jeu, permettant aux utilisateurs de swiper à travers des playlists, gagner des points, collectionner des badges et débloquer des récompenses exclusives.",
                    p2: "Construite avec un focus sur l'engagement utilisateur et la gamification, la plateforme propose des playlists exclusives, un système de collection de badges, des récompenses premium incluant des expériences VIP, et une boutique intégrée. Chaque interaction rapproche les utilisateurs du déblocage de contenu unique et d'expériences réelles comme des places de concert et des accès backstage."
                },
                features: {
                    playlists: "Playlists Exclusives – Musique sélectionnée par genre (Rock, Pop, Hits, Afro)",
                    gamification: "Système de Gamification – Swipe, gagne des points, débloque des récompenses",
                    badges: "Collection de Badges – Système de badges Bronze, Silver, Gold",
                    rewards: "Récompenses Premium – Débloque contenu exclusif, expériences VIP, places de concert",
                    shop: "Boutique Premium – Achète des packs de points et abonnements VIP",
                    rankings: "Classements & Stats – Suis ta progression et compète",
                    multilingual: "Multilingue – Support français et anglais"
                }
            },
            // Oukditours specific
            oukditours: {
                title: "Oukditours",
                subtitle: "Une application web et mobile conçue, implémentée et mise en production pour la réservation de taxis et transferts touristiques. Cette page contient l'étude de cas incluant l'Aperçu du Projet, les Fonctionnalités, les Captures d'écran et les Outils Utilisés.",
                overview: {
                    p1: "Le projet Oukditours consistait à concevoir, implémenter et mettre en production une application web et mobile pour la réservation de taxis et transferts touristiques à Essaouira.",
                    p2: "Cette application a été construite en se concentrant sur l'expérience utilisateur et la facilité de réservation, fournissant des fonctionnalités essentielles pour permettre aux utilisateurs de réserver rapidement leurs transferts entre villes et leurs déplacements touristiques."
                },
                features: {
                    booking: "Réservation en ligne de transferts entre villes",
                    form: "Formulaire de réservation avec sélection de date et heure",
                    whatsapp: "Intégration WhatsApp pour contact direct",
                    responsive: "Design responsive mobile-first",
                    multilingual: "Multilingue (Français/Anglais)",
                    gallery: "Galerie de véhicules disponibles"
                }
            }
        }
    }
};

// Expose translations for debugging/console access
if (typeof window !== 'undefined') {
    window.translations = translations;
}

// Get current language from localStorage or default to French (since HTML lang="fr")
function getCurrentLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
        return savedLang;
    }
    // Default to French since HTML has lang="fr"
    return 'fr';
}

// Set current language
let currentLanguage = getCurrentLanguage();

// Expose function to update currentLanguage from other scripts
if (typeof window !== 'undefined') {
    window.setCurrentLanguage = function(lang) {
        currentLanguage = lang;
        window.currentLanguage = lang;
    };
    window.currentLanguage = currentLanguage;
}

// Translation function
function t(key) {
    if (!key) return '';
    
    // Resolve translations source
    const tx = (typeof window !== 'undefined' && window.translations) ? window.translations : translations || {};
    
    // Get current language - prioritize window.currentLanguage, then local currentLanguage
    let lang = 'fr'; // default
    if (typeof window !== 'undefined' && window.currentLanguage) {
        lang = window.currentLanguage;
    } else if (typeof currentLanguage !== 'undefined') {
        lang = currentLanguage;
    }
    
    // Ensure lang is valid
    if (lang !== 'fr' && lang !== 'en') {
        lang = 'fr';
    }
    
    // Check if translations exist for this language
    if (!tx || !tx[lang]) {
        lang = 'fr';
    }
    
    // Helper function to recursively search for a key in an object
    // Handles both nested keys (about.title) and keys with dots in name (about["title.main"])
    function findTranslation(obj, keyParts, currentIndex = 0) {
        if (!obj || typeof obj !== 'object') return null;
        
        // If we've processed all parts, we're done (shouldn't happen, but safety check)
        if (currentIndex >= keyParts.length) return null;
        
        // Strategy 1: Try to find the remaining keys as a joined string (for "title.main" case)
        // This handles keys like about["title.main"] when searching for about.title.main
        if (currentIndex < keyParts.length) {
            const remainingKeys = keyParts.slice(currentIndex).join('.');
            // Check both with and without quotes (in case it's stored as "title.main" with quotes)
            if (obj[remainingKeys] !== undefined) {
                return obj[remainingKeys];
            }
            // Also try with quotes
            const remainingKeysQuoted = '"' + remainingKeys + '"';
            if (obj[remainingKeysQuoted] !== undefined) {
                return obj[remainingKeysQuoted];
            }
            // Try all object keys to see if any match
            for (const objKey in obj) {
                if (objKey === remainingKeys || objKey === remainingKeysQuoted || objKey.replace(/"/g, '') === remainingKeys) {
                    return obj[objKey];
                }
            }
        }
        
        // Strategy 2: Try normal nested navigation
        const currentKey = keyParts[currentIndex];
        
        // If this is the last key part
        if (currentIndex === keyParts.length - 1) {
            if (obj[currentKey] !== undefined) {
                return obj[currentKey];
            }
            return null;
        }
        
        // If there are more key parts, continue navigation
        if (obj[currentKey] !== undefined) {
            const nextValue = obj[currentKey];
            // If it's an object, continue navigating
            if (typeof nextValue === 'object' && nextValue !== null) {
                return findTranslation(nextValue, keyParts, currentIndex + 1);
            }
            // If it's not an object but we have more keys, this path is invalid
            return null;
        }
        
        return null;
    }
    
    // Try to find the translation in current language
    const keys = key.split('.');
    let value = findTranslation(tx[lang], keys, 0);
    
    // If not found, try fallback language
    if (value === null || value === undefined) {
        const fallbackLang = lang === 'fr' ? 'en' : 'fr';
        value = findTranslation(tx[fallbackLang], keys, 0);
    }
    
    // Return the translation or the key if not found
    if (value === null || value === undefined) {
        console.warn('Translation not found for key:', key, 'in language:', lang);
        return key;
    }
    
    return (typeof value === 'string' || typeof value === 'number') ? value : key;
}

// Replace placeholder in strings
function translateWithPlaceholder(key, placeholders) {
    let text = t(key);
    if (placeholders) {
        Object.keys(placeholders).forEach(placeholder => {
            text = text.replace(`{${placeholder}}`, placeholders[placeholder]);
        });
    }
    return text;
}

