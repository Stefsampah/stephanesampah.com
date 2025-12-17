// Script pour FORCER le layout mobile style Adham Dannaway
// Copiez-collez ce script dans la console (F12) en mode mobile

(function() {
    console.clear();
    console.log('%c🔧 FORCE LAYOUT MOBILE - Style Adham Dannaway', 'font-size: 16px; font-weight: bold; color: #ff6600;');
    
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth <= 768;
    
    if (!isMobile) {
        console.warn('⚠️ Activez le mode mobile (Ctrl+Shift+M) puis ré-exécutez ce script.');
        return;
    }
    
    console.log('Viewport:', viewportWidth + 'px');
    console.log('Mode: 📱 MOBILE');
    console.log('');
    
    // 1. Forcer .pie-chart en display: block
    const pieChart = document.querySelector('.pie-chart, .col-12.pie-chart');
    if (pieChart) {
        const before = window.getComputedStyle(pieChart).display;
        pieChart.style.setProperty('display', 'block', 'important');
        pieChart.style.setProperty('width', '100%', 'important');
        pieChart.style.setProperty('max-width', '100%', 'important');
        pieChart.style.setProperty('padding', '0', 'important');
        pieChart.style.setProperty('margin', '0', 'important');
        pieChart.style.setProperty('text-align', 'center', 'important');
        const after = window.getComputedStyle(pieChart).display;
        console.log('✅ .pie-chart:', before, '→', after);
    }
    
    // 2. Forcer .web-project
    const webProject = document.querySelector('.web-project');
    if (webProject) {
        const before = window.getComputedStyle(webProject).display;
        webProject.style.setProperty('display', 'block', 'important');
        webProject.style.setProperty('width', '100%', 'important');
        webProject.style.setProperty('max-width', '100%', 'important');
        webProject.style.setProperty('margin', '0 auto 2.5rem auto', 'important');
        webProject.style.setProperty('margin-left', '0', 'important');
        webProject.style.setProperty('margin-right', '0', 'important');
        webProject.style.setProperty('padding', '0', 'important');
        webProject.style.setProperty('text-align', 'center', 'important');
        webProject.style.setProperty('float', 'none', 'important');
        webProject.style.setProperty('clear', 'both', 'important');
        webProject.style.setProperty('position', 'relative', 'important');
        const after = window.getComputedStyle(webProject).display;
        console.log('✅ .web-project:', before, '→', after);
    }
    
    // 3. Forcer .coder
    const coder = document.querySelector('.coder');
    if (coder) {
        const before = window.getComputedStyle(coder).display;
        coder.style.setProperty('display', 'block', 'important');
        coder.style.setProperty('width', '100%', 'important');
        coder.style.setProperty('max-width', '100%', 'important');
        coder.style.setProperty('margin', '0 auto 2.5rem auto', 'important');
        coder.style.setProperty('margin-left', '0', 'important');
        coder.style.setProperty('margin-right', '0', 'important');
        coder.style.setProperty('padding', '0', 'important');
        coder.style.setProperty('text-align', 'center', 'important');
        coder.style.setProperty('float', 'none', 'important');
        coder.style.setProperty('clear', 'both', 'important');
        coder.style.setProperty('position', 'relative', 'important');
        const after = window.getComputedStyle(coder).display;
        console.log('✅ .coder:', before, '→', after);
    }
    
    // 4. Forcer #img-pie en bas
    const imgPie = document.getElementById('img-pie');
    if (imgPie) {
        const before = {
            display: window.getComputedStyle(imgPie).display,
            position: window.getComputedStyle(imgPie).position,
            transform: window.getComputedStyle(imgPie).transform
        };
        imgPie.style.setProperty('display', 'block', 'important');
        imgPie.style.setProperty('position', 'relative', 'important');
        imgPie.style.setProperty('top', 'auto', 'important');
        imgPie.style.setProperty('left', 'auto', 'important');
        imgPie.style.setProperty('transform', 'none', 'important');
        imgPie.style.setProperty('margin', '2.5rem auto 0 auto', 'important');
        imgPie.style.setProperty('width', '100%', 'important');
        imgPie.style.setProperty('max-width', '300px', 'important');
        imgPie.style.setProperty('height', 'auto', 'important');
        imgPie.style.setProperty('clear', 'both', 'important');
        imgPie.style.setProperty('float', 'none', 'important');
        const after = {
            display: window.getComputedStyle(imgPie).display,
            position: window.getComputedStyle(imgPie).position,
            transform: window.getComputedStyle(imgPie).transform
        };
        console.log('✅ #img-pie:', before, '→', after);
    }
    
    // 5. Vérifier l'ordre des éléments
    console.log('');
    console.log('📋 ORDRE DES ÉLÉMENTS:');
    if (pieChart) {
        const children = Array.from(pieChart.children);
        children.forEach((child, idx) => {
            const tag = child.tagName.toLowerCase();
            const className = child.className || '';
            const id = child.id || '';
            console.log(`${idx + 1}. ${tag} ${className} ${id}`);
        });
    }
    
    console.log('');
    console.log('%c✅ Layout forcé ! Vérifiez visuellement si les éléments sont empilés verticalement.', 'color: green; font-weight: bold;');
})();

