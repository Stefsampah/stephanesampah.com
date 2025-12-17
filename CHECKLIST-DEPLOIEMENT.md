# ✅ Checklist de Déploiement

## Avant le déploiement

- [ ] Vérifier que `pie-chart-removebg-preview.png` existe dans `images/`
- [ ] Vérifier que toutes les images existent (IMG_2206.jpg, location.jpg, etc.)
- [ ] Vérifier les versions dans `index.html` :
  - [ ] `styles.css?v=7`
  - [ ] `script.js?v=20251213`

## Fichiers à déployer

### Fichiers modifiés (OBLIGATOIRES)
- [ ] `index.html` - Structure Adham Dannaway + script inline
- [ ] `styles.css` - Version 7 avec corrections
- [ ] `script.js` - Version 20251213 avec animations

### Images (vérifier présence)
- [ ] `images/pie-chart-removebg-preview.png` ⚠️ CRITIQUE
- [ ] `images/photo-fun.jpg`
- [ ] `images/IMG_2206.jpg`
- [ ] `images/location.jpg`
- [ ] `images/mc-hammer.gif`
- [ ] `images/workspace.jpg`
- [ ] `images/sharks.jpg`
- [ ] `images/random-facts.jpg`

## Après le déploiement

- [ ] Vider le cache : `Ctrl+Shift+R` ou `Cmd+Shift+R`
- [ ] Vérifier les versions dans la console
- [ ] Exécuter `diagnostic-complet.js` dans la console
- [ ] Vérifier visuellement :
  - [ ] Section about : texte à gauche, photo à droite
  - [ ] Images snaps : 5 images visibles
  - [ ] Image pie-chart : `pie-chart-removebg-preview.png` visible
  - [ ] Image random-facts : visible
  - [ ] Section skills : pourcentages bien visibles et espacés
  - [ ] Animations : se déclenchent au scroll

## En cas de problème

1. Vérifiez que les fichiers sont bien uploadés
2. Vérifiez les permissions des fichiers (644)
3. Videz le cache du navigateur
4. Testez en navigation privée
5. Utilisez `forcer-corrections.js` dans la console
