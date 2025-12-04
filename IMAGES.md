# Guide des Images

Ce document explique où placer vos images dans le projet.

## 📁 Dossier Images

Toutes vos images doivent être placées dans le dossier **`images/`** à la racine du projet.

## 🖼️ Images Requises pour la Section About

### 1. Image Principale About
- **Fichier** : `images/photo-fun.jpg`
- **Usage** : Photo principale à droite du texte d'introduction
- **Taille recommandée** : 800x600px ou similaire
- **Format** : JPG, PNG ou WebP

### 2. Miniatures (Snaps)
Ces images s'affichent en miniatures sous la section principale :

- **`images/mini-me.jpg`** - Photo "Mini moi" (150x150px recommandé)
- **`images/location.jpg`** - Photo de Mérignac/Bordeaux (150x150px)
- **`images/mc-hammer.gif`** - GIF MC Hammer (150x150px recommandé)
- **`images/workspace.jpg`** - Photo de votre workspace/Mac (150x150px)
- **`images/sharks.jpg`** - Photo "Fan de requins" (150x150px)

### 3. Camembert (Pie Chart)
- **Fichier** : `images/pie-chart.png`
- **Usage** : Image du camembert au centre des 4 blocs (Designer, Coder, Chef de projet, Marketer)
- **Taille recommandée** : 300x300px
- **Format** : PNG avec transparence (de préférence)
- **Note** : Si cette image n'existe pas, un camembert SVG sera affiché automatiquement

### 4. Random Facts
- **Fichier** : `images/random-facts.jpg`
- **Usage** : Image à gauche de la section Random facts
- **Taille recommandée** : 400x400px ou similaire
- **Format** : JPG, PNG ou WebP

## 📋 Structure du Dossier Images

```
images/
├── about-photo.jpg          # Photo principale About
├── mini-me.jpg              # Miniature 1
├── location.jpg             # Miniature 2
├── mc-hammer.jpg            # Miniature 3
├── workspace.jpg            # Miniature 4
├── sharks.jpg               # Miniature 5
├── pie-chart.png            # Camembert (optionnel - SVG de fallback disponible)
└── random-facts.jpg         # Image Random facts
```

## 🎨 Images de Projets

Pour les projets, vous pouvez ajouter des images dans `images/` et les référencer dans `config.js` :

```javascript
projects: [
    {
        imageUrl: "images/project-1.jpg",
        // ...
    }
]
```

## 💡 Conseils

1. **Optimisation** : Compressez vos images avant de les ajouter (utilisez TinyPNG, ImageOptim, etc.)
2. **Formats** :
   - JPG pour les photos
   - PNG pour les logos/icônes avec transparence
   - WebP pour une meilleure compression (si supporté)
3. **Taille** : Gardez les images sous 500KB chacune pour un chargement rapide
4. **Noms** : Utilisez des noms de fichiers en minuscules avec des tirets (ex: `about-photo.jpg`)

## 🔄 Fallback

Si une image n'existe pas :
- Les miniatures afficheront un placeholder SVG avec l'icône correspondante
- Le camembert utilisera automatiquement le SVG de fallback
- La photo principale affichera un placeholder avec icône 📸

## ✅ Vérification

Après avoir ajouté vos images, vérifiez que :
1. Tous les fichiers sont dans le dossier `images/`
2. Les noms de fichiers correspondent exactement à ceux dans le HTML
3. Les images se chargent correctement dans le navigateur

