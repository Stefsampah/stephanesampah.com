#!/bin/bash

# Script pour démarrer un serveur local simple
# Usage: ./start-server.sh

echo "🚀 Démarrage du serveur local..."
echo ""
echo "Choisissez une option:"
echo "1) Python (recommandé)"
echo "2) Node.js (http-server)"
echo "3) Ouvrir directement dans le navigateur"
echo ""
read -p "Votre choix (1-3): " choice

case $choice in
    1)
        echo "📦 Démarrage avec Python..."
        if command -v python3 &> /dev/null; then
            echo "✅ Serveur démarré sur http://localhost:8000"
            echo "Appuyez sur Ctrl+C pour arrêter"
            python3 -m http.server 8000
        else
            echo "❌ Python3 n'est pas installé"
            exit 1
        fi
        ;;
    2)
        echo "📦 Démarrage avec Node.js..."
        if command -v npx &> /dev/null; then
            echo "✅ Serveur démarré sur http://localhost:8080"
            echo "Appuyez sur Ctrl+C pour arrêter"
            npx http-server -p 8080
        else
            echo "❌ Node.js/npx n'est pas installé"
            exit 1
        fi
        ;;
    3)
        echo "📂 Ouverture du fichier index.html..."
        if [[ "$OSTYPE" == "darwin"* ]]; then
            open index.html
        elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
            xdg-open index.html
        else
            echo "Ouvrez index.html dans votre navigateur"
        fi
        ;;
    *)
        echo "❌ Choix invalide"
        exit 1
        ;;
esac

