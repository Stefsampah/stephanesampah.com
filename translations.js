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
            greeting: "Hey, I'm",
            subtitle: "A <strong>Result-Oriented Web Developer</strong> building and managing Websites and Web Applications that leads to the success of the overall product",
            projectsBtn: "Projects",
            contactBtn: "Contact"
        },
        // About Section
        about: {
            title: "About Me",
            "title.main": "about.",
            subtitle: "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology",
            intro: {
                main: "I'm a product designer based in sunny Sydney, Australia.",
                description: "Since 2005, I've enjoyed turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park."
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
            parts: {
                webProject: "Part web project",
                "webProject.uiux": "UI/UX design",
                "webProject.persona": "persona / benchmark / Digital strategies",
                "webProject.management": "Project management / e-commerce",
                "webProject.pop": "\"Making it pop\"",
                coder: "Part coder",
                "coder.frontend": "Front-end development",
                "coder.htmlcss": "HTML / CSS",
                "coder.js": "JavaScript / Ruby on Rails (kinda)",
                "coder.swearing": "Swearing at my computer",
                "coder.music": "Listening to music"
            },
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
                placeholder: "Image placeholder",
                social: "Not addicted to social media at all",
                apero: "Aperitif is my zen time",
                la: "I dream of living in Los Angeles",
                nba: "NBA fan",
                eat: "I love eating (but not cooking)",
                design: "Passionate about design",
                create: "I like creating things",
                mentor: "Daniel Ek is my mentor",
                coffee: "I drink a lot of coffee",
                daniel: "Daniel Ek rocks ✨"
            },
            stats: {
                title: "My skills ⚡",
                jedi: "Jedi",
                ninja: "Ninja",
                geek: "Geek",
                newbie: "Newbie",
                coffee: "coffee drunk ☕",
                design: "Design Systems 🎨",
                youtube: "YouTube 📺",
                dreamer: "Dreamer 🌌",
                basketball: "Basketball 🏀"
            }
        },
        // Projects Section
        projects: {
            title: "Projects",
            subtitle: "Here you will find some of the personal and clients projects that I created with each project containing its own case study",
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
                title: "Taxi Essaouira",
                description: "Taxi booking application for the city of Essaouira. Modern solution to facilitate transportation."
            },
            tubenplay: {
                title: "Tube'Nplay",
                description: "Streaming and entertainment platform. Modern interface for an optimal user experience."
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
            "title.main": "about.",
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
            parts: {
                webProject: "Part web project",
                "webProject.uiux": "UI/UX design",
                "webProject.persona": "persona / benchmark / Digital strategies",
                "webProject.management": "Project management / e-commerce",
                "webProject.pop": "\"Making it pop\"",
                coder: "Part coder",
                "coder.frontend": "Front-end development",
                "coder.htmlcss": "HTML / CSS",
                "coder.js": "JavaScript / Ruby on Rails (kinda)",
                "coder.swearing": "Swearing at my computer",
                "coder.music": "Listening to music"
            },
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
                title: "Random facts 🤓",
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
                title: "Taxi Essaouira",
                description: "Application de réservation de taxis pour la ville d'Essaouira. Solution moderne pour faciliter les déplacements."
            },
            tubenplay: {
                title: "Tube'Nplay",
                description: "Plateforme de streaming et de divertissement. Interface moderne pour une expérience utilisateur optimale."
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
    },
    en: {
        // ... existing English translations ...
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
                subtitle: "A modern full-stack application for complete hotel management, with an immersive interface and advanced features. This page contains the case study including Project Overview, Features, Screenshots, Tools Used and Video Demo.",
                overview: {
                    p1: "Hotel Manager is a modern full-stack application for complete hotel management, with an immersive interface and advanced features.",
                    p2: "This application provides all the tools needed to manage a hotel efficiently, including room management, booking systems, customer relations and reports. It was built with scalability and user-friendliness in mind, making it suitable for hotels of all sizes."
                },
                features: {
                    room: "Room Management – Full CRUD with images and status indicators",
                    reservation: "Reservation System – Advanced booking functionality",
                    user: "User Management – JWT authentication with role-based access",
                    dashboard: "Interactive Dashboard – Real-time statistics and insights",
                    ui: "Immersive Interface – Elegant design with Tailwind CSS",
                    responsive: "Responsive Design – Optimized for mobile and desktop",
                    security: "Security – Robust authentication and authorization"
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
    }
};

// Get current language from localStorage or default to browser language
function getCurrentLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
        return savedLang;
    }
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('fr') ? 'fr' : 'en';
}

// Set current language
let currentLanguage = getCurrentLanguage();

// Translation function
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            // Fallback to English if translation not found
            value = translations.en;
            for (const k2 of keys) {
                value = value[k2];
            }
            break;
        }
    }
    
    return value || key;
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

