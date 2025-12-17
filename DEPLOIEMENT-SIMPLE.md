# 🚀 Déploiement Simple - Étapes Rapides

## 📋 Fichiers modifiés à déployer

1. **`index.html`** (version v=15)
2. **`styles.css`** (version v=15)

## 🔧 Méthode 1 : Via Git (Recommandé)

Si votre site est connecté à Git, utilisez ces commandes dans le terminal :

```bash
# 1. Aller dans le dossier du projet
cd /Users/sampahstephane/Documents/webprojects/stephanesampah.com

# 2. Vérifier les fichiers modifiés
git status

# 3. Ajouter les fichiers modifiés
git add index.html styles.css

# 4. Créer un commit
git commit -m "Fix: Restauration layout original + corrections snaps, random-facts, pie-chart"

# 5. Envoyer vers le serveur
git push origin master
```

**Note** : Si votre branche s'appelle `main` au lieu de `master`, remplacez `master` par `main`.

## 🔧 Méthode 2 : Via FTP/SFTP

Si vous utilisez FTP (FileZilla, Cyberduck, etc.) :

1. **Connectez-vous à votre serveur** via votre client FTP
2. **Naviguez vers le répertoire public** (généralement `public_html/` ou `www/`)
3. **Uploadez ces 2 fichiers** :
   - `index.html`
   - `styles.css`
4. **Remplacez les anciens fichiers** si demandé

## 🔧 Méthode 3 : Via cPanel File Manager

1. **Connectez-vous à cPanel**
2. **Ouvrez File Manager**
3. **Naviguez vers `public_html/`** (ou le dossier de votre site)
4. **Uploadez les fichiers** :
   - Cliquez sur "Upload"
   - Sélectionnez `index.html` et `styles.css`
   - Remplacez les fichiers existants

## ✅ Vérification après déploiement

1. **Videz le cache du navigateur** :
   - Windows/Linux : `Ctrl + Shift + R`
   - Mac : `Cmd + Shift + R`

2. **Vérifiez la version CSS** dans la console du navigateur (F12) :
   ```javascript
   console.log(document.querySelector('link[href*="styles.css"]').href);
   ```
   Doit afficher : `styles.css?v=15`

3. **Vérifiez visuellement** :
   - ✅ Logo photo visible en desktop
   - ✅ Photo-fun correcte (pas énorme)
   - ✅ Text-main visible à gauche
   - ✅ Web-project et coder côte à côte
   - ✅ Pie-chart visible
   - ✅ Random-facts : image à droite, texte à gauche
   - ✅ Skills : barres verticales en desktop
   - ✅ Snaps : 5 images en 1 ligne en desktop
   - ✅ Projects : 2 colonnes en desktop

## 🐛 Si ça ne fonctionne pas

1. **Vérifiez que les fichiers sont bien uploadés** sur le serveur
2. **Videz complètement le cache** (navigation privée)
3. **Vérifiez les versions** dans la console
4. **Attendez quelques minutes** (cache serveur)

## 📝 Note importante

Les modifications sont **locales** sur votre ordinateur jusqu'à ce que vous les déployiez. Le site en ligne n'affichera les changements qu'après le déploiement.
