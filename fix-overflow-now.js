// Script de correction IMMÉDIATE de l'overflow
// Copiez-collez ce script dans la console (F12) pour corriger l'overflow immédiatement

(function() {
    console.clear();
    console.log('%c🔧 CORRECTION OVERFLOW IMMÉDIATE - VERSION ULTRA AGRESSIVE', 'font-size: 16px; font-weight: bold; color: #ff6600;');
    
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth <= 768;
    
    if (!isMobile) {
        console.warn('⚠️ Vous n\'êtes pas en mode mobile. Activez le mode mobile (Ctrl+Shift+M) puis ré-exécutez ce script.');
        return;
    }
    
    console.log('Viewport:', viewportWidth + 'px');
    console.log('Mode: 📱 MOBILE');
    console.log('');
    
    // INJECTER UN STYLE TAG DIRECTEMENT DANS LE HEAD (priorité maximale)
    let styleTag = document.getElementById('force-overflow-fix');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'force-overflow-fix';
        styleTag.textContent = `
            @media screen and (max-width: 768px) {
                html, body {
                    overflow-x: hidden !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    position: relative !important;
                }
                
                section.dark,
                .dark,
                section.dark.nopad-b,
                .dark.nopad-b {
                    overflow-x: hidden !important;
                    overflow: hidden !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    margin-left: 0 !important;
                    margin-right: 0 !important;
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                    box-sizing: border-box !important;
                    position: relative !important;
                }
                
                .dark .row,
                section.dark .row {
                    overflow-x: hidden !important;
                    overflow: hidden !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    margin-left: 0 !important;
                    margin-right: 0 !important;
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                    box-sizing: border-box !important;
                }
                
                .dark .col-12,
                .dark .col-5,
                .dark .col-7,
                section.dark .col-12 {
                    width: 100% !important;
                    max-width: 100% !important;
                    padding-left: 1rem !important;
                    padding-right: 1rem !important;
                    margin-left: 0 !important;
                    margin-right: 0 !important;
                    box-sizing: border-box !important;
                    overflow-x: hidden !important;
                }
                
                img {
                    max-width: 100% !important;
                    height: auto !important;
                    width: auto !important;
                }
            }
        `;
        document.head.appendChild(styleTag);
        console.log('✅ Style tag injecté dans le head');
    } else {
        console.log('✅ Style tag déjà présent');
    }
    
    let fixedCount = 0;
    
    // 1. Forcer html et body
    document.documentElement.style.setProperty('overflow-x', 'hidden', 'important');
    document.body.style.setProperty('overflow-x', 'hidden', 'important');
    document.body.style.setProperty('width', '100%', 'important');
    document.body.style.setProperty('max-width', '100%', 'important');
    console.log('✅ html et body corrigés');
    
    // 2. Forcer TOUTES les sections .dark
    const darkSections = document.querySelectorAll('section.dark, .dark, section.dark.nopad-b, .dark.nopad-b');
    darkSections.forEach((el, idx) => {
        const beforeWidth = el.scrollWidth;
        const beforeRight = el.getBoundingClientRect().right;
        
        el.style.setProperty('overflow-x', 'hidden', 'important');
        el.style.setProperty('overflow', 'hidden', 'important');
        el.style.setProperty('width', '100%', 'important');
        el.style.setProperty('max-width', '100%', 'important');
        el.style.setProperty('margin-left', '0', 'important');
        el.style.setProperty('margin-right', '0', 'important');
        el.style.setProperty('padding-left', '0', 'important');
        el.style.setProperty('padding-right', '0', 'important');
        el.style.setProperty('box-sizing', 'border-box', 'important');
        el.style.setProperty('position', 'relative', 'important');
        el.style.setProperty('left', '0', 'important');
        el.style.setProperty('right', 'auto', 'important');
        el.style.setProperty('transform', 'none', 'important');
        
        const afterWidth = el.scrollWidth;
        const afterRight = el.getBoundingClientRect().right;
        
        if (beforeWidth > viewportWidth || beforeRight > viewportWidth) {
            fixedCount++;
            console.log(`✅ Section .dark #${idx + 1} corrigée:`, {
                avant: { scrollWidth: beforeWidth + 'px', right: beforeRight.toFixed(0) + 'px' },
                après: { scrollWidth: afterWidth + 'px', right: afterRight.toFixed(0) + 'px' }
            });
        }
    });
    
    // 3. Forcer tous les .row dans .dark
    const darkRows = document.querySelectorAll('.dark .row, section.dark .row');
    darkRows.forEach((el, idx) => {
        const beforeWidth = el.scrollWidth;
        el.style.setProperty('overflow-x', 'hidden', 'important');
        el.style.setProperty('overflow', 'hidden', 'important');
        el.style.setProperty('width', '100%', 'important');
        el.style.setProperty('max-width', '100%', 'important');
        el.style.setProperty('margin-left', '0', 'important');
        el.style.setProperty('margin-right', '0', 'important');
        el.style.setProperty('padding-left', '0', 'important');
        el.style.setProperty('padding-right', '0', 'important');
        el.style.setProperty('box-sizing', 'border-box', 'important');
        
        const afterWidth = el.scrollWidth;
        if (beforeWidth > viewportWidth) {
            fixedCount++;
            console.log(`✅ .row #${idx + 1} dans .dark corrigé:`, {
                avant: beforeWidth + 'px',
                après: afterWidth + 'px'
            });
        }
    });
    
    // 4. Forcer toutes les colonnes
    const cols = document.querySelectorAll('.dark .col-12, .dark .col-5, .dark .col-7, section.dark .col-12');
    cols.forEach((el, idx) => {
        const beforeWidth = el.scrollWidth;
        el.style.setProperty('width', '100%', 'important');
        el.style.setProperty('max-width', '100%', 'important');
        el.style.setProperty('padding-left', '1rem', 'important');
        el.style.setProperty('padding-right', '1rem', 'important');
        el.style.setProperty('margin-left', '0', 'important');
        el.style.setProperty('margin-right', '0', 'important');
        el.style.setProperty('box-sizing', 'border-box', 'important');
        el.style.setProperty('overflow-x', 'hidden', 'important');
        
        const afterWidth = el.scrollWidth;
        if (beforeWidth > viewportWidth) {
            fixedCount++;
            console.log(`✅ Colonne #${idx + 1} corrigée:`, {
                avant: beforeWidth + 'px',
                après: afterWidth + 'px'
            });
        }
    });
    
    // 5. Forcer toutes les images
    const images = document.querySelectorAll('img');
    images.forEach((img, idx) => {
        const beforeWidth = img.getBoundingClientRect().width;
        img.style.setProperty('max-width', '100%', 'important');
        img.style.setProperty('width', 'auto', 'important');
        img.style.setProperty('height', 'auto', 'important');
        img.style.setProperty('box-sizing', 'border-box', 'important');
        
        const afterWidth = img.getBoundingClientRect().width;
        if (beforeWidth > viewportWidth) {
            fixedCount++;
            console.log(`✅ Image #${idx + 1} corrigée:`, {
                src: img.src.substring(0, 50),
                avant: beforeWidth.toFixed(0) + 'px',
                après: afterWidth.toFixed(0) + 'px'
            });
        }
    });
    
    // 6. Vérifier le résultat final
    const finalBodyWidth = document.body.scrollWidth;
    const finalViewportWidth = window.innerWidth;
    
    console.log('');
    console.log('📊 RÉSULTAT FINAL:');
    console.log('Body scrollWidth:', finalBodyWidth + 'px');
    console.log('Viewport width:', finalViewportWidth + 'px');
    console.log('Différence:', (finalBodyWidth - finalViewportWidth) + 'px');
    
    if (finalBodyWidth > finalViewportWidth) {
        console.warn('⚠️ Overflow toujours présent !');
        console.log('Éléments qui dépassent encore:');
        document.querySelectorAll('*').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.right > finalViewportWidth + 10) {
                console.log('  -', el.tagName, el.className, 'right:', rect.right.toFixed(0) + 'px');
            }
        });
    } else {
        console.log('%c✅ OVERFLOW CORRIGÉ !', 'color: green; font-weight: bold;');
    }
    
    console.log('');
    console.log(`Total d'éléments corrigés: ${fixedCount}`);
    console.log('%c✅ Correction terminée', 'color: green; font-weight: bold;');
})();
