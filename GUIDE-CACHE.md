# Guide : Les modifications CSS ne sont pas prises en compte

## 🔧 Solutions immédiates

### 1. Vider le cache du navigateur

**Chrome/Edge :**
- `Ctrl+Shift+R` (Windows) ou `Cmd+Shift+R` (Mac)
- OU : `Ctrl+F5`
- OU : Ouvrez DevTools (F12) → Clic droit sur le bouton recharger → "Vider le cache et actualiser"

**Firefox :**
- `Ctrl+Shift+R` (Windows) ou `Cmd+Shift+R` (Mac)
- OU : `Ctrl+F5`

**Safari :**
- `Cmd+Option+R`
- OU : Menu Développeur → Vider les caches

### 2. Vérifier que le CSS est chargé

1. Ouvrez DevTools (F12)
2. Onglet **Network**
3. Rechargez la page (`F5`)
4. Cherchez `styles.css`
5. Vérifiez :
   - Status : **200** (OK)
   - Size : environ **5-6 KB**
   - Si vous voyez "(from cache)", videz le cache !

### 3. Forcer le rechargement du CSS

J'ai ajouté un versioning au CSS : `styles.css?v=2`

Si ça ne fonctionne pas, changez le numéro dans `index.html` :
```html
<link rel="stylesheet" href="styles.css?v=3">
```

### 4. Script de force immédiate

**Utilisez le script `force-mobile-layout.js` :**

1. Ouvrez la console (F12)
2. Activez le mode mobile (Ctrl+Shift+M)
3. Copiez-collez le contenu de `force-mobile-layout.js`
4. Appuyez sur Entrée

Ce script force directement les styles avec `!important` et affiche ce qui a été modifié.

### 5. Vérifier les règles appliquées

**Utilisez le script `verifier-css.js` :**

1. Ouvrez la console (F12)
2. Activez le mode mobile
3. Copiez-collez le contenu de `verifier-css.js`
4. Appuyez sur Entrée

Ce script affiche toutes les règles CSS appliquées sur les éléments.

## 🔍 Diagnostic

### Vérifier dans DevTools

1. Inspectez `.pie-chart` ou `.web-project`
2. Onglet **Computed** (à droite)
3. Vérifiez :
   - `display` : devrait être `block` (pas `flex`)
   - `width` : devrait être `390px` (ou votre viewport)
   - `margin-left` : devrait être `0px`

### Si les règles ne s'appliquent pas

Dans DevTools, onglet **Styles** :
- Si vous voyez `display: flex` barré, c'est bon (il est surchargé)
- Si `display: flex` n'est pas barré, le CSS n'est pas chargé ou le cache est actif

## 🚀 Solution rapide

**Testez immédiatement avec ce script dans la console :**

```javascript
// Force le layout mobile
const pieChart = document.querySelector('.pie-chart, .col-12.pie-chart');
if (pieChart) {
    pieChart.style.display = 'block';
    pieChart.style.width = '100%';
    pieChart.style.textAlign = 'center';
}

const webProject = document.querySelector('.web-project');
const coder = document.querySelector('.coder');
[webProject, coder].forEach(el => {
    if (el) {
        el.style.display = 'block';
        el.style.width = '100%';
        el.style.margin = '0 auto 2.5rem auto';
        el.style.textAlign = 'center';
    }
});

const imgPie = document.getElementById('img-pie');
if (imgPie) {
    imgPie.style.position = 'relative';
    imgPie.style.top = 'auto';
    imgPie.style.left = 'auto';
    imgPie.style.transform = 'none';
    imgPie.style.margin = '2.5rem auto';
    imgPie.style.display = 'block';
}

console.log('✅ Layout forcé !');
```

## 📝 Checklist

- [ ] Cache vidé (Ctrl+Shift+R)
- [ ] Mode mobile activé (Ctrl+Shift+M)
- [ ] CSS chargé (Network → styles.css → Status 200)
- [ ] Script de force exécuté
- [ ] Vérification dans DevTools (Computed)

