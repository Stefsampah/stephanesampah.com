# Guide de Personnalisation

Ce guide vous explique comment personnaliser votre portfolio en modifiant le fichier `config.js`.

## 📝 Fichier de Configuration Principal

Toute la personnalisation se fait dans le fichier **`config.js`**. C'est le seul fichier que vous devez modifier pour personnaliser votre contenu.

## 🎯 Étapes de Personnalisation

### 1. Informations Personnelles

Dans `config.js`, section `personal` :

```javascript
personal: {
    name: "Votre Nom",
    title: "Votre Titre",
    metaDescription: "Description pour les moteurs de recherche",
    footerDescription: "Description pour le footer"
}
```

### 2. Réseaux Sociaux

Remplacez les `#` par vos vraies URLs :

```javascript
social: {
    linkedin: "https://linkedin.com/in/votreprofil",
    github: "https://github.com/votreusername",
    twitter: "https://twitter.com/votreusername",
    // ... autres réseaux
}
```

### 3. Compétences

Ajoutez ou supprimez des compétences :

```javascript
skills: [
    "HTML",
    "CSS",
    "JavaScript",
    // Ajoutez vos compétences ici
]
```

### 4. Projets

Pour chaque projet, modifiez :

- **name** : Nom du projet
- **shortDescription** : Description courte (en/fr) pour la carte
- **detailedDescription** : Description détaillée (en/fr) pour la page projet
- **tools** : Technologies utilisées
- **liveUrl** : URL du site en ligne (laissez vide si pas disponible)
- **githubUrl** : URL du repo GitHub
- **imageUrl** : URL de l'image (optionnel)

#### Ajouter un Nouveau Projet

1. Ajoutez un objet dans le tableau `projects` dans `config.js`
2. Créez une page `project-X.html` (copiez depuis `project-1.html`)
3. Mettez à jour `index.html` pour afficher le nouveau projet dans la grille

### 5. Images

#### Images de Projets

- Placez vos images dans un dossier `images/`
- Référencez-les dans `config.js` avec `imageUrl: "images/nom-image.jpg"`
- Ou utilisez des URLs externes

#### Logo / Favicon

- Remplacez le favicon dans le `<head>` de `index.html`
- Ajoutez votre logo si nécessaire

### 6. Couleurs et Styles

Modifiez les variables CSS dans `styles.css` :

```css
:root {
    --primary-color: #000;      /* Couleur principale */
    --accent-color: #0066ff;    /* Couleur d'accent */
    --bg-color: #fff;           /* Couleur de fond */
    --text-color: #1a1a1a;      /* Couleur du texte */
    /* ... */
}
```

### 7. Traductions

Les traductions sont dans `translations.js`. Si vous voulez modifier des textes :

- Modifiez directement dans `translations.js`
- Ou utilisez la section `customTexts` dans `config.js` (si implémenté)

## 📁 Structure des Fichiers

```
stephanesampah.com/
├── config.js              ⭐ MODIFIEZ ICI pour personnaliser
├── index.html             → Page principale
├── project-1.html         → Page projet 1
├── project-2.html         → Page projet 2
├── project-3.html         → Page projet 3
├── project-4.html         → Page projet 4
├── styles.css             → Styles (couleurs, etc.)
├── translations.js         → Traductions (optionnel)
└── images/                → Dossier pour vos images
```

## 🚀 Après la Personnalisation

1. **Testez localement** : Ouvrez `index.html` dans votre navigateur
2. **Vérifiez les liens** : Assurez-vous que tous les liens fonctionnent
3. **Testez le responsive** : Vérifiez sur mobile et tablette
4. **Testez les langues** : Vérifiez le changement FR/EN
5. **Optimisez les images** : Compressez vos images avant de les mettre en ligne

## 💡 Conseils

- **Sauvegardez** votre `config.js` avant de faire des modifications importantes
- **Testez** après chaque modification
- **Utilisez des images optimisées** (WebP, JPEG compressé)
- **Vérifiez les URLs** de vos projets (liveUrl et githubUrl)
- **Personnalisez les descriptions** pour qu'elles reflètent vraiment vos projets

## ❓ Besoin d'Aide ?

Si vous avez besoin d'aide pour personnaliser quelque chose de spécifique, consultez les commentaires dans `config.js` ou les fichiers HTML/CSS correspondants.

