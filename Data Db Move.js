const dataDashboard = document.querySelector('.data-dashboard-outline');

dataDashboard.addEventListener('mousemove', (e) => {
    const rect = dataDashboard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = -(x - centerX) / 10;

    dataDashboard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

dataDashboard.addEventListener('mouseleave', () => {
    dataDashboard.style.transform = 'rotateX(0) rotateY(0) scale(1)';
});