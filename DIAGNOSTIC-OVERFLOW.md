# Guide de Diagnostic Overflow Mobile

## Comment vérifier les styles inline qui causent l'overflow

### 1. Dans les DevTools du navigateur (F12)

#### Méthode 1 : Inspecter les éléments
1. Ouvrez les DevTools (F12)
2. Activez le mode mobile (Ctrl+Shift+M ou Cmd+Shift+M)
3. Sélectionnez un appareil mobile (ex: iPhone 12 Pro)
4. Cliquez sur l'icône "Select element" (flèche en haut à gauche)
5. Survolez les sections pie-chart et bar-chart
6. Regardez dans le panneau de droite :
   - **Computed** : Vérifiez la largeur réelle
   - **Styles** : Cherchez les styles inline (attribut `style="..."`)
   - Si vous voyez `width: 617px` ou `width: 590px` en inline, c'est le problème !

#### Méthode 2 : Console JavaScript
Ouvrez la console et tapez :
```javascript
// Trouver tous les éléments avec des styles inline
document.querySelectorAll('[style]').forEach(el => {
    if (el.style.width && parseInt(el.style.width) > 400) {
        console.log('⚠️ Largeur fixe trouvée:', el, el.style.width);
    }
});

// Trouver les éléments qui dépassent
Array.from(document.querySelectorAll('*')).forEach(el => {
    if (el.scrollWidth > window.innerWidth) {
        console.log('⚠️ Overflow:', el, 'scrollWidth:', el.scrollWidth, 'viewport:', window.innerWidth);
    }
});
```

### 2. Vérifier dans le code source

Recherchez dans `index.html` :
- `style="width: ..."`
- `style="max-width: ..."`
- Toute balise avec l'attribut `style`

### 3. Utiliser le script de diagnostic

Le script `script.js` contient maintenant un diagnostic automatique qui :
- Détecte tous les éléments qui causent l'overflow
- Affiche un tableau dans la console avec les éléments problématiques
- Force automatiquement les corrections

**Pour voir le diagnostic :**
1. Ouvrez la console (F12)
2. Rechargez la page
3. Cherchez le message "🔍 DIAGNOSTIC OVERFLOW MOBILE"
4. Un tableau liste tous les éléments qui dépassent

## Corrections appliquées

✅ Images avec largeurs fixes → maintenant responsive
✅ Marges négatives sur `.row` → supprimées sur mobile
✅ Sections `.dark` → width: 100% au lieu de 100vw
✅ Protection globale avec `overflow-x: hidden`

## Si le problème persiste

1. **Vérifiez la console** : Le script affiche les éléments problématiques
2. **Vérifiez le cache** : Videz le cache du navigateur
3. **Vérifiez le serveur** : Assurez-vous que le fichier CSS est bien mis à jour
4. **Testez en navigation privée** : Pour éviter les problèmes de cache
