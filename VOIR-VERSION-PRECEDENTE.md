# 🔍 Voir la version de vendredi dernier (temporairement)

## Étape 1 : Voir l'historique des commits

```bash
cd /Users/sampahstephane/Documents/webprojects/stephanesampah.com
git log --oneline --date=short --format="%h %ad %s" | head -20
```

Cela vous montrera les 20 derniers commits avec leurs dates.

## Étape 2 : Trouver le commit de vendredi dernier

Cherchez dans la liste le commit du vendredi (probablement le 13 décembre 2024 ou autour).

## Étape 3 : Voir temporairement cette version

Une fois que vous avez trouvé le hash du commit (par exemple `7bd1c7f`), exécutez :

```bash
git checkout <hash-du-commit>
```

Par exemple :
```bash
git checkout 7bd1c7f
```

⚠️ **ATTENTION** : Cela mettra votre répertoire en mode "detached HEAD". C'est normal et temporaire.

## Étape 4 : Tester localement

```bash
python3 -m http.server 8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

## Étape 5 : Revenir à la version actuelle

Quand vous avez fini de regarder, revenez à la version actuelle :

```bash
git checkout main
```

ou

```bash
git checkout master
```

(dépend de votre branche principale)

## Alternative : Voir les fichiers sans changer de branche

Si vous voulez juste voir un fichier spécifique sans changer de branche :

```bash
git show <hash>:index.html > index-vendredi.html
git show <hash>:styles.css > styles-vendredi.css
```

Puis ouvrez ces fichiers dans votre éditeur pour comparer.


