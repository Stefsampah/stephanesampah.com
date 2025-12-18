# 💾 Sauvegarder vos modifications et voir vendredi dernier

## Option 1 : Stash (recommandé - sauvegarde temporaire)

**1. Sauvegarder vos modifications actuelles :**
```bash
git stash push -m "Sauvegarde avant de voir version vendredi"
```

**2. Voir la version de vendredi :**
```bash
git checkout 7bd1c7f
```

**3. Tester localement :**
```bash
python3 -m http.server 8000
```

**4. Revenir à la version actuelle :**
```bash
git checkout master
```

**5. Récupérer vos modifications sauvegardées :**
```bash
git stash pop
```

## Option 2 : Commit temporaire (si vous voulez garder un historique)

**1. Commiter vos modifications actuelles :**
```bash
git add .
git commit -m "WIP: Modifications en cours avant retour version vendredi"
```

**2. Voir la version de vendredi :**
```bash
git checkout 7bd1c7f
```

**3. Revenir à la version actuelle :**
```bash
git checkout master
```

## Option 3 : Nouvelle branche (pour garder les deux versions)

**1. Créer une branche avec vos modifications actuelles :**
```bash
git checkout -b sauvegarde-modifications-actuelles
git add .
git commit -m "Sauvegarde modifications actuelles"
```

**2. Revenir sur master et voir vendredi :**
```bash
git checkout master
git checkout 7bd1c7f
```

**3. Revenir à vos modifications :**
```bash
git checkout master
git checkout sauvegarde-modifications-actuelles
```

