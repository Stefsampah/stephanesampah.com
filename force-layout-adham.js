// Script ULTRA-AGRESSIF pour forcer le layout style Adham Dannaway
// Copiez-collez ce script dans la console (F12) en mode mobile
// OU ajoutez-le à la fin de script.js

(function() {
    console.clear();
    console.log('%c🔧 FORCE LAYOUT ADHAM DANNAWAY - ULTRA-AGRESSIF', 'font-size: 16px; font-weight: bold; color: #ff0066;');
    
    const viewportWidth = window.innerWidth;
    const isMobile = viewportWidth <= 768;
    
    if (!isMobile && viewportWidth > 768) {
        console.warn('⚠️ Largeur > 768px. Le script va quand même forcer les styles...');
    }
    
    // Fonction pour forcer un style avec !important
    function forceStyle(element, property, value) {
        if (!element) return;
        element.style.setProperty(property, value, 'important');
        // Vérifier que ça a bien été appliqué
        const computed = window.getComputedStyle(element);
        const applied = computed.getPropertyValue(property);
        if (applied !== value && value !== 'auto') {
            console.warn(`⚠️ ${property}: ${value} n'a pas été appliqué, valeur actuelle: ${applied}`);
        }
    }
    
    // 1. Forcer .pie-chart container
    const pieChart = document.querySelector('.pie-chart, .col-12.pie-chart');
    if (pieChart) {
        console.log('📦 Correction de .pie-chart...');
        forceStyle(pieChart, 'display', 'block');
        forceStyle(pieChart, 'width', '100%');
        forceStyle(pieChart, 'max-width', '100%');
        forceStyle(pieChart, 'padding', '0');
        forceStyle(pieChart, 'margin', '0 auto');
        forceStyle(pieChart, 'text-align', 'center');
        forceStyle(pieChart, 'overflow', 'visible');
        forceStyle(pieChart, 'box-sizing', 'border-box');
    }
    
    // 2. Forcer .web-project - EXACTEMENT comme .designer d'Adham
    const webProject = document.querySelector('.web-project');
    if (webProject) {
        console.log('📝 Correction de .web-project...');
        const before = {
            width: window.getComputedStyle(webProject).width,
            margin: window.getComputedStyle(webProject).margin,
            textAlign: window.getComputedStyle(webProject).textAlign
        };
        
        forceStyle(webProject, 'display', 'block');
        forceStyle(webProject, 'width', 'auto');
        forceStyle(webProject, 'max-width', '100%');
        forceStyle(webProject, 'min-width', 'auto');
        forceStyle(webProject, 'margin', '0 auto 2.5rem auto');
        forceStyle(webProject, 'margin-left', 'auto');
        forceStyle(webProject, 'margin-right', 'auto');
        forceStyle(webProject, 'margin-top', '0');
        forceStyle(webProject, 'padding', '0');
        forceStyle(webProject, 'text-align', 'center');
        forceStyle(webProject, 'float', 'none');
        forceStyle(webProject, 'clear', 'both');
        forceStyle(webProject, 'position', 'relative');
        forceStyle(webProject, 'flex', 'none');
        forceStyle(webProject, 'align-self', 'auto');
        forceStyle(webProject, 'box-sizing', 'border-box');
        
        const after = {
            width: window.getComputedStyle(webProject).width,
            margin: window.getComputedStyle(webProject).margin,
            textAlign: window.getComputedStyle(webProject).textAlign
        };
        
        console.log('AVANT:', before);
        console.log('APRÈS:', after);
        
        // Forcer h2 dans .web-project
        const h2 = webProject.querySelector('h2');
        if (h2) {
            forceStyle(h2, 'display', 'block');
            forceStyle(h2, 'width', 'auto');
            forceStyle(h2, 'max-width', '100%');
            forceStyle(h2, 'margin', '0 auto 1.5rem auto');
            forceStyle(h2, 'text-align', 'center');
            forceStyle(h2, 'font-size', '1.75rem');
        }
        
        // Forcer .ul dans .web-project
        const ul = webProject.querySelector('.ul');
        if (ul) {
            forceStyle(ul, 'display', 'inline-block');
            forceStyle(ul, 'width', 'auto');
            forceStyle(ul, 'max-width', '100%');
            forceStyle(ul, 'margin', '0 auto');
            forceStyle(ul, 'text-align', 'left');
        }
    }
    
    // 3. Forcer .coder - EXACTEMENT comme .coder d'Adham
    const coder = document.querySelector('.coder');
    if (coder) {
        console.log('💻 Correction de .coder...');
        const before = {
            width: window.getComputedStyle(coder).width,
            margin: window.getComputedStyle(coder).margin,
            textAlign: window.getComputedStyle(coder).textAlign
        };
        
        forceStyle(coder, 'display', 'block');
        forceStyle(coder, 'width', 'auto');
        forceStyle(coder, 'max-width', '100%');
        forceStyle(coder, 'min-width', 'auto');
        forceStyle(coder, 'margin', '0 auto 2.5rem auto');
        forceStyle(coder, 'margin-left', 'auto');
        forceStyle(coder, 'margin-right', 'auto');
        forceStyle(coder, 'margin-top', '0');
        forceStyle(coder, 'padding', '0');
        forceStyle(coder, 'text-align', 'center');
        forceStyle(coder, 'float', 'none');
        forceStyle(coder, 'clear', 'both');
        forceStyle(coder, 'position', 'relative');
        forceStyle(coder, 'flex', 'none');
        forceStyle(coder, 'align-self', 'auto');
        forceStyle(coder, 'box-sizing', 'border-box');
        
        const after = {
            width: window.getComputedStyle(coder).width,
            margin: window.getComputedStyle(coder).margin,
            textAlign: window.getComputedStyle(coder).textAlign
        };
        
        console.log('AVANT:', before);
        console.log('APRÈS:', after);
        
        // Forcer h2 dans .coder
        const h2 = coder.querySelector('h2');
        if (h2) {
            forceStyle(h2, 'display', 'block');
            forceStyle(h2, 'width', 'auto');
            forceStyle(h2, 'max-width', '100%');
            forceStyle(h2, 'margin', '0 auto 1.5rem auto');
            forceStyle(h2, 'text-align', 'center');
            forceStyle(h2, 'font-size', '1.75rem');
        }
        
        // Forcer .ul dans .coder
        const ul = coder.querySelector('.ul');
        if (ul) {
            forceStyle(ul, 'display', 'inline-block');
            forceStyle(ul, 'width', 'auto');
            forceStyle(ul, 'max-width', '100%');
            forceStyle(ul, 'margin', '0 auto');
            forceStyle(ul, 'text-align', 'left');
        }
    }
    
    // 4. Forcer #img-pie
    const imgPie = document.getElementById('img-pie');
    if (imgPie) {
        console.log('🖼️ Correction de #img-pie...');
        const before = {
            width: window.getComputedStyle(imgPie).width,
            margin: window.getComputedStyle(imgPie).margin,
            position: window.getComputedStyle(imgPie).position
        };
        
        forceStyle(imgPie, 'display', 'block');
        forceStyle(imgPie, 'position', 'relative');
        forceStyle(imgPie, 'top', 'auto');
        forceStyle(imgPie, 'left', 'auto');
        forceStyle(imgPie, 'right', 'auto');
        forceStyle(imgPie, 'transform', 'none');
        forceStyle(imgPie, 'width', '100%');
        forceStyle(imgPie, 'max-width', '300px');
        forceStyle(imgPie, 'height', 'auto');
        forceStyle(imgPie, 'margin', '2.5rem auto 0 auto');
        forceStyle(imgPie, 'margin-left', 'auto');
        forceStyle(imgPie, 'margin-right', 'auto');
        forceStyle(imgPie, 'clear', 'both');
        forceStyle(imgPie, 'float', 'none');
        forceStyle(imgPie, 'box-sizing', 'border-box');
        
        const after = {
            width: window.getComputedStyle(imgPie).width,
            margin: window.getComputedStyle(imgPie).margin,
            position: window.getComputedStyle(imgPie).position
        };
        
        console.log('AVANT:', before);
        console.log('APRÈS:', after);
    }
    
    console.log('%c✅ FORCE LAYOUT TERMINÉ', 'color: green; font-weight: bold; font-size: 14px;');
    console.log('Vérifiez visuellement si les éléments sont maintenant centrés et empilés verticalement.');
})();
