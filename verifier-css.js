// Script pour vérifier quelles règles CSS sont appliquées
// Copiez-collez ce script dans la console (F12) en mode mobile

(function() {
    console.clear();
    console.log('%c🔍 VÉRIFICATION DES RÈGLES CSS APPLIQUÉES', 'font-size: 16px; font-weight: bold; color: #0066ff;');
    
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth <= 768;
    
    console.log('Viewport:', viewportWidth + 'px');
    console.log('Mode:', isMobile ? '📱 MOBILE' : '🖥️ DESKTOP');
    console.log('');
    
    // Vérifier .pie-chart
    const pieChart = document.querySelector('.pie-chart, .col-12.pie-chart');
    if (pieChart) {
        const styles = window.getComputedStyle(pieChart);
        console.group('📦 .pie-chart / .col-12.pie-chart');
        console.log('display:', styles.display);
        console.log('flex-direction:', styles.flexDirection);
        console.log('width:', styles.width);
        console.log('max-width:', styles.maxWidth);
        console.log('padding:', styles.padding);
        console.log('margin:', styles.margin);
        console.log('text-align:', styles.textAlign);
        console.log('Élément:', pieChart);
        console.groupEnd();
    }
    
    // Vérifier .web-project
    const webProject = document.querySelector('.web-project');
    if (webProject) {
        const styles = window.getComputedStyle(webProject);
        console.group('📝 .web-project');
        console.log('display:', styles.display);
        console.log('width:', styles.width);
        console.log('max-width:', styles.maxWidth);
        console.log('margin:', styles.margin);
        console.log('margin-left:', styles.marginLeft);
        console.log('padding:', styles.padding);
        console.log('text-align:', styles.textAlign);
        console.log('float:', styles.float);
        console.log('clear:', styles.clear);
        console.log('Élément:', webProject);
        console.groupEnd();
    }
    
    // Vérifier .coder
    const coder = document.querySelector('.coder');
    if (coder) {
        const styles = window.getComputedStyle(coder);
        console.group('💻 .coder');
        console.log('display:', styles.display);
        console.log('width:', styles.width);
        console.log('max-width:', styles.maxWidth);
        console.log('margin:', styles.margin);
        console.log('margin-left:', styles.marginLeft);
        console.log('padding:', styles.padding);
        console.log('text-align:', styles.textAlign);
        console.log('float:', styles.float);
        console.log('clear:', styles.clear);
        console.log('Élément:', coder);
        console.groupEnd();
    }
    
    // Vérifier #img-pie
    const imgPie = document.getElementById('img-pie');
    if (imgPie) {
        const styles = window.getComputedStyle(imgPie);
        console.group('🖼️ #img-pie');
        console.log('display:', styles.display);
        console.log('position:', styles.position);
        console.log('top:', styles.top);
        console.log('left:', styles.left);
        console.log('transform:', styles.transform);
        console.log('width:', styles.width);
        console.log('max-width:', styles.maxWidth);
        console.log('margin:', styles.margin);
        console.log('clear:', styles.clear);
        console.log('float:', styles.float);
        console.log('Élément:', imgPie);
        console.groupEnd();
    }
    
    // Vérifier l'ordre des éléments
    console.group('📋 ORDRE DES ÉLÉMENTS DANS .pie-chart');
    if (pieChart) {
        const children = Array.from(pieChart.children);
        children.forEach((child, idx) => {
            const styles = window.getComputedStyle(child);
            console.log(`${idx + 1}. ${child.className || child.tagName}:`, {
                display: styles.display,
                order: styles.order,
                marginBottom: styles.marginBottom
            });
        });
    }
    console.groupEnd();
    
    // Vérifier les règles CSS chargées
    console.group('📄 RÈGLES CSS TROUVÉES');
    const allStyles = document.styleSheets;
    let foundRules = [];
    
    Array.from(allStyles).forEach((sheet, sheetIdx) => {
        try {
            Array.from(sheet.cssRules || []).forEach((rule, ruleIdx) => {
                if (rule.selectorText) {
                    if (rule.selectorText.includes('.pie-chart') || 
                        rule.selectorText.includes('.web-project') || 
                        rule.selectorText.includes('.coder') ||
                        rule.selectorText.includes('#img-pie')) {
                        foundRules.push({
                            sheet: sheet.href || 'inline',
                            selector: rule.selectorText,
                            media: rule.media ? rule.media.mediaText : 'all',
                            cssText: rule.cssText.substring(0, 200)
                        });
                    }
                }
            });
        } catch (e) {
            // Ignorer les erreurs CORS
        }
    });
    
    if (foundRules.length > 0) {
        console.table(foundRules.slice(0, 20));
    } else {
        console.log('Aucune règle trouvée');
    }
    console.groupEnd();
    
    console.log('%c✅ Vérification terminée', 'color: green; font-weight: bold;');
})();

