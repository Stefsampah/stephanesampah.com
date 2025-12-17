// Script de diagnostic overflow pour la console du navigateur
// Copiez-collez ce script dans la console (F12) pour diagnostiquer les problèmes d'overflow

(function() {
    console.clear();
    console.log('%c🔍 DIAGNOSTIC OVERFLOW MOBILE - VERSION COMPLÈTE', 'font-size: 16px; font-weight: bold; color: #0066ff;');
    
    const viewportWidth = window.innerWidth;
    const bodyWidth = document.body.scrollWidth;
    const isMobile = viewportWidth <= 768;
    
    // Avertissement si on n'est pas en mode mobile
    if (!isMobile) {
        console.warn('%c⚠️ ATTENTION: Vous n\'êtes PAS en mode mobile !', 'font-size: 14px; font-weight: bold; color: orange;');
        console.log('Viewport actuel:', viewportWidth + 'px (mode desktop)');
        console.log('Pour tester l\'overflow mobile:');
        console.log('1. Appuyez sur Ctrl+Shift+M (ou Cmd+Shift+M sur Mac)');
        console.log('2. Sélectionnez un appareil mobile (ex: iPhone 12 Pro)');
        console.log('3. Rechargez la page');
        console.log('4. Ré-exécutez ce script');
        console.log('---');
    }
    
    console.group('📊 Informations générales');
    console.log('Viewport width:', viewportWidth + 'px');
    console.log('Mode:', isMobile ? '📱 MOBILE' : '🖥️ DESKTOP');
    console.log('Body scrollWidth:', bodyWidth + 'px');
    console.log('Différence:', (bodyWidth - viewportWidth) + 'px');
    console.log('Overflow détecté:', bodyWidth > viewportWidth ? '❌ OUI' : '✅ NON');
    if (!isMobile) {
        console.warn('⚠️ Ce diagnostic est conçu pour mobile (< 768px). Activez le mode mobile !');
    }
    console.groupEnd();
    
    // 1. Trouver les éléments qui dépassent
    console.group('🔎 Éléments qui dépassent (scrollWidth > viewport)');
    const overflowElements = [];
    document.querySelectorAll('*').forEach(el => {
        // Ignorer les extensions
        if (el.classList.contains('terminal-object') || 
            el.hasAttribute('data-v-') || 
            el.closest('[data-v-]')) {
            return;
        }
        
        const rect = el.getBoundingClientRect();
        const scrollWidth = el.scrollWidth;
        
        if (scrollWidth > viewportWidth || rect.right > viewportWidth + 10) {
            overflowElements.push({
                element: el,
                tag: el.tagName,
                id: el.id || '(aucun)',
                class: el.className || '(aucune)',
                scrollWidth: scrollWidth,
                right: rect.right,
                computedWidth: window.getComputedStyle(el).width,
                computedMaxWidth: window.getComputedStyle(el).maxWidth,
                styleInline: el.getAttribute('style') || '(aucun)'
            });
        }
    });
    
    if (overflowElements.length > 0) {
        console.table(overflowElements.slice(0, 15).map(item => ({
            Tag: item.tag,
            ID: item.id,
            Class: item.class.substring(0, 30),
            ScrollWidth: item.scrollWidth + 'px',
            Right: item.right.toFixed(0) + 'px',
            ComputedWidth: item.computedWidth,
            MaxWidth: item.computedMaxWidth
        })));
        
        console.log('📋 Top 5 éléments à inspecter:');
        overflowElements.slice(0, 5).forEach((item, idx) => {
            console.log(`${idx + 1}.`, item.element);
            if (item.styleInline !== '(aucun)') {
                console.log('   Style inline:', item.styleInline);
            }
        });
    } else {
        console.log('✅ Aucun élément ne dépasse');
    }
    console.groupEnd();
    
    // 2. Vérifier les styles inline problématiques
    console.group('🎨 Styles inline avec largeurs fixes (>400px)');
    const inlineStyleElements = Array.from(document.querySelectorAll('[style]'))
        .filter(el => {
            // Ignorer les extensions
            return !el.classList.contains('terminal-object') &&
                   !el.hasAttribute('data-v-') &&
                   !el.closest('[data-v-]');
        })
        .filter(el => {
            const style = el.getAttribute('style') || '';
            const widthMatch = style.match(/width:\s*(\d+)px/i);
            return widthMatch && parseInt(widthMatch[1]) > 400;
        });
    
    if (inlineStyleElements.length > 0) {
        inlineStyleElements.forEach(el => {
            console.log('⚠️', el);
            console.log('   Style:', el.getAttribute('style'));
            console.log('---');
        });
    } else {
        console.log('✅ Aucun style inline problématique trouvé');
    }
    console.groupEnd();
    
    // 3. Vérifier les images
    console.group('🖼️ Images avec largeurs problématiques');
    const problematicImages = [];
    document.querySelectorAll('img').forEach(img => {
        const rect = img.getBoundingClientRect();
        const naturalWidth = img.naturalWidth || 0;
        const computedWidth = window.getComputedStyle(img).width;
        const computedMaxWidth = window.getComputedStyle(img).maxWidth;
        
        if (rect.width > viewportWidth || naturalWidth > viewportWidth) {
            problematicImages.push({
                element: img,
                src: img.src.substring(0, 50),
                naturalWidth: naturalWidth + 'px',
                computedWidth: computedWidth,
                computedMaxWidth: computedMaxWidth,
                actualWidth: rect.width + 'px',
                styleInline: img.getAttribute('style') || '(aucun)'
            });
        }
    });
    
    if (problematicImages.length > 0) {
        console.table(problematicImages);
        console.log('📋 Images à inspecter:');
        problematicImages.forEach((item, idx) => {
            console.log(`${idx + 1}.`, item.element);
        });
    } else {
        console.log('✅ Toutes les images sont responsive');
    }
    console.groupEnd();
    
    // 4. Vérifier les sections spécifiques
    console.group('📦 Sections pie-chart et bar-chart');
    const pieChart = document.querySelector('.pie-chart, #pie-chart');
    const barChart = document.querySelector('.bar-chart, #bar-chart');
    
    [pieChart, barChart].forEach(section => {
        if (section) {
            const rect = section.getBoundingClientRect();
            const scrollWidth = section.scrollWidth;
            console.log(section.className || section.id, ':');
            console.log('  - scrollWidth:', scrollWidth + 'px');
            console.log('  - right:', rect.right.toFixed(0) + 'px');
            console.log('  - computed width:', window.getComputedStyle(section).width);
            console.log('  - computed max-width:', window.getComputedStyle(section).maxWidth);
            console.log('  - overflow-x:', window.getComputedStyle(section).overflowX);
            if (scrollWidth > viewportWidth) {
                console.warn('  ⚠️ DÉPASSE !');
            }
            console.log('---');
        }
    });
    console.groupEnd();
    
    // 5. Résumé et recommandations
    console.group('💡 Recommandations');
    if (!isMobile) {
        console.warn('⚠️ TESTEZ EN MODE MOBILE !');
        console.log('Pour activer le mode mobile dans Chrome DevTools:');
        console.log('1. Appuyez sur Ctrl+Shift+M (Windows) ou Cmd+Shift+M (Mac)');
        console.log('2. Sélectionnez un appareil (ex: iPhone 12 Pro - 390px)');
        console.log('3. Rechargez la page (F5)');
        console.log('4. Ré-exécutez ce script');
        console.log('');
        console.log('OU testez sur un vrai appareil mobile:');
        console.log('1. Ouvrez votre site sur votre téléphone');
        console.log('2. Ouvrez les DevTools (si possible)');
        console.log('3. Vérifiez s\'il y a un scroll horizontal');
    } else if (bodyWidth > viewportWidth) {
        console.log('❌ Overflow détecté sur mobile !');
        console.log('1. Vérifiez les éléments listés ci-dessus');
        console.log('2. Assurez-vous que toutes les images ont max-width: 100%');
        console.log('3. Vérifiez les marges négatives sur .row');
        console.log('4. Vérifiez les éléments avec position: absolute');
        console.log('5. Videz le cache (Ctrl+Shift+R)');
    } else {
        console.log('✅ Aucun overflow détecté au niveau du body');
        console.log('Si vous voyez toujours un scroll horizontal sur mobile réel:');
        console.log('1. Vérifiez les éléments listés ci-dessus');
        console.log('2. Videz le cache du navigateur (Ctrl+Shift+R)');
        console.log('3. Testez en navigation privée');
        console.log('4. Vérifiez que le CSS est bien chargé (onglet Network)');
    }
    console.groupEnd();
    
    console.log('%c✅ Diagnostic terminé', 'color: green; font-weight: bold;');
})();
