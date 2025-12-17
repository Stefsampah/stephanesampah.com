# Guide pour Forcer les Corrections

Si les corrections ne s'appliquent pas, suivez ces étapes :

## 1. Vider le Cache du Navigateur

### Chrome/Edge (Windows)
- `Ctrl + Shift + R` (rechargement forcé)
- OU `Ctrl + Shift + Delete` → Cochez "Images et fichiers en cache" → Effacer

### Chrome/Edge (Mac)
- `Cmd + Shift + R` (rechargement forcé)
- OU `Cmd + Shift + Delete` → Cochez "Images et fichiers en cache" → Effacer

### Firefox
- `Ctrl + Shift + R` (Windows) ou `Cmd + Shift + R` (Mac)
- OU `Ctrl + Shift + Delete` → Cochez "Cache" → Effacer

## 2. Vérifier les Versions des Fichiers

Ouvrez la console (F12) et exécutez :

```javascript
console.log('CSS:', document.querySelector('link[href*="styles.css"]').href);
console.log('JS:', Array.from(document.querySelectorAll('script[src*="script.js"]')).pop().src);
```

Vous devriez voir :
- `styles.css?v=6`
- `script.js?v=20251212`

## 3. Exécuter le Script de Diagnostic

Copiez-collez le contenu de `diagnostic-complet.js` dans la console pour voir ce qui ne fonctionne pas.

## 4. Forcer les Corrections Immédiatement

Copiez-collez le contenu de `forcer-corrections.js` dans la console pour forcer toutes les corrections.

## 5. Vérifier les Images

Dans la console, exécutez :

```javascript
// Vérifier pie-chart
const imgPie = document.getElementById('img-pie');
console.log('pie-chart src:', imgPie ? imgPie.src : 'NON TROUVÉ');
console.log('pie-chart complete:', imgPie ? imgPie.complete : 'N/A');
console.log('pie-chart naturalWidth:', imgPie ? imgPie.naturalWidth : 'N/A');

// Vérifier random-facts
const imgRandom = document.querySelector('#img-random-facts img.major');
console.log('random-facts src:', imgRandom ? imgRandom.src : 'NON TROUVÉ');
console.log('random-facts complete:', imgRandom ? imgRandom.complete : 'N/A');
```

## 6. Vérifier les Animations

Dans la console, exécutez :

```javascript
console.log('initScrollAnimations existe:', typeof initScrollAnimations === 'function');
if (typeof initScrollAnimations === 'function') {
    initScrollAnimations();
    console.log('✅ Animations initialisées');
}
```

## 7. Vérifier la Section Skills

Dans la console, exécutez :

```javascript
const barChart = document.querySelector('.bar-chart');
if (barChart) {
    const styles = window.getComputedStyle(barChart);
    console.log('Padding:', styles.padding);
    console.log('Overflow-y:', styles.overflowY);
}

const percents = document.querySelectorAll('.bar-chart li .percent');
percents.forEach((p, i) => {
    const styles = window.getComputedStyle(p);
    console.log(`Pourcentage ${i+1}:`, {
        text: p.textContent.trim(),
        top: styles.top,
        fontSize: styles.fontSize
    });
});
```

## 8. Si Rien Ne Fonctionne

1. **Vérifiez que les fichiers sont bien sauvegardés** sur votre ordinateur
2. **Vérifiez que les fichiers sont bien déployés** sur le serveur (si vous utilisez un serveur)
3. **Testez en navigation privée** pour éviter tout cache
4. **Vérifiez la console** pour des erreurs JavaScript (onglet Console dans DevTools)

## 9. Script de Correction Automatique

Un script inline a été ajouté dans `index.html` qui force toutes les corrections au chargement. Si cela ne fonctionne toujours pas, il y a peut-être un problème de déploiement ou de cache serveur.
