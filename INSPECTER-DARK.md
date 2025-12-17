# Guide : Comment Inspecter la Section .dark

## Méthode 1 : Via l'outil de sélection (Recommandé)

### Étapes :
1. **Ouvrez les DevTools** : Appuyez sur `F12` ou `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
2. **Activez le mode mobile** : 
   - Appuyez sur `Ctrl+Shift+M` (Windows) ou `Cmd+Shift+M` (Mac)
   - Ou cliquez sur l'icône 📱 dans la barre d'outils
3. **Sélectionnez un appareil mobile** : iPhone 12 Pro (390px) ou définissez 375px
4. **Cliquez sur l'icône de sélection** : 
   - En haut à gauche des DevTools, cliquez sur l'icône avec une flèche et un carré
   - Ou appuyez sur `Ctrl+Shift+C` (Windows) / `Cmd+Shift+C` (Mac)
5. **Survolez la section pie-chart ou bar-chart** sur la page
6. **Cliquez dessus** : La section `.dark` sera sélectionnée dans le panneau Elements

## Méthode 2 : Via la recherche dans Elements

### Étapes :
1. **Ouvrez les DevTools** : `F12`
2. **Onglet Elements** (ou Inspect dans Firefox)
3. **Recherchez** : 
   - Appuyez sur `Ctrl+F` (Windows) ou `Cmd+F` (Mac)
   - Tapez : `class="dark"` ou `section class="dark"`
4. **Naviguez** : Utilisez les flèches pour trouver toutes les sections `.dark`

## Méthode 3 : Via la Console JavaScript

### Étapes :
1. **Ouvrez la console** : Onglet "Console" dans DevTools
2. **Tapez cette commande** :
   ```javascript
   document.querySelectorAll('.dark').forEach((el, idx) => {
       console.log(`Section .dark #${idx + 1}:`, el);
       el.style.border = '3px solid red'; // Pour la voir visuellement
   });
   ```
3. **Les sections seront mises en évidence** avec une bordure rouge
4. **Cliquez sur les éléments** dans la console pour les inspecter

## Ce que vous devez vérifier dans le panneau Styles

Une fois la section `.dark` sélectionnée dans Elements :

### 1. Onglet "Styles" (à droite)
- **Cherchez les règles pour `.dark`** :
  - `overflow-x: hidden !important` ✅ (devrait être présent)
  - `width: 100% !important` ✅
  - `max-width: 100% !important` ✅
  - `overflow: hidden !important` ✅

- **Vérifiez s'il y a des règles qui surchargent** :
  - Si vous voyez `overflow-x: visible` barré, c'est bon (il est surchargé)
  - Si `overflow-x: visible` n'est pas barré, c'est un problème

### 2. Onglet "Computed" (à droite)
- **Vérifiez les valeurs calculées** :
  - `overflow-x` : devrait être `hidden` (pas `visible`)
  - `width` : devrait être `390px` (ou votre viewport)
  - `max-width` : devrait être `390px` (pas `none`)
  - `box-sizing` : devrait être `border-box`

### 3. Vérifier le scrollWidth
Dans la console, tapez :
```javascript
const dark = document.querySelector('.dark');
console.log('scrollWidth:', dark.scrollWidth);
console.log('clientWidth:', dark.clientWidth);
console.log('viewport:', window.innerWidth);
console.log('Dépasse:', dark.scrollWidth > window.innerWidth);
```

## Commandes utiles pour le diagnostic

### Voir toutes les sections .dark
```javascript
document.querySelectorAll('.dark').forEach((el, idx) => {
    const rect = el.getBoundingClientRect();
    console.log(`Section #${idx + 1}:`, {
        scrollWidth: el.scrollWidth,
        clientWidth: el.clientWidth,
        right: rect.right,
        viewport: window.innerWidth,
        overflowX: window.getComputedStyle(el).overflowX,
        maxWidth: window.getComputedStyle(el).maxWidth
    });
});
```

### Voir les styles appliqués
```javascript
const dark = document.querySelector('.dark');
const styles = window.getComputedStyle(dark);
console.log('Styles appliqués:', {
    overflowX: styles.overflowX,
    overflow: styles.overflow,
    width: styles.width,
    maxWidth: styles.maxWidth,
    marginLeft: styles.marginLeft,
    marginRight: styles.marginRight
});
```

### Forcer les styles (test)
```javascript
const dark = document.querySelector('.dark');
dark.style.setProperty('overflow-x', 'hidden', 'important');
dark.style.setProperty('width', '100%', 'important');
dark.style.setProperty('max-width', '100%', 'important');
console.log('Styles forcés !');
```

## Problèmes courants et solutions

### Problème : `overflow-x: visible` au lieu de `hidden`
**Solution** : 
1. Vérifiez que le style tag est bien dans le `<head>` du HTML
2. Videz le cache : `Ctrl+Shift+R`
3. Vérifiez qu'il n'y a pas de règles CSS qui surchargent

### Problème : `max-width: none` au lieu de `100%`
**Solution** :
1. Vérifiez que les règles avec `!important` sont bien présentes
2. Utilisez le script `fix-overflow-now.js` pour forcer les styles

### Problème : `scrollWidth` > `viewport`
**Solution** :
1. Vérifiez que tous les enfants de `.dark` ont aussi `max-width: 100%`
2. Vérifiez qu'il n'y a pas d'images qui dépassent
3. Utilisez le script de correction immédiate

## Vérification rapide

Dans la console, exécutez ce script complet :
```javascript
(function() {
    console.log('🔍 DIAGNOSTIC SECTIONS .dark');
    console.log('Viewport:', window.innerWidth + 'px');
    console.log('');
    
    document.querySelectorAll('.dark, section.dark').forEach((el, idx) => {
        const styles = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        
        console.log(`Section #${idx + 1} (${el.className}):`);
        console.log('  - scrollWidth:', el.scrollWidth + 'px');
        console.log('  - clientWidth:', el.clientWidth + 'px');
        console.log('  - right:', rect.right.toFixed(0) + 'px');
        console.log('  - overflow-x:', styles.overflowX);
        console.log('  - max-width:', styles.maxWidth);
        console.log('  - width:', styles.width);
        console.log('  - Dépasse:', el.scrollWidth > window.innerWidth ? '❌ OUI' : '✅ NON');
        console.log('');
    });
})();
```
