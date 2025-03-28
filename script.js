const artPieces = document.querySelectorAll('.art-piece');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const lightboxDescription = document.querySelector('.lightbox-description');
const closeBtn = document.querySelector('.close');

artPieces.forEach(piece => {
    piece.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxContent.innerHTML = `<div class="${piece.classList[1]}"></div>`;
        lightboxDescription.textContent = piece.getAttribute('data-description');
        lightbox.style.opacity = '1'; // Ensure lightbox is visible
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});