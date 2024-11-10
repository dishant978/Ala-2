document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('h2 span');
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.transform = 'scale(1.2)';
            span.style.transition = 'transform 0.5s ease';
        }, index * 200);
    });
});
