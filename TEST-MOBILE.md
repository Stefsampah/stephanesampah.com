# Guide de Test Mobile - Overflow

## ⚠️ IMPORTANT : Le diagnostic doit être exécuté en MODE MOBILE

Le diagnostic que vous avez exécuté montre **1187px** (desktop). Pour détecter l'overflow mobile, vous devez tester avec un viewport **≤ 768px**.

## Méthode 1 : Mode Mobile dans Chrome DevTools (Recommandé)

### Étapes :
1. **Ouvrez les DevTools** : Appuyez sur `F12`
2. **Activez le mode mobile** : 
   - Windows/Linux : `Ctrl + Shift + M`
   - Mac : `Cmd + Shift + M`
3. **Sélectionnez un appareil mobile** :
   - Dans la barre d'outils en haut, cliquez sur l'icône de téléphone/tablette
   - Choisissez un appareil (ex: **iPhone 12 Pro** - 390px)
   - Ou définissez une largeur personnalisée : **375px** (iPhone standard)
4. **Rechargez la page** : `F5` ou `Ctrl+R`
5. **Ouvrez la console** : Onglet "Console"
6. **Exécutez le diagnostic** : Copiez-collez le contenu de `diagnostic-overflow.js`

### Ce que vous devriez voir :
- Viewport width: **375px** (ou similaire, < 768px)
- Mode: **📱 MOBILE**
- Le diagnostic cherchera les éléments qui dépassent

## Méthode 2 : Test sur Appareil Mobile Réel

### Étapes :
1. **Déployez votre site** sur votre serveur
2. **Ouvrez le site sur votre téléphone**
3. **Vérifiez visuellement** :
   - Faites défiler horizontalement
   - Y a-t-il un scroll horizontal indésirable ?
4. **Si possible, ouvrez les DevTools** :
   - Chrome Android : `chrome://inspect` sur votre ordinateur
   - Safari iOS : Activer "Web Inspector" dans Réglages > Safari > Avancé

## Méthode 3 : Test avec des Largeurs Spécifiques

Dans Chrome DevTools, testez avec ces largeurs :
- **320px** : Très petit mobile
- **375px** : iPhone standard
- **414px** : iPhone Plus
- **768px** : Tablette (limite mobile)

## Ce que le Diagnostic Recherche

Le script détecte :
1. ✅ **Éléments qui dépassent** : `scrollWidth > viewportWidth`
2. ✅ **Styles inline problématiques** : Largeurs fixes > 400px
3. ✅ **Images trop larges** : Images avec `naturalWidth > viewportWidth`
4. ✅ **Sections spécifiques** : `.pie-chart` et `.bar-chart`

## Si Aucun Problème n'est Détecté mais Overflow Persiste

1. **Videz le cache** : `Ctrl+Shift+R` (Windows) ou `Cmd+Shift+R` (Mac)
2. **Vérifiez le CSS chargé** :
   - Onglet Network dans DevTools
   - Cherchez `styles.css`
   - Vérifiez qu'il est bien chargé (status 200)
3. **Vérifiez les règles CSS actives** :
   - Inspectez un élément problématique
   - Onglet "Computed" dans DevTools
   - Vérifiez `width`, `max-width`, `overflow-x`
4. **Testez en navigation privée** : Pour éviter les extensions qui interfèrent

## Commandes Rapides

```javascript
// Vérifier le viewport actuel
console.log('Viewport:', window.innerWidth + 'px');

// Forcer le mode mobile (pour test)
document.body.style.width = '375px';

// Vérifier l'overflow
console.log('Body scrollWidth:', document.body.scrollWidth);
console.log('Overflow:', document.body.scrollWidth > window.innerWidth);
```
