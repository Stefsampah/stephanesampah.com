// SCRIPT POUR FORCER TOUTES LES CORRECTIONS
// Copiez-collez ce script dans la console (F12) pour forcer l'application immédiate

(function() {
    console.clear();
    console.log('%c🔧 FORCEMENT DES CORRECTIONS', 'font-size: 16px; font-weight: bold; color: #ff0066;');
    
    // 1. Forcer l'image pie-chart
    const imgPie = document.getElementById('img-pie');
    if (imgPie) {
        console.log('🔧 Correction de #img-pie...');
        imgPie.src = 'images/pie-chart-removebg-preview.png';
        imgPie.style.setProperty('display', 'block', 'important');
        imgPie.style.setProperty('visibility', 'visible', 'important');
        imgPie.style.setProperty('opacity', '1', 'important');
        imgPie.style.setProperty('width', '100%', 'important');
        imgPie.style.setProperty('max-width', '300px', 'important');
        imgPie.style.setProperty('height', 'auto', 'important');
        imgPie.classList.add('loaded', 'animated');
        console.log('✅ #img-pie corrigé');
    } else {
        console.error('❌ #img-pie non trouvé');
    }
    
    // 2. Forcer l'image main
    const imgMain = document.querySelector('#img-main img.major');
    if (imgMain) {
        console.log('🔧 Correction de #img-main...');
        imgMain.style.setProperty('display', 'block', 'important');
        imgMain.style.setProperty('visibility', 'visible', 'important');
        imgMain.style.setProperty('opacity', '1', 'important');
        imgMain.classList.add('loaded', 'animated');
        console.log('✅ #img-main corrigé');
    } else {
        console.error('❌ #img-main non trouvé');
    }
    
    // 3. Forcer l'image random-facts
    const imgRandomFacts = document.querySelector('#img-random-facts img.major');
    if (imgRandomFacts) {
        console.log('🔧 Correction de #img-random-facts...');
        imgRandomFacts.style.setProperty('display', 'block', 'important');
        imgRandomFacts.style.setProperty('visibility', 'visible', 'important');
        imgRandomFacts.style.setProperty('opacity', '1', 'important');
        imgRandomFacts.classList.add('loaded', 'animated');
        console.log('✅ #img-random-facts corrigé');
    } else {
        console.error('❌ #img-random-facts non trouvé');
    }
    
    // 4. Forcer les animations
    console.log('🔧 Initialisation des animations...');
    if (typeof initScrollAnimations === 'function') {
        initScrollAnimations();
        console.log('✅ Animations initialisées');
    } else {
        console.error('❌ initScrollAnimations n\'existe pas');
    }
    
    // 5. Forcer la section skills - espacement
    const barChart = document.querySelector('.bar-chart');
    if (barChart) {
        console.log('🔧 Correction de .bar-chart...');
        barChart.style.setProperty('padding', '4rem 0 3rem 0', 'important');
        barChart.style.setProperty('overflow-y', 'visible', 'important');
        console.log('✅ .bar-chart corrigé');
    }
    
    const percents = document.querySelectorAll('.bar-chart li .percent');
    percents.forEach(percent => {
        percent.style.setProperty('top', '-3.5rem', 'important');
        percent.style.setProperty('font-size', '1.75rem', 'important');
        percent.style.setProperty('white-space', 'nowrap', 'important');
    });
    
    const skills = document.querySelectorAll('.bar-chart li .skill');
    skills.forEach(skill => {
        skill.style.setProperty('bottom', '-2.5rem', 'important');
        skill.style.setProperty('font-size', '0.9rem', 'important');
    });
    
    console.log('✅ Pourcentages et skills corrigés');
    
    // 6. Forcer les snaps à être visibles
    const snaps = document.getElementById('snaps');
    if (snaps) {
        console.log('🔧 Correction de #snaps...');
        snaps.style.setProperty('visibility', 'visible', 'important');
        snaps.style.setProperty('opacity', '1', 'important');
        snaps.classList.add('animated');
        
        const snapItems = snaps.querySelectorAll('.snap-item');
        snapItems.forEach((item, idx) => {
            item.style.setProperty('visibility', 'visible', 'important');
            item.style.setProperty('opacity', '1', 'important');
            item.classList.add('animated');
        });
        console.log('✅ Snaps corrigés');
    }
    
    // 7. Forcer text-main
    const textMain = document.getElementById('text-main');
    if (textMain) {
        console.log('🔧 Correction de #text-main...');
        textMain.style.setProperty('visibility', 'visible', 'important');
        textMain.style.setProperty('opacity', '1', 'important');
        textMain.style.setProperty('transform', 'translateX(0)', 'important');
        textMain.classList.add('animated');
        console.log('✅ #text-main corrigé');
    }
    
    console.log('');
    console.log('%c✅ TOUTES LES CORRECTIONS FORCÉES', 'color: green; font-weight: bold; font-size: 14px;');
    console.log('Si les images ne s\'affichent toujours pas, vérifiez:');
    console.log('1. Que les fichiers images existent dans le dossier images/');
    console.log('2. Que le serveur sert bien les fichiers');
    console.log('3. Videz le cache: Ctrl+Shift+R');
})();
