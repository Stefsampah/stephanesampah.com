// DIAGNOSTIC COMPLET - Vérifier tous les problèmes
// Copiez-collez ce script dans la console (F12)

(function() {
    console.clear();
    console.log('%c🔍 DIAGNOSTIC COMPLET', 'font-size: 18px; font-weight: bold; color: #ff0066;');
    console.log('');
    
    // 1. Vérifier les versions des fichiers
    console.group('📦 VERSIONS DES FICHIERS');
    const cssLink = document.querySelector('link[href*="styles.css"]');
    const jsScript = Array.from(document.querySelectorAll('script[src*="script.js"]')).pop();
    console.log('CSS:', cssLink ? cssLink.href : 'NON TROUVÉ');
    console.log('JS:', jsScript ? jsScript.src : 'NON TROUVÉ');
    console.groupEnd();
    console.log('');
    
    // 2. Vérifier les images
    console.group('🖼️ VÉRIFICATION DES IMAGES');
    
    const imgPie = document.getElementById('img-pie');
    if (imgPie) {
        console.log('✅ #img-pie trouvé');
        console.log('  - src:', imgPie.src);
        console.log('  - complete:', imgPie.complete);
        console.log('  - naturalWidth:', imgPie.naturalWidth);
        console.log('  - naturalHeight:', imgPie.naturalHeight);
        console.log('  - display:', window.getComputedStyle(imgPie).display);
        console.log('  - visibility:', window.getComputedStyle(imgPie).visibility);
        console.log('  - opacity:', window.getComputedStyle(imgPie).opacity);
        console.log('  - width:', window.getComputedStyle(imgPie).width);
        console.log('  - height:', window.getComputedStyle(imgPie).height);
    } else {
        console.error('❌ #img-pie NON TROUVÉ');
    }
    
    const imgMain = document.querySelector('#img-main img.major');
    if (imgMain) {
        console.log('✅ #img-main img.major trouvé');
        console.log('  - src:', imgMain.src);
        console.log('  - complete:', imgMain.complete);
        console.log('  - display:', window.getComputedStyle(imgMain).display);
        console.log('  - visibility:', window.getComputedStyle(imgMain).visibility);
        console.log('  - opacity:', window.getComputedStyle(imgMain).opacity);
    } else {
        console.error('❌ #img-main img.major NON TROUVÉ');
    }
    
    const imgRandomFacts = document.querySelector('#img-random-facts img.major');
    if (imgRandomFacts) {
        console.log('✅ #img-random-facts img.major trouvé');
        console.log('  - src:', imgRandomFacts.src);
        console.log('  - complete:', imgRandomFacts.complete);
        console.log('  - display:', window.getComputedStyle(imgRandomFacts).display);
        console.log('  - visibility:', window.getComputedStyle(imgRandomFacts).visibility);
        console.log('  - opacity:', window.getComputedStyle(imgRandomFacts).opacity);
    } else {
        console.error('❌ #img-random-facts img.major NON TROUVÉ');
    }
    
    // Vérifier les snaps
    const snaps = document.querySelectorAll('#snaps .snap-item img');
    console.log('📸 Snaps trouvés:', snaps.length);
    snaps.forEach((img, idx) => {
        console.log(`  ${idx + 1}. ${img.src.split('/').pop()} - complete: ${img.complete}, naturalWidth: ${img.naturalWidth}`);
    });
    
    console.groupEnd();
    console.log('');
    
    // 3. Vérifier les animations
    console.group('🎬 VÉRIFICATION DES ANIMATIONS');
    
    const aboutIntro = document.querySelector('.about-intro');
    console.log('.about-intro:', aboutIntro ? '✅ TROUVÉ' : '❌ NON TROUVÉ');
    
    const textMain = document.getElementById('text-main');
    console.log('#text-main:', textMain ? '✅ TROUVÉ' : '❌ NON TROUVÉ');
    if (textMain) {
        console.log('  - classes:', textMain.className);
        console.log('  - visibility:', window.getComputedStyle(textMain).visibility);
    }
    
    const snapsContainer = document.getElementById('snaps');
    console.log('#snaps:', snapsContainer ? '✅ TROUVÉ' : '❌ NON TROUVÉ');
    if (snapsContainer) {
        console.log('  - classes:', snapsContainer.className);
        console.log('  - visibility:', window.getComputedStyle(snapsContainer).visibility);
    }
    
    // Vérifier si initScrollAnimations existe
    console.log('initScrollAnimations:', typeof initScrollAnimations === 'function' ? '✅ FONCTION EXISTE' : '❌ FONCTION N\'EXISTE PAS');
    
    console.groupEnd();
    console.log('');
    
    // 4. Vérifier la section skills
    console.group('📊 SECTION SKILLS');
    
    const barChart = document.querySelector('.bar-chart');
    if (barChart) {
        console.log('✅ .bar-chart trouvé');
        const styles = window.getComputedStyle(barChart);
        console.log('  - padding:', styles.padding);
        console.log('  - height:', styles.height);
        console.log('  - overflow-y:', styles.overflowY);
    } else {
        console.error('❌ .bar-chart NON TROUVÉ');
    }
    
    const percents = document.querySelectorAll('.bar-chart li .percent');
    console.log('Pourcentages trouvés:', percents.length);
    percents.forEach((percent, idx) => {
        const styles = window.getComputedStyle(percent);
        console.log(`  ${idx + 1}. ${percent.textContent.trim()} - top: ${styles.top}, font-size: ${styles.fontSize}`);
    });
    
    console.groupEnd();
    console.log('');
    
    // 5. Vérifier les erreurs JavaScript
    console.group('⚠️ ERREURS POTENTIELLES');
    
    // Vérifier si les images ont des erreurs
    const allImages = document.querySelectorAll('img');
    const brokenImages = [];
    allImages.forEach(img => {
        if (!img.complete || img.naturalWidth === 0) {
            brokenImages.push({
                src: img.src,
                alt: img.alt,
                id: img.id
            });
        }
    });
    
    if (brokenImages.length > 0) {
        console.warn('Images qui ne se chargent pas:');
        brokenImages.forEach(img => {
            console.warn('  -', img.src.split('/').pop(), img.id || img.alt);
        });
    } else {
        console.log('✅ Toutes les images semblent chargées');
    }
    
    console.groupEnd();
    console.log('');
    
    // 6. Recommandations
    console.group('💡 RECOMMANDATIONS');
    console.log('1. Videz le cache: Ctrl+Shift+R (Windows) ou Cmd+Shift+R (Mac)');
    console.log('2. Vérifiez la console pour des erreurs JavaScript');
    console.log('3. Vérifiez l\'onglet Network pour voir si les fichiers CSS/JS se chargent');
    console.log('4. Testez en navigation privée');
    console.log('5. Vérifiez que les fichiers sont bien sauvegardés sur le serveur');
    console.groupEnd();
    
    console.log('%c✅ Diagnostic terminé', 'color: green; font-weight: bold; font-size: 14px;');
})();
