// Script de test pour vérifier le layout style Adham Dannaway
// Copiez-collez ce script dans la console (F12) en mode mobile

(function() {
    console.clear();
    console.log('%c🧪 TEST LAYOUT ADHAM DANNAWAY', 'font-size: 16px; font-weight: bold; color: #0066ff;');
    
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth <= 768;
    
    console.log('Viewport width:', viewportWidth + 'px');
    if (!isMobile && viewportWidth > 768) {
        console.warn('⚠️ Largeur > 768px. Si vous êtes en mode mobile, continuez quand même.');
        console.log('💡 Pour forcer le test, le script continuera...');
    }
    console.log('');
    
    // Vérifier .pie-chart
    const pieChart = document.querySelector('.pie-chart, .col-12.pie-chart');
    if (pieChart) {
        const styles = window.getComputedStyle(pieChart);
        const rect = pieChart.getBoundingClientRect();
        console.group('📦 .pie-chart / .col-12.pie-chart');
        console.log('Dimensions:', rect.width + 'x' + rect.height);
        console.log('display:', styles.display);
        console.log('width:', styles.width);
        console.log('max-width:', styles.maxWidth);
        console.log('margin:', styles.margin);
        console.log('text-align:', styles.textAlign);
        console.groupEnd();
    }
    
    // Vérifier .web-project
    const webProject = document.querySelector('.web-project');
    if (webProject) {
        const styles = window.getComputedStyle(webProject);
        const rect = webProject.getBoundingClientRect();
        console.group('📝 .web-project (devrait être comme .designer d\'Adham)');
        console.log('Dimensions:', rect.width + 'x' + rect.height);
        console.log('display:', styles.display);
        console.log('width:', styles.width);
        console.log('max-width:', styles.maxWidth);
        console.log('margin:', styles.margin);
        console.log('text-align:', styles.textAlign);
        console.log('float:', styles.float);
        console.log('clear:', styles.clear);
        console.groupEnd();
    }
    
    // Vérifier .coder
    const coder = document.querySelector('.coder');
    if (coder) {
        const styles = window.getComputedStyle(coder);
        const rect = coder.getBoundingClientRect();
        console.group('💻 .coder');
        console.log('Dimensions:', rect.width + 'x' + rect.height);
        console.log('display:', styles.display);
        console.log('width:', styles.width);
        console.log('max-width:', styles.maxWidth);
        console.log('margin:', styles.margin);
        console.log('text-align:', styles.textAlign);
        console.groupEnd();
    }
    
    // Vérifier #img-pie
    const imgPie = document.getElementById('img-pie');
    if (imgPie) {
        const styles = window.getComputedStyle(imgPie);
        const rect = imgPie.getBoundingClientRect();
        console.group('🖼️ #img-pie');
        console.log('Dimensions:', rect.width + 'x' + rect.height);
        console.log('display:', styles.display);
        console.log('position:', styles.position);
        console.log('margin:', styles.margin);
        console.log('clear:', styles.clear);
        console.groupEnd();
    }
    
    // Vérifier l'ordre des éléments
    console.group('📋 ORDRE DES ÉLÉMENTS DANS .pie-chart');
    if (pieChart) {
        const children = Array.from(pieChart.children);
        children.forEach((child, idx) => {
            const tag = child.tagName.toLowerCase();
            const className = child.className || '';
            const id = child.id || '';
            const rect = child.getBoundingClientRect();
            console.log(`${idx + 1}. ${tag} ${className} ${id} - ${rect.width}x${rect.height}`);
        });
    }
    console.groupEnd();
    
    // Comparaison avec le site d'Adham
    console.group('📊 COMPARAISON AVEC ADHAM DANNAWAY');
    console.log('Sur le site d\'Adham:');
    console.log('- .designer et .coder: width: auto, margin: 0 auto, text-align: center');
    console.log('- h2: centré, font-size: ~1.75rem');
    console.log('- .ul: display: inline-block, text-align: left, margin: 0 auto');
    console.log('- #img-pie: position: relative, margin: 2.5rem auto, en bas');
    console.log('');
    console.log('Votre site:');
    if (webProject) {
        const styles = window.getComputedStyle(webProject);
        console.log('- .web-project width:', styles.width);
        console.log('- .web-project margin:', styles.margin);
        console.log('- .web-project text-align:', styles.textAlign);
    }
    console.groupEnd();
    
    console.log('%c✅ Test terminé', 'color: green; font-weight: bold;');
})();
