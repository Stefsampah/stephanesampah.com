# Guide de Déploiement

## Fichiers à déployer (PRIORITÉ)

Ces fichiers doivent être uploadés sur votre serveur pour que les corrections fonctionnent :

### 1. Fichiers principaux (OBLIGATOIRES)
- ✅ `index.html` - Contient le script inline de correction
- ✅ `styles.css` - Version 7 avec toutes les corrections
- ✅ `script.js` - Version 20251213 avec animations corrigées

### 2. Fichiers de configuration (si modifiés)
- `translations.js`
- `language.js`
- `config.js`

### 3. Images (vérifier que toutes existent)
- `images/pie-chart-removebg-preview.png` ⚠️ IMPORTANT
- `images/photo-fun.jpg`
- `images/IMG_2206.jpg`
- `images/location.jpg`
- `images/mc-hammer.gif`
- `images/workspace.jpg`
- `images/sharks.jpg`
- `images/random-facts.jpg`

## Vérification après déploiement

1. **Videz le cache** : `Ctrl+Shift+R` (Windows) ou `Cmd+Shift+R` (Mac)

2. **Vérifiez les versions** dans la console :
```javascript
console.log('CSS:', document.querySelector('link[href*="styles.css"]').href);
console.log('JS:', Array.from(document.querySelectorAll('script[src*="script.js"]')).pop().src);
```

Vous devriez voir :
- `styles.css?v=7`
- `script.js?v=20251213`

3. **Exécutez le diagnostic** :
   - Copiez-collez `diagnostic-complet.js` dans la console
   - Vérifiez que toutes les images sont visibles
   - Vérifiez que les pourcentages sont bien positionnés

## Méthodes de déploiement

### Via FTP/SFTP
1. Connectez-vous à votre serveur via FileZilla, Cyberduck, ou votre client FTP
2. Uploadez les fichiers dans le répertoire public (généralement `public_html/` ou `www/`)
3. Assurez-vous que les permissions sont correctes (644 pour les fichiers, 755 pour les dossiers)

### Via Git (si vous utilisez Git)
```bash
git add index.html styles.css script.js
git commit -m "Fix: Corrections layout mobile, images et animations"
git push origin main
```

### Via cPanel/File Manager
1. Connectez-vous à cPanel
2. Ouvrez File Manager
3. Naviguez vers le répertoire public
4. Uploadez les fichiers modifiés

## Notes importantes

- ⚠️ **L'image `pie-chart-removebg-preview.png` doit absolument être présente** dans le dossier `images/`
- ⚠️ **Videz le cache du navigateur** après le déploiement
- ⚠️ **Vérifiez que les versions dans l'URL correspondent** (v=7 pour CSS, v=20251213 pour JS)
