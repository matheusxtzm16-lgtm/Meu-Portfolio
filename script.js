// Seleciona todos os cards de projetos
const cards = document.querySelectorAll('.project-card');
// Adiciona um evento de clique a cada card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove a borda de todos os cards
        cards.forEach(c => c.style.border = 'none');

        // Adiciona uma borda ao card clicado
        card.style.border = '2px solid #e94560';
    });
});