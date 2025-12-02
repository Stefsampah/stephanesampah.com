# Portfolio Stéphane Sampah

Un portfolio moderne et élégant inspiré des designs de [Ram Maheshwari](https://www.rammaheshwari.com/) et [Adham Dannaway](https://www.adhamdannaway.com/).

## 🎨 Caractéristiques

- **Design moderne et minimaliste** - Interface épurée et professionnelle
- **Single Page Application** - Navigation fluide entre les sections
- **Responsive Design** - Optimisé pour tous les appareils
- **Animations subtiles** - Effets visuels élégants
- **Navigation fixe** - Menu toujours accessible
- **Formulaire de contact** - Section dédiée pour les messages

## 📁 Structure

```
stephanesampah.com/
├── config.js           ⭐ FICHIER DE CONFIGURATION - Personnalisez ici !
├── index.html          # Page principale (Home, About, Projects, Contact)
├── project-1.html      # Page détaillée du projet 1
├── project-2.html      # Page détaillée du projet 2
├── project-3.html      # Page détaillée du projet 3
├── project-4.html      # Page détaillée du projet 4
├── styles.css          # Styles CSS principaux
├── project-styles.css  # Styles CSS pour les pages projets
├── script.js           # JavaScript pour interactions principales
├── project-script.js   # JavaScript pour les pages projets
├── translations.js     # Traductions FR/EN
├── language.js         # Gestion des langues
├── PERSONNALISATION.md # Guide de personnalisation détaillé
└── README.md           # Documentation
```

## 🚀 Utilisation

1. Ouvrez `index.html` dans votre navigateur
2. Ou servez les fichiers avec un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js (http-server)
   npx http-server
   ```

## ✏️ Personnalisation

### ⭐ Fichier de Configuration Principal

**Toute la personnalisation se fait dans le fichier `config.js` !**

C'est le seul fichier que vous devez modifier pour personnaliser :
- Vos informations personnelles
- Vos réseaux sociaux
- Vos compétences
- Vos projets (descriptions, URLs, technologies)
- Et plus encore...

Consultez le guide détaillé : **[PERSONNALISATION.md](./PERSONNALISATION.md)**

### Exemple Rapide

Dans `config.js`, modifiez simplement :

```javascript
personal: {
    name: "Votre Nom",
    title: "Votre Titre",
    // ...
},
social: {
    linkedin: "https://linkedin.com/in/votreprofil",
    github: "https://github.com/votreusername",
    // ...
},
projects: [
    {
        name: "Mon Projet",
        liveUrl: "https://mon-site.com",
        githubUrl: "https://github.com/...",
        // ...
    }
]
```

### Modifier les couleurs
Éditez les variables CSS dans `styles.css` :
```css
:root {
    --primary-color: #000;
    --accent-color: #0066ff;
    --bg-color: #fff;
    /* ... */
}
```

## 📱 Sections

- **Home** - Introduction et présentation
- **About** - À propos et compétences
- **Projects** - Portfolio de projets avec liens vers les pages détaillées
- **Contact** - Formulaire de contact

## 🔗 Pages Projets

Chaque projet a sa propre page détaillée (`project-1.html`, `project-2.html`, etc.) qui contient :
- **Project Overview** - Description détaillée du projet
- **Tools Used** - Technologies et outils utilisés
- **See Live / Project Link** - Lien vers le site en ligne (si disponible) ou vers le repo GitHub

### Configuration des liens projets

Dans chaque page projet, modifiez l'objet `projectData` :

```javascript
const projectData = {
    liveUrl: "https://mon-site.com",      // Site en ligne (optionnel)
    githubUrl: "https://github.com/...",  // Repo GitHub (requis si pas de liveUrl)
    // ...
};
```

- Si `liveUrl` est défini → Les boutons "See Live" et "Project Link" pointent vers le site
- Si `liveUrl` est vide → Les boutons pointent vers le repo GitHub

## 🛠️ Technologies

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript (Vanilla)
- Google Fonts (Inter)

## 📝 Notes

- Le formulaire de contact nécessite une intégration backend pour fonctionner
- Personnalisez les textes, images et liens selon vos besoins
- Optimisez les images avant de les ajouter au projet

## 📄 Licence

Libre d'utilisation et de modification.

