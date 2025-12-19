// ============================================
// CONFIGURATION PERSONNELLE - PERSONNALISEZ ICI
// ============================================

const personalConfig = {
    // ============================================
    // INFORMATIONS PERSONNELLES
    // ============================================
    personal: {
        name: "Stéphane Sampah",
        title: "Développeur Web",
        // Description pour la balise meta
        metaDescription: "Portfolio de Stéphane Sampah - Développeur Web",
        // Description pour le footer
        footerDescription: "A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product"
    },

    // ============================================
    // RÉSEAUX SOCIAUX
    // ============================================
    social: {
        linkedin: "https://www.linkedin.com/in/stephanesampah/",
        github: "https://github.com/Stefsampah",
        instagram: "#", // Remplacez par votre URL Instagram (optionnel)
        youtube: "#",   // Remplacez par votre URL YouTube (optionnel)
        devto: "#"      // Remplacez par votre URL Dev.to (optionnel)
    },

    // ============================================
    // COMPÉTENCES / SKILLS
    // ============================================
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "TypeScript",
        "Git",
        "GitHub",
        "Responsive Design",
        "SEO",
        "Terminal",
        "SASS"
    ],

    // ============================================
    // PROJETS
    // ============================================
    projects: [
        {
            id: 1,
            name: "Autonome",
            // Description courte pour la carte projet
            shortDescription: {
                en: "Web application for autonomous and independent management. Discover how this project was developed and the technologies used.",
                fr: "Application web pour la gestion autonome et indépendante. Découvrez comment ce projet a été développé et les technologies utilisées."
            },
            // Description détaillée pour la page projet
            detailedDescription: {
                en: `
                    <p>
                        Autonome is an application web designed for autonomous and independent management. This project provides a comprehensive solution for managing various aspects of autonomous operations.
                    </p>
                    <p>
                        The application was built with a focus on user experience and efficiency. It includes features that allow users to manage their tasks independently while maintaining a clean and intuitive interface.
                    </p>
                    <p>
                        Feel free to check out the Project by visiting the Project Link.
                    </p>
                `,
                fr: `
                    <p>
                        Autonome est une application web conçue pour la gestion autonome et indépendante. Ce projet fournit une solution complète pour gérer divers aspects des opérations autonomes.
                    </p>
                    <p>
                        L'application a été construite en mettant l'accent sur l'expérience utilisateur et l'efficacité. Elle comprend des fonctionnalités qui permettent aux utilisateurs de gérer leurs tâches de manière indépendante tout en conservant une interface claire et intuitive.
                    </p>
                    <p>
                        N'hésitez pas à consulter le projet en visitant le lien du projet.
                    </p>
                `
            },
            // Technologies utilisées
            tools: ["HTML", "CSS", "JavaScript", "React", "Git", "Github"],
            // URLs
            liveUrl: "",  // URL du site en ligne (laissez vide si pas disponible)
            githubUrl: "https://github.com/yourusername/autonome",  // URL du repo GitHub
            imageUrl: ""  // URL de l'image du projet (optionnel)
        },
        {
            id: 2,
            name: "Hotel Manager",
            shortDescription: {
                en: "Complete hotel management system to optimize operations and improve customer experience.",
                fr: "Système de gestion hôtelière complet pour optimiser les opérations et améliorer l'expérience client."
            },
            detailedDescription: {
                en: `
                    <p>
                        Hotel Manager is a comprehensive hotel management system designed to optimize operations and improve customer experience. This solution provides all the necessary tools for managing a hotel efficiently.
                    </p>
                    <p>
                        The system includes features for room management, booking systems, customer relations, and reporting. It was built with scalability and user-friendliness in mind, making it suitable for hotels of all sizes.
                    </p>
                    <p>
                        Feel free to check out the Project by visiting the Project Link.
                    </p>
                `,
                fr: `
                    <p>
                        Hotel Manager est un système complet de gestion hôtelière conçu pour optimiser les opérations et améliorer l'expérience client. Cette solution fournit tous les outils nécessaires pour gérer un hôtel efficacement.
                    </p>
                    <p>
                        Le système comprend des fonctionnalités pour la gestion des chambres, les systèmes de réservation, les relations clients et les rapports. Il a été construit en pensant à l'évolutivité et à la convivialité, le rendant adapté aux hôtels de toutes tailles.
                    </p>
                    <p>
                        N'hésitez pas à consulter le projet en visitant le lien du projet.
                    </p>
                `
            },
            tools: ["HTML", "CSS", "JavaScript", "Node.js", "Git", "Github"],
            liveUrl: "",
            githubUrl: "https://github.com/yourusername/hotel-manager",
            imageUrl: ""
        },
        {
            id: 3,
            name: "Taxi Essaouira",
            shortDescription: {
                en: "Taxi booking application for the city of Essaouira. Modern solution to facilitate transportation.",
                fr: "Application de réservation de taxis pour la ville d'Essaouira. Solution moderne pour faciliter les déplacements."
            },
            detailedDescription: {
                en: `
                    <p>
                        Taxi Essaouira is a modern taxi booking application designed specifically for the city of Essaouira. This solution makes it easy for residents and tourists to book taxis quickly and efficiently.
                    </p>
                    <p>
                        The application features real-time booking, GPS tracking, and a user-friendly interface. It was developed to address the transportation needs of Essaouira while providing a seamless experience for both drivers and passengers.
                    </p>
                    <p>
                        Feel free to check out the Project by visiting the Project Link.
                    </p>
                `,
                fr: `
                    <p>
                        Taxi Essaouira est une application moderne de réservation de taxis conçue spécifiquement pour la ville d'Essaouira. Cette solution permet aux résidents et aux touristes de réserver des taxis rapidement et efficacement.
                    </p>
                    <p>
                        L'application comprend la réservation en temps réel, le suivi GPS et une interface conviviale. Elle a été développée pour répondre aux besoins de transport d'Essaouira tout en offrant une expérience fluide aux conducteurs et aux passagers.
                    </p>
                    <p>
                        N'hésitez pas à consulter le projet en visitant le lien du projet.
                    </p>
                `
            },
            tools: ["HTML", "CSS", "JavaScript", "TypeScript", "Git", "Github"],
            liveUrl: "",
            githubUrl: "https://github.com/yourusername/taxi-essaouira",
            imageUrl: ""
        },
        {
            id: 4,
            name: "Tube'Nplay",
            shortDescription: {
                en: "Streaming and entertainment platform. Modern interface for an optimal user experience.",
                fr: "Plateforme de streaming et de divertissement. Interface moderne pour une expérience utilisateur optimale."
            },
            detailedDescription: {
                en: `
                    <p>
                        Tube'Nplay is a modern streaming and entertainment platform designed to provide users with an optimal viewing experience. The platform features a sleek interface and powerful functionality.
                    </p>
                    <p>
                        This project was built with a focus on performance and user experience. It includes features for video streaming, playlist management, and personalized recommendations. The interface is designed to be intuitive and engaging for users of all ages.
                    </p>
                    <p>
                        Feel free to check out the Project by visiting the Project Link.
                    </p>
                `,
                fr: `
                    <p>
                        Tube'Nplay est une plateforme moderne de streaming et de divertissement conçue pour offrir aux utilisateurs une expérience de visionnement optimale. La plateforme présente une interface élégante et des fonctionnalités puissantes.
                    </p>
                    <p>
                        Ce projet a été construit en mettant l'accent sur les performances et l'expérience utilisateur. Il comprend des fonctionnalités pour le streaming vidéo, la gestion de playlists et des recommandations personnalisées. L'interface est conçue pour être intuitive et engageante pour les utilisateurs de tous âges.
                    </p>
                    <p>
                        N'hésitez pas à consulter le projet en visitant le lien du projet.
                    </p>
                `
            },
            tools: ["HTML", "CSS", "JavaScript", "React", "Git", "Github"],
            liveUrl: "",
            githubUrl: "https://github.com/yourusername/tubenplay",
            imageUrl: ""
        }
    ],

    // ============================================
    // TEXTES PERSONNALISÉS (optionnel - pour override les traductions)
    // ============================================
    customTexts: {
        // Vous pouvez personnaliser des textes spécifiques ici si nécessaire
        // Sinon, les traductions par défaut dans translations.js seront utilisées
    }
};

// ============================================
// INSTRUCTIONS DE PERSONNALISATION
// ============================================
/*
1. INFORMATIONS PERSONNELLES:
   - Modifiez 'name', 'title', 'metaDescription' et 'footerDescription'

2. RÉSEAUX SOCIAUX:
   - Remplacez les '#' par vos vraies URLs
   - Ajoutez ou supprimez des réseaux selon vos besoins

3. COMPÉTENCES:
   - Ajoutez ou supprimez des compétences dans le tableau 'skills'

4. PROJETS:
   - Modifiez les informations de chaque projet
   - Ajoutez ou supprimez des projets
   - Pour ajouter un projet:
     * Ajoutez un nouvel objet dans le tableau 'projects'
     * Créez une page project-X.html correspondante
     * Mettez à jour index.html pour afficher le nouveau projet

5. IMAGES:
   - Pour ajouter des images de projets, utilisez 'imageUrl' dans chaque projet
   - Ou placez vos images dans un dossier 'images/' et référencez-les

6. COULEURS:
   - Modifiez les variables CSS dans styles.css (:root)
*/

