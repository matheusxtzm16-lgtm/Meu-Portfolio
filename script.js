// Seleciona todos os cards de projetos, exceto o que está em desenvolvimento
const cards = document.querySelectorAll('.project-card:not(.production-card)');

cards.forEach(card => {
    card.addEventListener('click', (event) => {
        // Se o usuário clicou em um link ou botão dentro do card, 
        // deixa o navegador seguir o link normalmente sem interferir
        if (event.target.closest('a') || event.target.closest('button')) {
            return;
        }

        // Remove a classe 'active' de todos os outros cards
        cards.forEach(c => {
            if (c !== card) {
                c.classList.remove('active');
            }
        });
        
        // Alterna a classe 'active' no card clicado (se clicar de novo, ele desmarca)
        card.classList.toggle('active');
    });
});