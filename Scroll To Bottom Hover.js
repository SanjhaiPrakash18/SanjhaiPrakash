document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('scrollToBottom');

    document.addEventListener('mousemove', (event) => {
        const rect = button.getBoundingClientRect();
        const buttonX = rect.left + rect.width / 2;
        const buttonY = rect.top + rect.height / 2;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const angle = Math.atan2(mouseY - buttonY, mouseX - buttonX);
        const distance = Math.min(Math.sqrt((mouseX - buttonX) ** 2 + (mouseY - buttonY) ** 2), 20); // Adjust max distance as needed

        button.style.transform = `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1.2)`;
    });
});
