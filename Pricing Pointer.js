document.addEventListener('DOMContentLoaded', () => {
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach((card) => {
        card.addEventListener('mousemove', (event) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            card.style.background = `radial-gradient(circle at ${x}px ${y}px, #fafaff 35%, transparent 50%)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = '#fff';
        });
    });
});