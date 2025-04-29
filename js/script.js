document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.animated-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Para que la animación ocurra solo una vez
            }
        });
    }, {
        threshold: 0.5 // La animación se activa cuando el 50% de la tarjeta es visible
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});