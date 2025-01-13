document.addEventListener('DOMContentLoaded', function() {
    const facts = document.querySelector('.facts');
    let isDown = false;
    let startX;
    let startY;
    let scrollLeft;
    let scrollTop;

    // Maus-Events
    facts.addEventListener('mousedown', (e) => {
        isDown = true;
        facts.style.cursor = 'grabbing';
        startX = e.pageX - facts.offsetLeft;
        startY = e.pageY - facts.offsetTop;
        scrollLeft = facts.scrollLeft;
        scrollTop = facts.scrollTop;
    });

    facts.addEventListener('mouseleave', () => {
        isDown = false;
        facts.style.cursor = 'grab';
    });

    facts.addEventListener('mouseup', () => {
        isDown = false;
        facts.style.cursor = 'grab';
    });

    facts.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - facts.offsetLeft;
        const y = e.pageY - facts.offsetTop;
        const walkX = (x - startX) * 1; // Horizontale Scrollgeschwindigkeit
        const walkY = (y - startY) * 1; // Vertikale Scrollgeschwindigkeit
        facts.scrollLeft = scrollLeft - walkX;
        facts.scrollTop = scrollTop - walkY;
    });

    // Touch-Events für Mobile
    facts.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - facts.offsetLeft;
        startY = e.touches[0].pageY - facts.offsetTop;
        scrollLeft = facts.scrollLeft;
        scrollTop = facts.scrollTop;
    });

    facts.addEventListener('touchend', () => {
        isDown = false;
    });

    facts.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - facts.offsetLeft;
        const y = e.touches[0].pageY - facts.offsetTop;
        const walkX = (x - startX) * 1;
        const walkY = (y - startY) * 1;
        facts.scrollLeft = scrollLeft - walkX;
        facts.scrollTop = scrollTop - walkY;
    });
});