document.addEventListener('DOMContentLoaded', function () {
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Restablecer todas las tarjetas a su estado original
            cards.forEach(c => {
                c.classList.remove('expandir');
            });

            // Expandir la tarjeta clicada
            card.classList.add('expandir');
        });
    });
});
