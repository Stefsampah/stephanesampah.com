#!/bin/bash

# Script de déploiement automatique
# Usage: ./deploy.sh

echo "🚀 Déploiement des corrections..."
echo ""

# Vérifier que nous sommes dans le bon répertoire
if [ ! -f "index.html" ]; then
    echo "❌ Erreur: index.html non trouvé. Assurez-vous d'être dans le bon répertoire."
    exit 1
fi

# Vérifier Git
if ! command -v git &> /dev/null; then
    echo "❌ Git n'est pas installé"
    exit 1
fi

# Vérifier le statut Git
echo "📋 Vérification du statut Git..."
git status --short

echo ""
read -p "Voulez-vous continuer le déploiement ? (o/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[OoYy]$ ]]; then
    echo "❌ Déploiement annulé"
    exit 1
fi

# Ajouter les fichiers modifiés
echo "📦 Ajout des fichiers..."
git add index.html styles.css script.js

# Commit
echo "💾 Création du commit..."
git commit -m "Fix: Corrections layout mobile style Adham Dannaway - Images, animations et section skills corrigées

- Structure HTML reprenant exactement Adham Dannaway
- Image pie-chart: pie-chart-removebg-preview.png
- Images visibles par défaut
- Section skills: padding et espacement corrigés
- Animations restaurées
- Versions: styles.css?v=7, script.js?v=20251213"

# Push
echo "⬆️  Envoi vers le serveur..."
git push

echo ""
echo "✅ Déploiement terminé !"
echo ""
echo "📝 Prochaines étapes:"
echo "1. Videz le cache: Ctrl+Shift+R (Windows) ou Cmd+Shift+R (Mac)"
echo "2. Vérifiez les versions dans la console"
echo "3. Testez visuellement toutes les sections"
