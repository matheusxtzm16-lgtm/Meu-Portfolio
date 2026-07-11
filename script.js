// Seleciona todos os cards de projetos
const cards = document.querySelectorAll('.project-card');

// Adiciona um evento de clique a cada card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove a classe 'active' de todos os cards
        cards.forEach(c => c.classList.remove('active'));
        
        // Adiciona a classe 'active' apenas ao card clicado
        card.classList.add('active');
    });
});